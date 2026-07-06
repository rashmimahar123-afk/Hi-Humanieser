import Image from "next/image";

function ProfilePathwayCard({
  title,
  description,
  shapeImg,
  arrowImg,
  arrowPosition,
  width,
  rotate,
  onClick,
}: {
  title: string;
  description: string;
  shapeImg: any;
  arrowImg?: any;
  arrowPosition?: string;
  width?: string;
  rotate?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center px-0.5 min-[400px]:px-1 sm:px-2 md:px-0">
      <div
        className={`relative w-[80px] h-[80px] min-[400px]:w-[100px] min-[400px]:h-[100px] min-[500px]:w-[120px] min-[500px]:h-[120px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:drop-shadow-[0_18px_30px_rgba(15,79,88,0.25)] cursor-pointer`}
        onClick={onClick}
      >
        {/* Background Shape */}
        <Image src={shapeImg} alt="shape" fill className="object-contain" />

        {arrowImg && (
          <Image
            src={arrowImg}
            alt="arrow decoration"
            className={`absolute ${arrowPosition} h-auto w-[40px] min-[400px]:w-[50px] sm:w-[60px] md:w-[70px]`}
            style={{ rotate: rotate }}
            width={70}
            height={70}
          />
        )}

        {/* Title */}
        <h3 className="relative z-10 text-[#0F4F58] text-[9px] min-[400px]:text-[11px] min-[500px]:text-[13px] sm:text-[20px] md:text-[26px] font-[RocaTwo] font-bold leading-[13px] min-[400px]:leading-[15px] min-[500px]:leading-[18px] sm:leading-[26px] md:leading-[32px] text-center px-1 sm:px-3 md:px-4">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#0F4F58] text-[8px] min-[400px]:text-[10px] min-[500px]:text-[12px] sm:text-[15px] md:text-[18px] mt-1.5 min-[400px]:mt-2 min-[500px]:mt-3 sm:mt-5 md:mt-[24px] leading-[12px] min-[400px]:leading-[14px] min-[500px]:leading-[17px] sm:leading-[22px] md:leading-[26px] max-w-[80px] min-[400px]:max-w-[100px] min-[500px]:max-w-[130px] sm:max-w-[180px] md:max-w-[250px]">
        {description}
      </p>
    </div>
  );
}

export default ProfilePathwayCard;
