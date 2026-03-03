"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import images from "@/src/assets/images";

interface ProfileCommonDropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  textColor?: string; // selected text color
  placeholderColor?: string; // placeholder color
  width?: string;
  textSize?: string;
  gap?: string;
  fieldWidth: string;
}

function ProfileCommonDropdown({
  label,
  options,
  value = "",
  onChange,
  placeholder = "Select",
  textColor,
  placeholderColor,
  width,
  textSize,
  gap,
  fieldWidth,
}: ProfileCommonDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (item: string) => {
    setSelected(item);
    onChange?.(item);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="flex items-center  " style={{ gap: gap }}>
      {/* Label */}
      <label
        style={{
          fontFamily: "RocaTwo",
          color: textColor,
          width: width,
          fontSize: textSize,
        }}
      >
        {label}
      </label>

      {/* Dropdown */}
      <div className="relative" style={{ width: fieldWidth }}>
        <div
          onClick={() => setOpen(!open)}
          className="
          h-[60px]
          bg-[#ffffff]
          rounded-[16px]
          px-6
          flex
          items-center
          justify-between
          cursor-pointer
        "
        >
          <span
            className="truncate"
            style={{
              color: selected ? "#0F4F58" : "#0000",
            }}
          >
            {selected || placeholder}
          </span>

          <Image
            src={images.dropdownImg}
            alt="arrow"
            width={18}
            height={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>

        {open && (
          <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
            {options.map((item) => (
              <div
                key={item}
                onClick={() => handleSelect(item)}
                className="px-6 py-3 text-[#0F4F58] cursor-pointer hover:bg-[#F5F0EB]"
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

export default ProfileCommonDropdown;
