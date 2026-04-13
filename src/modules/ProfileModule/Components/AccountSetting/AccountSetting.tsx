import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import ProfileCommonDropdown from "@/src/components/ProfileCommonDropdown/ProfileCommonDropdown";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function AccountSetting() {
  const [selected, setSelected] = useState("");
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <div
      className={`min-h-screen bg-[#F5F0EB]  page ${
        enter ? "enterActive" : "enter"
      }`}
    >
      {/* Header */}
      <div className="px-8 py-6">
        <div>
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>
        {/* Title */}
        <h2 className="mt-14 ml-10 text-[36px] font-[RocaTwo] font-bold text-[#0F4F58]">
          My Account Settings
        </h2>

        {/* Card */}
        <section className="relative mt-6 rounded-[28px] bg-[#F8E1B8] px-16 py-14">
          {/* Dots */}
          <div className="absolute right-12 top-12 opacity-40">
            <Image
              src={images.dotsPattern}
              alt="dots"
              width={220}
              height={220}
            />
          </div>

          {/* Top Info */}
          <div className="flex gap-14">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <Image
                  src={images.maria}
                  alt="Maria"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
              <button className="mt-3 text-[16px] text-[#0F4F58] font-[Roboto] underline">
                add/edit picture
              </button>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-[46px] font-[RocaTwo] font-bold text-[#0F4F58]">
                Maria Palacios
              </h3>

              <p className="mt-1 text-[19px] text-[#0F4F58] font-[Roboto]">
                Joined Jan 2026
              </p>
              <p className="text-[19px] text-[#0F4F58]">
                Active Member In Hi Humaniser!
              </p>

              <div className="mt-6 text-[22px] text-[#0F4F58] font-[Roboto] leading-6">
                <p>Company: TXM Ltd</p>
                <p>Team: Systems Engineering - UK</p>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="mt-12 max-w-4xl space-y-4">
            {/* First Name */}
            <div className="flex items-center gap-6">
              <span className="w-[200px] text-[22px] text-[#567F55] font-[Roboto]">
                First Name
              </span>

              <input
                type="text"
                placeholder="Enter First Name"
                className="w-[500px] h-[60px] rounded-[16px] bg-white px-5 text-[16px] text-[#567F55] outline-none"
              />

              <button className="w-[60px] text-[18px] text-[#567F55] font-[Roboto]">
                Edit
              </button>
            </div>

            {/* Last Name */}
            <div className="flex items-center gap-6">
              <span className="w-[200px] text-[22px] text-[#567F55] font-[Roboto]">
                Last Name
              </span>

              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-[500px] h-[60px] rounded-[16px] bg-white px-5 text-[16px] text-[#567F55] outline-none"
              />

              <button className="w-[60px] text-[18px] text-[#567F55] font-[Roboto]">
                Edit
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <span className="w-[200px] text-[22px] text-[#567F55] font-[Roboto]">
                Email/Username
              </span>

              <input
                disabled
                placeholder="not able to modify"
                className="w-[500px] h-[60px] rounded-[16px] bg-[#ffffff] px-5 text-[16px] text-[#567F55] outline-none"
              />

              {/* Empty space to match Edit button width */}
              <div className="w-[60px]" />
            </div>

            {/* Change Password */}
            <p className="text-right text-[22px] text-[#567F55] font-[Roboto]">
              Change your password? click{" "}
              <span className="underline cursor-pointer">here</span>
            </p>
          </div>

          {/* Divider Text */}
          <div className="mt-14 ">
            <p className="text-[18px] text-[#567F55] font-[Roboto] leading-6">
              <strong>Why we ask for this</strong>
              <br />
              These details are optional. They help us understand patterns and
              experiences across different groups, so we can design more
              inclusive and human workplaces. This information is never used to
              assess individuals.
            </p>
          </div>

          {/* Optional Fields */}
          <div className="mt-8 max-w-4xl space-y-4">
            <div className="relative">
              <div className="flex gap-6">
                <label
                  style={{
                    fontFamily: "RocaTwo",
                    color: "#567F55",
                    width: "220px",
                    fontSize: "22px",
                  }}
                >
                  Gender (Optional)
                </label>
                {/* <div>
              <ProfileCommonDropdown
                label="Gender (optional)"
                options={[
                  "Male",
                  "Female",
                  "Non-binary",
                  "Prefer not to say",
                  "Self-describe",
                ]}
                placeholder="Male / Female / Non-binary / Prefer not to say / Self-describe"
                textColor="#567F55"
                placeholderColor="#9BB89A"
                width="220px"
                textSize="22px"
                gap="24px"
                fieldWidth="800px"
              />
            </div> */}
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-[800px] bg-[#ffffff]  text-[18px] px-6 h-[56px] rounded-[16px] outline-none font-[Roboto] appearance-none"
                  style={{
                    color: selected ? "#0F4F58" : "#000000",
                  }}
                >
                  <option value="" disabled hidden>
                    Select request type
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-say">Prefer not to say</option>
                  <option value="self-describe">Self-describe</option>
                </select>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#0F4F58]">
                  ▼
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="w-[220px] text-[22px] text-[#567F55] font-[Roboto]">
                Birth Year (optional)
              </span>

              <input
                type="text"
                className="w-[800px] h-[60px] rounded-[16px] bg-[#ffffff] px-5 text-[16px] text-[#567F55] outline-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 flex justify-end items-center gap-3 ">
            <Image
              src={images.footerDb}
              alt="footer-db"
              width={24}
              height={24}
            />
            <span
              style={{
                fontFamily: "Aptos, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#567F55",
              }}
            >
              Your data stays yours. Learn more in our{" "}
              <a href="#" className="text-[#567F55] underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AccountSetting;
