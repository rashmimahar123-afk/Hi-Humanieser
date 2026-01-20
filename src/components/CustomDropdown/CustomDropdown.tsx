import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import images from "@/src/assets/images";

const genderOptions = [
  "Male",
  "Female",
  "Non-binary",
  "Prefer not to say",
  "Self-describe",
];

function CustomDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-8" ref={dropdownRef}>
      {/* Label */}
      <label
        className="w-[200px] text-[#567F55] text-[22px]"
        style={{ fontFamily: "Roboto" }}
      >
        Gender (optional)
      </label>

      {/* Dropdown */}
      <div className="relative w-[900px]">
        {/* Selected */}
        <div
          onClick={() => setOpen(!open)}
          className="
            h-[55px]
            bg-white
            rounded-full
            px-6
            flex
            items-center
            justify-between
            cursor-pointer
            border
            border-transparent
            hover:border-[#9BB89A]
          "
        >
          <span className="text-[#567F55]">{selected || "Select Gender"}</span>

          <Image
            src={images.dropdownImg}
            alt="arrow"
            width={18}
            height={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>

        {/* Options */}
        {open && (
          <div
            className="
              absolute
              z-20
              mt-2
              w-full
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
            "
          >
            {genderOptions.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="
                  px-6
                  py-3
                  text-[#567F55]
                  cursor-pointer
                  hover:bg-[#F5F0EB]
                "
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default CustomDropdown;
