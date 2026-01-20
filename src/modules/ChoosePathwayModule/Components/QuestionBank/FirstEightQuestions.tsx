import images from "@/src/assets/images";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */
type FIRST_EIGHT_QUESTION_PROPS = {
  onAnswer: (qNo: number, value: any) => void;
  answers: any;
};

function FirstEightQuestions(props: FIRST_EIGHT_QUESTION_PROPS) {
  const { onAnswer, answers } = props;
  return (
    <>
      {/* Q1 */}
      <div className="mt-8">
        <p className="text-[21px] font-[700] leading-snug text-[#737373] font-[Aptos]">
          Q1: When things don’t go as expected, I reflect on what I could do
          differently next time.
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
                      onClick={() => onAnswer(1, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[1] === label && (
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

      {/* Q2 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q2: If a decision I was part of doesn’t turn out well, my first
          instinct is to…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(2, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) move on quickly and not dwell on it
            </span>

            {/* Triangle checkbox */}
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[2] === "a" && (
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

          {/* Option 2 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(2, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) reflect on what I could learn from it
            </span>

            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[2] === "b" && (
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

          {/* Option 3 */}
          <label
            className="flex items-center justify-between cursor-pointer"
            onClick={() => onAnswer(2, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) talk it through with others to see what we can all take away
            </span>

            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[2] === "c" && (
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
        </div>
      </div>
      {/* Q3 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q3: I ask questions to understand more deeply, even when I already
          know the basics
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
                      onClick={() => onAnswer(3, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[3] === label && (
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
      {/* Q4 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q4: When someone challenges my view, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(4, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) feel a bit defensive
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[4] === "a" && (
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
            onClick={() => onAnswer(4, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) get curious about their perspective
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[4] === "b" && (
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
            onClick={() => onAnswer(4, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) I listen a little, but don’t always explore their perspective
              fully
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[4] === "c" && (
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
      {/* Q5 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q5: I don’t feel pressure to always have the perfect answer — I can be
          open about what I know and what I don’t
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
                      onClick={() => onAnswer(5, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[5] === label && (
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
      {/* Q6 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q6: When I realise I’ve made a mistake, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(6, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) keep quiet and hope it’s not noticed
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[6] === "a" && (
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
            onClick={() => onAnswer(6, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) acknowledge it and suggest how to fix it
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[6] === "b" && (
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
            onClick={() => onAnswer(6, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) share it openly so others can learn too
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[6] === "c" && (
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
      {/* Q7 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q7: I make a conscious effort to see situations through other people’s
          eyes
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
                      onClick={() => onAnswer(7, label)}
                    >
                      {/* Circle */}
                      <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                      {/* Tick overlay */}
                      {answers[7] === label && (
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
      {/* Q8 Section */}
      <div className="mt-10">
        {/* Question */}
        <p className="text-[21px] text-[#737373] font-[Aptos] leading-none font-[700]">
          Q8: When making a decision, I usually…
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4 ml-[100px]">
          {/* Option 1 */}
          <label
            className="flex items-center justify-between  cursor-pointer"
            onClick={() => onAnswer(8, "a")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (a) rely mainly on my own perspective
            </span>
            {/* Triangle checkbox */}
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[8] === "a" && (
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
            onClick={() => onAnswer(8, "b")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (b) check in with how it might look from different angles
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[8] === "b" && (
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
            onClick={() => onAnswer(8, "c")}
          >
            <span className="text-[19px] text-[#737373] font-[Aptos] font-[400]">
              (c) seek out other voices before moving forward
            </span>
            <span className="relative w-[21px] h-[23px]">
              {/* Triangle */}
              <span className="w-full h-full bg-[#86C9C9] clip-triangle block" />

              {/* Tick overlay */}
              {answers[8] === "c" && (
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
export default FirstEightQuestions;
