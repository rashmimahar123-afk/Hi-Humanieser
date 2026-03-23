/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./MySelfPage.module.css";
import { useRouter } from "next/navigation";
import MySelfCard from "./MySelfCard/MySelfCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useChooseMyselfQuery from "../../Hooks/useChooseMyselfQuery";
import { CHOOSE_MYSELF_PILLAR_TYPE } from "../../Types/ResponseTypes";

function MySelfPage() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);
  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);

  const isPathwaySelected = selectedPathways.length > 0;

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  const togglePathway = (id: number) => {
    setSelectedPathways((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id]; // no limit now
    });
  };

  const { data, isLoading, isError } = useChooseMyselfQuery();
  const pillarsData = data?.data?.slice(1); // skip pulse_check_config
  const pillarsList = data?.data?.slice(1)?.[0]?.pillars || [];

  console.log("pillarsDatapillarsData", pillarsList);

  return (
    <div
      className={`bg-[#4BA6A6] min-h-screen ${styles.page} ${
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
      <div className="flex">
        {" "}
        {/* Overlay content */}
        <div className="absolute inset-0 px-8 py-6 flex justify-between">
          {/* Left */}
          <div>
            <div
              className="text-[#0f4f58]"
              style={{ fontFamily: "Aptos", fontSize: "22px" }}
            >
              Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
            </div>

            <h1
              className={`mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]`}
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Hi Maria!
            </h1>
            <div className="ml-[30px] mt-[60px]">
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
                Each Pathway is built around one of Hi Humaniser’s Principles —
                think of it as your practical guide to bringing that idea to
                life through small, real actions.
              </p>
              <div className="mt-[100px] ">
                <p
                  className="text-[22px] text-[#0f4f58] "
                  style={{ fontFamily: "Aptos" }}
                >
                  Select up to two Pathways to start with. We’ll guide you step
                  by step — through behaviours, micro-actions, reflections, and
                  small shifts that grow over time.
                </p>
              </div>
            </div>
          </div>

          {/* Right profile */}
          <div className="flex items-start gap-3">
            <div
              className="text-right text-[#0F4F58] font-semibold mt-[28px] "
              style={{ fontFamily: "Aptos" }}
            >
              Maria
              <br />
              Palacios
            </div>
            <div className="relative w-[120px] h-[120px]">
              {/* Green shape */}
              <Image
                src={images.greenRec}
                alt="Decorative Rectangle"
                fill
                className="object-contain"
              />

              {/* Circular profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={images.userProfile}
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[76px] pt-[400px]">
        <div className="mt-[70px]">
          <div>
            {pillarsList?.map((item: CHOOSE_MYSELF_PILLAR_TYPE, index: any) => {
              return (
                <>
                  <div className="mt-[32px] " key={`item ${index}`}>
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
                        selected: selectedPathways.includes(
                          principleItem?.principle_number,
                        ),
                        onSelect: () =>
                          togglePathway(principleItem?.principle_number),
                      }))}
                    />
                  </div>
                </>
              );
            })}
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
  );
}

export default MySelfPage;
