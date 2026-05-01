/* eslint-disable @typescript-eslint/no-explicit-any */

type FocusLabel =
  | "Build Trust"
  | "Improve Clarity"
  | "Strengthen Collaboration"
  | "Foster Belonging"
  | "Sustain Wellbeing"
  | "Shape the System";

type HoverOptionProps = {
  label: FocusLabel;
  isSelected: boolean;
  onClick: (label: FocusLabel) => void;
};

function HoverOption({ label, isSelected, onClick }: HoverOptionProps) {
  const focusBlurb = {
    "Build Trust":
      "Create honesty and safety so people can rely on each other and speak up.",

    "Improve Clarity":
      "Set clear goals and roles to reduce confusion and boost results.",

    "Strengthen Collaboration":
      "Work better together — share ideas, solve problems, and support each other’s success.",

    "Foster Belonging":
      "Help everyone feel seen, valued, and part of something bigger.",

    "Sustain Wellbeing":
      "Protect energy and balance — high performance needs recovery too.",

    "Shape the System":
      "Improve the structures, processes, and ways of working that shape daily behaviour.",
  };

  return (
    <div
      onClick={() => onClick(label)}
      className="relative group flex items-center gap-3 cursor-pointer"
    >
      {/* Radio */}
      <span
        className={`w-3 h-3 rounded-full border border-[#0F4F58] flex items-center justify-center ${
          isSelected ? "bg-[#0F4F58]" : ""
        }`}
      />

      {/* Label */}
      <span className={isSelected ? "font-bold text-[#0F4F58]" : ""}>
        {label}
      </span>

      {/* Tooltip */}
      <div
        className="
          absolute
          left-[140px]
          top-1/2
          -translate-y-1/2
          w-[280px]
          bg-[#0F4F58]
          text-white
          text-[15px]
          leading-snug
          px-4
          py-3
          rounded-[12px]
          opacity-0
          pointer-events-none
          group-hover:opacity-100
          transition-opacity
          z-50
          shadow-lg
        "
      >
        {focusBlurb[label]}

        <span
          className="
            absolute
            left-[-6px]
            top-1/2
            -translate-y-1/2
            w-3
            h-3
            bg-[#0F4F58]
            rotate-45
          "
        />
      </div>
    </div>
  );
}
export default HoverOption;
