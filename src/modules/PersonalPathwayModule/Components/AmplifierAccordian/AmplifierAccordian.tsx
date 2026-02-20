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
          {/* Header */}
          <Disclosure.Button
            className="
              w-full flex items-center justify-between
              px-8 py-7
              text-left
              text-[#0F4F58]
              text-[35px]
              font-bold
              font-[RocaTwo]
              focus:outline-none
            "
          >
            {title}

            {/* Dotted Arrow Image */}
            <Image
              src={images.dottedArrow}
              alt="arrow"
              width={42}
              height={28}
              className={`
                transition-transform duration-300
                ${open ? "rotate-180" : ""}
              `}
            />
          </Disclosure.Button>

          {/* Content */}
          <Disclosure.Panel
            className="
              px-8 pb-7
              text-[#245B5F]
              text-[15px]
              leading-[1.7]
            "
          >
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default AmplifierAccordian;
