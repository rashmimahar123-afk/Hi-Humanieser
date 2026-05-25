



// "use client";

// import { Disclosure } from "@headlessui/react";
// import Image from "next/image";
// import images from "@/src/assets/images";

// function FAQAccordion({
//   title,
//   paragraph,
// }: {
//   title: string;
//   paragraph: string;
// }) {
//   return (
//     <Disclosure>
//       {({ open }) => (
//         <div className="bg-[#FBE3B6] rounded-[14px]">
//           <Disclosure.Button
//             className="
//               w-full flex items-center justify-between
//               px-4 sm:px-5 py-3 sm:py-4
//               text-left
//               text-[#0F4F58]
//               text-[clamp(14px,4vw,18px)]
//               font-bold
//               rounded-[14px]
//               gap-2
//             "
//           >
//             <span className="flex-1">{title}</span>

//             <Image
//               src={images.dottedArrow}
//               alt="arrow"
//               width={22}
//               height={16}
//               className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
//             />
//           </Disclosure.Button>

//           <Disclosure.Panel className="px-4 sm:px-5 pb-4 text-[clamp(12px,3.5vw,14px)] text-[#245B5F] whitespace-pre-line">
//             {paragraph}
//           </Disclosure.Panel>
//         </div>
//       )}
//     </Disclosure>
//   );
// }

// export default FAQAccordion;




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
              px-4 sm:px-5 py-3 sm:py-4
              text-left
              text-[#0F4F58]
              text-[15px] sm:text-[16px] md:text-[18px]
              font-bold
              rounded-[14px]
              gap-2 sm:gap-3
              hover:bg-[#f5d89a]
              transition-colors
            "
          >
            <span className="flex-1 pr-2">{title}</span>

            <Image
              src={images.dottedArrow}
              alt="arrow"
              width={20}
              height={14}
              className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="px-4 sm:px-5 pb-4 text-[13px] sm:text-[14px] text-[#245B5F] whitespace-pre-line leading-relaxed">
            {paragraph}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default FAQAccordion;