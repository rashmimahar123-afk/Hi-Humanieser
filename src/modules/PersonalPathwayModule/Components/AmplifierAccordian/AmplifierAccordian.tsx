"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierAccordian({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="rounded-[18px] overflow-hidden bg-[#FBE3B6]">
          <Disclosure.Button className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-7 text-left text-[#0F4F58] text-[20px] sm:text-[26px] lg:text-[35px] font-bold font-[RocaTwo] focus:outline-none">
            <span>{title}</span>
            <Image
              src={images.dottedArrow}
              alt="arrow"
              width={42}
              height={28}
              className={`transition-transform duration-300 shrink-0 w-[24px] h-[16px] sm:w-[34px] sm:h-[22px] lg:w-[42px] lg:h-[28px] ${
                open ? "rotate-180" : ""
              }`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="px-4 sm:px-6 lg:px-8 pb-5 lg:pb-7 text-[#245B5F] text-[14px] sm:text-[15px] leading-[1.7]">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default AmplifierAccordian;
