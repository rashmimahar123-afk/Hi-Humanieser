"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import images from "@/src/assets/images";

interface CommonDropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  textColor?: string; // selected text color
  placeholderColor?: string; // placeholder color
}

function CustomDropdown({
  label,
  options,
  value = "",
  onChange,
  placeholder = "Select",
  textColor,
  placeholderColor,
}: CommonDropdownProps) {
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
    <div
      ref={dropdownRef}
      className="grid grid-cols-[180px_1fr] items-center gap-6"
    >
      {/* Label */}
      <label
        className="text-[20px] whitespace-nowrap"
        style={{ fontFamily: "RocaTwo", color: textColor }}
      >
        {label}
      </label>

      {/* Dropdown */}
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="
          h-[52px]
          bg-[#ffffff]
          rounded-full
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

export default CustomDropdown;
