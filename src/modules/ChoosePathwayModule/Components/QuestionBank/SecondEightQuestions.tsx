import images from "@/src/assets/images";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */
type SECOND_EIGHT_QUESTION_PROPS = {
  onAnswer: (qNo: number, value: any) => void;
  answers: any;
};

function SecondEightQuestions(props: SECOND_EIGHT_QUESTION_PROPS) {
  const { onAnswer, answers } = props;
  return (
    <>
      {/* Q9 */}
      <div className="mt-8">
        <p className="text-[21px] font-[700] leading-snug text-[#737373] font-[Aptos]">
          Q9: At work, I try to notice people’s efforts and qualities beyond
          just their outputs
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
                      onClick={() => onAnswer(9, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[9] === label && (
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

      {/* Q10 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q10:When I sense a colleague might be struggling, I tend to…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(10, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) notice it but keep my focus on my own work
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[10] === "a" && (
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
            onClick={() => onAnswer(10, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) check in gently when the moment feels right
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[10] === "b" && (
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
            onClick={() => onAnswer(10, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) ask directly and make sure they know I’m here to support
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[10] === "c" && (
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
      {/* Q11 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q11: People can be honest with me without worrying I’ll judge them for
          it
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
                      onClick={() => onAnswer(11, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[11] === label && (
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
      {/* Q12 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q12: If someone is cut off or ignored in a meeting, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(12, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) let the conversation move on
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[12] === "a" && (
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
            onClick={() => onAnswer(12, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) wait for a pause and invite them back in
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[12] === "b" && (
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
            onClick={() => onAnswer(12, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) address it directly and call out the behaviour
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[12] === "c" && (
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
      {/* Q13 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q13: I take time to make my messages clear so people don’t have to
          guess what I mean
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
                      onClick={() => onAnswer(13, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[13] === label && (
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
      {/* Q14 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q14: When I give an update, people’s response is usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(14, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) asking me to repeat or clarify
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[14] === "a" && (
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
            onClick={() => onAnswer(14, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) understanding me in the moment, but not always acting on it
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[14] === "b" && (
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
            onClick={() => onAnswer(14, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) clear on next steps and confident about what to do
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[14] === "c" && (
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
      {/* Q15 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q15: When someone’s speaking, I give them my full attention instead of
          planning what I’ll say next
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
                      onClick={() => onAnswer(15, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[15] === label && (
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
      {/* Q16 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q16: After a conversation, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(16, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) remember the main points but miss some details
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[16] === "a" && (
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
            onClick={() => onAnswer(16, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) recall both what was said and how the person felt
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[16] === "b" && (
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
            onClick={() => onAnswer(16, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) realise I was half-listening and need to ask again later
            </span>
            <span className="relative w-[15px] h-[17px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[16] === "c" && (
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
export default SecondEightQuestions;
