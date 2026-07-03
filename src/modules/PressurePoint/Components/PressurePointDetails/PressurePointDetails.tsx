"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import PressurePointSection from "../PressurePointSection/PressurePointSection";
import { PRESSURE_POINT_CONFIG } from "@/src/lib/Helpers";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useStartCycleMutation } from "../../Hooks/useStartCycleMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import CompletePressurePointModal, {
  openCompletePressurePoint,
} from "../CompletePressurePointModal/CompletePressurePointModal";
import PressurePointRecordedModal, {
  openPressurePointRecorded,
} from "../PressurePointRecordedModal/PressurePointRecordedModal";

function PressurePointDetails() {
  const { type } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const data = PRESSURE_POINT_CONFIG[type as string];

  if (!data) return <div>Invalid Type</div>;

  const { user } = useAuthValue();
  const { mutate, isPending } = useStartCycleMutation();

  const handleContinue = () => {
    mutate(
      {
        // team_id: user?.team_id ?? "",
        pressure_point: data?.title,
      },
      {
        onSuccess: () => {
          openPressurePointRecorded();
        },
        onError: (error: any) => {
          console.error("Start cycle failed", error);

          const message =
            error?.response?.data?.detail || //  important (your API uses "detail")
            error?.response?.data?.message ||
            error?.message;

          //  handle 409 specifically
          if (error?.response?.status === 409) {
            openCompletePressurePoint({
              type: "ERROR_409",
              message,
            });

            return;
          }

          SnackbarHandler.errorToast(
            message || "Something went wrong. Please try again.",
          );
        },
      },
    );
  };
  return (
    <>
      <div className="min-h-screen bg-[#E9E6E2] relative overflow-hidden">
        {/* RIGHT ABSTRACT SHAPES */}
        <div className="relative">
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={630}
            height={630}
            className="absolute top-0 right-0 z-0"
          />
        </div>
        <div className="px-8 py-6 relative z-10">
          {/* TITLE */}
          <h1 className="text-[#0f4f58] text-[32px] leading-[50px] font-bold mb-6 font-[RocaTwo]">
            Pressure Point <br />
            {data.title}
          </h1>

          {/* DESCRIPTION BOX */}
          <div className="bg-[#f8e1b8] text-[#0f4f58] text-[20px] leading-[28px] p-6 rounded-2xl max-w-3xl mb-16 font-[Roboto] ml-4">
            {data.description}
          </div>

          {/* SECTION 1 */}
          <PressurePointSection
            title="What’s usually underneath"
            description={data.underneath}
          />

          {/* SECTION 2 */}
          <PressurePointSection
            title="A common leadership response"
            description={data.response}
          />

          {/* CENTER EMPHASIS */}
          <SuccessMessage
            text={data?.message}
            fontSize="text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0f4f58"
            left="410px"
            bottom="186px"
            rightImgRight="410px"
            rightImgBottom="186px"
            rotate="-35deg"
          />

          <div className="flex justify-end  mb-[7px]">
            <div className="cursor-pointer" onClick={handleContinue}>
              <PolygonButton
                width="142px"
                height="107px"
                bgColor="#acd5ab"
                radius={14}
                clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
              >
                <span className="text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold leading-tight text-center">
                  Continue with
                  <br />
                  <span className="whitespace-nowrap">this pressure</span>
                </span>
              </PolygonButton>
            </div>
          </div>

          {/* Choose Another */}
          <div className="flex justify-end">
            <CommonButtons
              label="Choose
Another Pressure"
              bgColor="#fbe1de"
              onClick={() => router.push("/team-focus")}
            />
          </div>
        </div>
      </div>
      <CompletePressurePointModal />
      <PressurePointRecordedModal type={from || ""} />
    </>
  );
}

export default PressurePointDetails;
