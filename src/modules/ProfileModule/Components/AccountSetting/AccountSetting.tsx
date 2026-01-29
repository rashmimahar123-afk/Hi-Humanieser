import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";

function AccountSetting() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] ">
      {/* Header */}
      <div className="px-8 py-6">
        <div>
          <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />
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
          <div className="mt-12 max-w-3xl space-y-6">
            {[
              { label: "First Name", editable: true },
              { label: "Last Name", editable: true },
              { label: "email/username", editable: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="w-40 text-[22px] text-[#567F55] font-[Roboto]">
                  {item.label}
                </span>

                <input
                  disabled={!item.editable}
                  placeholder={item.editable ? "" : "not able to modify"}
                  className="flex-1 rounded-[16px] bg-white px-5 py-3 text-[14px] text-[#567F55] outline-none"
                />

                {item.editable && (
                  <button className="text-[18px] text-[#567F55] font-[Roboto]">
                    Edit
                  </button>
                )}
              </div>
            ))}

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
          <div className="mt-8 max-w-3xl space-y-6">
            <div className="flex items-center gap-10">
              <span className="text-[22px] text-[#567F55]">
                Gender (optional)
              </span>

              <select className="flex-1 rounded-[16px] bg-white px-3 py-3 text-[14px] text-[#567F55] outline-none">
                <option>
                  Male / Female / Non-binary / Prefer not to say / Self-describe
                </option>
              </select>
            </div>

            <div className="flex items-center gap-6">
              <span className=" text-[22px] text-[#567F55]">
                Birth Year (optional)
              </span>

              <input className="flex-1 rounded-[16px] bg-white px-3 py-3 text-[14px] outline-none" />
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
