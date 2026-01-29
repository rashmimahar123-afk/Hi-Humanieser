function NotificationItems({ text }: { text: string }) {
  return (
    <label className="flex items-start gap-[14px] cursor-pointer">
      <span className="w-[16px] h-[16px] rounded-full border-2 border-[#0F4F58] mt-[4px]" />
      <p className="text-[#0F4F58] text-[18px] leading-[28px] ">{text}</p>
    </label>
  );
}
export default NotificationItems;
