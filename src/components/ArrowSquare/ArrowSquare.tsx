import Image from "next/image";
import images from "@/src/assets/images";
type ARROW_SQUARE_PROPS = {
  width: string;
  height: string;
};
function ArrowSquare(props: ARROW_SQUARE_PROPS) {
  const { width, height } = props;
  return (
    <>
      <div
        className={
          "relative bg-[#4BA6A6]  rounded-[4px] flex items-center justify-center"
        }
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Arrow */}
        <div
          className="absolute right-[-6px] w-0 h-0 
"
        />
        <Image src={images.smallArrow} alt="small-arrow" />
      </div>
    </>
  );
}
export default ArrowSquare;
