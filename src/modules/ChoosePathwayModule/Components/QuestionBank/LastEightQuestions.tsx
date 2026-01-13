/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";

type LAST_EIGHT_QUESTION_PROPS = {
  onAnswer: (qNo: number, value: any) => void;
  answers: any;
};

function LastEightQuestions(props: LAST_EIGHT_QUESTION_PROPS) {
  const { onAnswer, answers } = props;
  return (
    <>
      {/* Q17 */}
      <div className="mt-8">
        <p className="text-[21px] font-[700] leading-snug text-[#737373] font-[Aptos]">
          Q17: I’m aware that the way I behave at work sets the tone for the
          culture around me
        </p>

        {/* Slider / Radio */}
        <div className="relative mt-8 ml-[100px]">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

          {/* Circles */}
          <div className="flex justify-between relative">
            {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
              (label, i) => (
                <>
                  <div className="flex flex-col items-center gap-2">
                    {/* Circle wrapper */}
                    <div
                      className="relative w-[24px] h-[24px] cursor-pointer"
                      onClick={() => onAnswer(17, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[17] === label && (
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={14}
                          height={14}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-[16px] font-[Aptos] text-[#737373]">
                      {label}
                    </span>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>

      {/* Q18 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q18: When I join a new team, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(18, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) adapt to how things are done
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[18] === "a" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 2 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(18, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) share ideas on how we could improve day-to-day ways of working
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[18] === "b" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 3 */}
          <label
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onAnswer(18, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) help shape team habits and ways of working together
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[18] === "c" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>
        </div>
      </div>
      {/* Q19 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q19: I make an effort to include people so they feel they belong, not
          just that they’re present
        </p>

        {/* Options */}
        <div className="relative mt-8 ml-[100px]">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

          {/* Circles */}
          <div className="flex justify-between relative">
            {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
              (label, i) => (
                <>
                  <div className="flex flex-col items-center gap-2">
                    {/* Circle wrapper */}
                    <div
                      className="relative w-[24px] h-[24px] cursor-pointer"
                      onClick={() => onAnswer(19, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[19] === label && (
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={14}
                          height={14}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-[16px] font-[Aptos] text-[#737373]">
                      {label}
                    </span>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      {/* Q20 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q20: If someone is left out of a conversation or decision, I tend to…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(20, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) not notice at the time
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[20] === "a" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 2 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(20, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) check in with them afterwards
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[20] === "b" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 3 */}
          <label
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onAnswer(20, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) bring them back into the discussion straight away
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[20] === "c" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>
        </div>
      </div>
      {/* Q21 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q21: I see wellbeing as part of how we deliver results, not an extra
          on the side
        </p>

        {/* Options */}
        <div className="relative mt-8 ml-[100px]">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

          {/* Circles */}
          <div className="flex justify-between relative">
            {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
              (label, i) => (
                <>
                  <div className="flex flex-col items-center gap-2">
                    {/* Circle wrapper */}
                    <div
                      className="relative w-[24px] h-[24px] cursor-pointer"
                      onClick={() => onAnswer(21, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[21] === label && (
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={14}
                          height={14}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-[16px] font-[Aptos] text-[#737373]">
                      {label}
                    </span>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      {/* Q22 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q22: When workloads pile up, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(22, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) keep pushing until everything is done
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[22] === "a" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 2 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(22, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) raise concerns about what’s realistic
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[22] === "b" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 3 */}
          <label
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onAnswer(22, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) encourage the team to balance effort with recovery
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[22] === "c" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>
        </div>
      </div>
      {/* Q23 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q23: I think about whether the way we work today can be sustained over
          time
        </p>

        {/* Options */}
        <div className="relative mt-8 ml-[100px]">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

          {/* Circles */}
          <div className="flex justify-between relative">
            {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
              (label, i) => (
                <>
                  <div className="flex flex-col items-center gap-2">
                    {/* Circle wrapper */}
                    <div
                      className="relative w-[24px] h-[24px] cursor-pointer"
                      onClick={() => onAnswer(23, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[23] === label && (
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={14}
                          height={14}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-[16px] font-[Aptos] text-[#737373]">
                      {label}
                    </span>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      {/* Q24 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q24: When setting the pace for my work or team, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(24, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) push for speed, even if it’s exhausting
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[24] === "a" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 2 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(24, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) balance urgency with a steady rhythm
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[24] === "b" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>

          {/* Option 3 */}
          <label
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onAnswer(24, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) plan for a pace that can be maintained long term
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[24] === "c" && (
                <Image
                  src={images.tickImg}
                  alt="tick"
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 
                       -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </span>{" "}
          </label>
        </div>
      </div>
    </>
  );
}
export default LastEightQuestions;
