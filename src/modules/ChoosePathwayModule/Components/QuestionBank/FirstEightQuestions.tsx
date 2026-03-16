import images from "@/src/assets/images";
import Image from "next/image";
import {
  PILLAR_DATA,
  PILLAR_DATA_QUESTIONS,
  PRINCIPLE_TYPE,
  SituationalQuestion,
  StrengthQuestion,
} from "../../Types/ResponseTypes";
/* eslint-disable @typescript-eslint/no-explicit-any */
type FIRST_EIGHT_QUESTION_PROPS = {
  onAnswer: (qNo: number, value: any) => void;
  answers: any;
  pillarOne?: PILLAR_DATA;
};

function FirstEightQuestions(props: FIRST_EIGHT_QUESTION_PROPS) {
  const { onAnswer, answers, pillarOne } = props;

  function isStrengthQuestion(q: PILLAR_DATA_QUESTIONS): q is StrengthQuestion {
    return q.type === "strength";
  }

  const allQuestions: PILLAR_DATA_QUESTIONS[] = Object.values(
    pillarOne?.principles || {},
  ).flatMap((principle: PRINCIPLE_TYPE) => principle.questions);
  return (
    <>
      {allQuestions.map((item, index) => {
        const qNo = index + 1;

        return (
          <div key={index} className="mt-10">
            <p className="text-[21px] font-[700] text-[#737373]">
              Q{qNo}: {item.prompt}
            </p>

            {isStrengthQuestion(item) ? (
              <div className="relative mt-8 ml-[100px]">
                <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

                <div className="flex justify-between relative">
                  {item?.scale?.labels.map((label: any) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className="relative w-[24px] h-[24px] cursor-pointer"
                        onClick={() => onAnswer(qNo, label)}
                      >
                        <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                        {answers[qNo] === label && (
                          <Image
                            src={images.tickImg}
                            alt="tick"
                            width={14}
                            height={14}
                            className="absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2"
                          />
                        )}
                      </div>

                      <span className="text-[16px] text-[#737373]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-4 ml-[100px]">
                {Object.entries(item.option_text).map(([key, value]) => (
                  <label
                    key={key}
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => onAnswer(qNo, key)}
                  >
                    <span className="text-[19px] text-[#737373]">
                      ({key}) {value}
                    </span>

                    <span className="relative w-[21px] h-[23px]">
                      <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

                      {answers[qNo] === key && (
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={12}
                          height={12}
                          className="absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
export default FirstEightQuestions;
