/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./MySelfPage.module.css";
import { useRouter } from "next/navigation";
import MySelfCard from "./MySelfCard/MySelfCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useChooseMyselfQuery from "../../Hooks/useChooseMyselfQuery";
import { CHOOSE_MYSELF_PILLAR_TYPE } from "../../Types/ResponseTypes";
import { useCreateMppMutation } from "../../Hooks/useCreateMppMutation";
import { useDeletePathwayMutation } from "../../Hooks/useDeletePathwayMutation";
import { useGetPathwaySelectMssgQuery } from "@/src/modules/WelcomeModule/Hooks/useGetPathwaySelectMssgQuery";
import useEventEmitter from "@/src/components/Hooks/useEventEmitter";
import ActivePathwayModal, {
  openActivePathwayModal,
} from "../ActivePathwayModal/ActivePathwayModal";
import DeletePathwayModal, {
  openDeletePathwayModal,
} from "../DeletePathwayModal/DeletePathwayModal";
import ShowMaxTwoMppModal, {
  openShowMaxTwoMpp,
} from "../ShowMaxTwoMppModal/ShowMaxTwoMppModal";
import useGetListMppQuery from "../../Hooks/useGetListMppQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";

type ActivePathwayType = {
  pathwayNumber: string;
  uuid: string;
  data: any;
};

function MySelfPage() {
  const [enter, setEnter] = useState(false);
  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
  const [localPathwayUuids, setLocalPathwayUuids] = useState<
    Record<number, string>
  >({});
  const { user } = useAuthValue();

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  const { data, isLoading, isError } = useChooseMyselfQuery();
  // const pillarsData = data?.data?.slice(1); // skip pulse_check_config
  // const pillarsList = data?.data?.slice(1)?.[0]?.pillars || [];
  const pillarsData = data?.data?.[1];

  const pillarsList =
    pillarsData && "pillars" in pillarsData ? pillarsData.pillars : [];

  const { mutate: createMpp } = useCreateMppMutation();
  const { mutate: deleteMpp } = useDeletePathwayMutation();
  const { refetch: getRandomMessage } = useGetPathwaySelectMssgQuery();

  const handleSelect = async (principleNumber: number) => {
    const isAlreadySelected = finalSelectedPathways.includes(principleNumber);

    if (isAlreadySelected) {
      const uuid = pathwayUuids[principleNumber];

      if (!uuid) {
        console.warn("UUID missing for pathway:", principleNumber);
        return;
      }

      openDeletePathwayModal({
        uuid,
        index: principleNumber,
      });

      return;
    }

    // CASE 2: MAX LIMIT (including prefilled)
    if (totalSelectedCount >= 2) {
      openShowMaxTwoMpp();
      return;
    }

    try {
      const res = await getRandomMessage();
      const messageObj = {
        message: res?.data || "",
      };

      createMpp(
        { pathways: [principleNumber] },
        {
          onSuccess: (res) => {
            const uuid = res?.new_uuids?.[0];

            if (uuid) {
              setLocalPathwayUuids((prev) => ({
                ...prev,
                [principleNumber]: uuid,
              }));

              openActivePathwayModal(
                uuid,
                messageObj,
                principleNumber,
                totalSelectedCount + 1,
              );
            }
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEventEmitter("DELETE_PATHWAY_SUCCESS", ({ index }) => {
    setSelectedPathways((prev) => prev.filter((id) => id !== index));
    setLocalPathwayUuids((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  });

  useEventEmitter("PATHWAY_CONFIRMED", ({ principleNumber }) => {
    setSelectedPathways((prev) => [...prev, principleNumber]);
  });

  const { data: listMppData, refetch } = useGetListMppQuery();
  const pathwayData = listMppData?.data?.pathways;

  const activePathways = pathwayData?.filter((item) => item.active);

  const formattedActivePathways: ActivePathwayType[] = useMemo(() => {
    if (!activePathways) return [];

    return activePathways
      .map((item) => {
        const pathwayKey = Object.keys(item).find(
          (key) => !["created", "uuid", "active"].includes(key),
        );

        if (!pathwayKey) return null;

        return {
          pathwayNumber: pathwayKey,
          uuid: item.uuid,
          data: item[pathwayKey as keyof typeof item],
        };
      })
      .filter(Boolean) as ActivePathwayType[];
  }, [activePathways]);

  const activeFromAPI = (formattedActivePathways || []).map((item) =>
    Number(item.pathwayNumber),
  );

  const finalSelectedPathways = Array.from(
    new Set([...selectedPathways, ...activeFromAPI]),
  );

  const totalSelectedCount = finalSelectedPathways.length;

  const isPathwaySelected = finalSelectedPathways.length > 0;

  const pathwayUuids = useMemo(() => {
    const map: Record<number, string> = {};

    formattedActivePathways.forEach((item) => {
      map[Number(item.pathwayNumber)] = item.uuid;
    });

    return {
      ...map,
      ...localPathwayUuids,
    };
  }, [formattedActivePathways, localPathwayUuids]);
  return (
    <>
      <div
        className={`bg-[#4BA6A6] min-h-screen relative ${styles.page} ${
          enter ? styles.enterActive : styles.enter
        }`}
      >
        <Image
          src={images.mySelfRec}
          alt="register-rectangle"
          width={830}
          height={830}
          className="absolute top-0 left-0 z-0"
        />
        <div className="flex ">
          {" "}
          {/* Overlay content */}
          <div className="absolute inset-0 px-8 py-6 flex justify-between">
            {/* Left */}
            <div>
              <UserProfileHeader
                greetingColor="#0f4f58"
                nameColor="#0F4F58"
                userInfo={user}
              />

              <div className="ml-[30px] ">
                <h2
                  className=" text-[42px] text-[#567F55] font-bold"
                  style={{ fontFamily: "RocaTwo-Bold" }}
                >
                  Choose the Pathway that feels right for you
                </h2>

                <p
                  className="text-[22px] text-[#0f4f58] ml-[20px]  "
                  style={{ fontFamily: "Aptos" }}
                >
                  Each Pathway is built around one of Hi Humaniser’s Principles
                  — think of it as your practical guide to bringing that idea to
                  life through small, real actions.
                </p>
                <div className="mt-[100px] ">
                  <p
                    className="text-[22px] text-[#0f4f58] "
                    style={{ fontFamily: "Aptos" }}
                  >
                    Select up to two Pathways to start with. We’ll guide you
                    step by step — through behaviours, micro-actions,
                    reflections, and small shifts that grow over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Right profile */}
          </div>
        </div>
        <div className="ml-[76px] pt-[400px]">
          <div className="mt-[70px]">
            <div>
              {pillarsList?.map(
                (item: CHOOSE_MYSELF_PILLAR_TYPE, index: any) => {
                  return (
                    <div className="mt-[32px] " key={item?.pillar_id}>
                      <MySelfCard
                        sectionTitle={item?.pillar_name}
                        bgColor={
                          item?.pillar_number === 1
                            ? "#9FD3D1"
                            : item?.pillar_number === 2
                              ? "#acd5ab"
                              : "#f8e1b8"
                        }
                        cards={item?.principles?.map((principleItem) => ({
                          title: principleItem?.principle_name,
                          description: principleItem?.definition,
                          learnMoreColor: "#7EC9C6",
                          onLearnMore: () =>
                            router.push(
                              `/pathway-card?pillar=${item?.pillar_number}&principle=${principleItem?.principle_number}`,
                            ),
                          selected: finalSelectedPathways.includes(
                            principleItem?.principle_number,
                          ),
                          onSelect: () =>
                            handleSelect(principleItem?.principle_number),
                        }))}
                      />
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-[85px]">
          <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
            <CommonButtons
              label="Return to My Personal Pathway"
              bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
              disabled={!isPathwaySelected}
              onClick={() => router.push("/personal-pathway")}
            />
          </div>
        </div>
      </div>
      <ShowMaxTwoMppModal />
      <ActivePathwayModal />
      <DeletePathwayModal />
    </>
  );
}

export default MySelfPage;
