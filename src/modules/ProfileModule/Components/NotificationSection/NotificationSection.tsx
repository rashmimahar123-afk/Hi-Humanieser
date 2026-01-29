import Image from "next/image";

function NotificationSection({
  title,
  subtitle,
  children,
  className = "",
  icon,
}: any) {
  return (
    <div className={className}>
      <div className="flex items-center gap-[12px] mb-[16px]">
        {icon && <Image src={icon} alt="section-icon" width={36} height={36} />}

        <h3 className="text-[#0F4F58] text-[22px] font-bold">{title}</h3>
      </div>

      {subtitle && (
        <p className="text-[#0F4F58] text-[20px] mb-[20px] ml-[44px]">
          {subtitle}
        </p>
      )}

      <div className="flex flex-col ml-[140px]">{children}</div>
    </div>
  );
}

export default NotificationSection;
