"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";

function FAQAccordion({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="bg-[#FBE3B6] rounded-[14px]">
          <Disclosure.Button
            className="
              w-full flex items-center justify-between
              px-5 py-4
              text-left
              text-[#0F4F58]
              text-[18px]
              font-bold
              rounded-[14px]
            "
          >
            {title}

            <Image
              src={images.dottedArrow}
              alt="arrow"
              width={22}
              height={16}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="px-5 pb-4 text-[14px] text-[#245B5F] whitespace-pre-line">
            {paragraph}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default FAQAccordion;
