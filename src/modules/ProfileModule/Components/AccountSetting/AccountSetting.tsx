import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useRouter } from "next/navigation";
import useOrganisationDetailsQuery from "../../Hooks/useOrganisationDetailsQuery";
import { formatJoinedDate } from "@/src/lib/Helpers";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

function AccountSetting() {
  const [selected, setSelected] = useState("");
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isFirstNameEdit, setIsFirstNameEdit] = useState(false);
  const [isLastNameEdit, setIsLastNameEdit] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();
  const orgId = user?.org_id;
  const { data: orgData, isLoading: orgLoading } =
    useOrganisationDetailsQuery(orgId);
  const organizationData = orgData?.data.organization;

  useEffect(() => {
    if (organizationData?.created_by_user) {
      setFirstName(organizationData.created_by_user.first_name || "");
      setLastName(organizationData.created_by_user.last_name || "");
      setEmail(organizationData.created_by_user.email || "");
    }
  }, [organizationData]);

  return (
    <>
      <div
        className={`min-h-screen bg-[#F5F0EB] page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />

          {/* Title */}
          <h2 className="mt-6 sm:mt-10 md:mt-14 ml-0 sm:ml-4 md:ml-10 text-[26px] sm:text-[30px] md:text-[36px] font-[RocaTwo] font-bold text-[#0F4F58]">
            My Account Settings
          </h2>

          {/* Card */}
          <section className="relative mt-4 sm:mt-6 rounded-[20px] sm:rounded-[28px] bg-[#F8E1B8] px-4 sm:px-8 md:px-16 py-6 sm:py-10 md:py-14 overflow-hidden">
            {/* Dots — shrink + fade on mobile so they don't overlap name */}
            <div className="absolute right-3 sm:right-6 md:right-12 top-3 sm:top-6 md:top-12 opacity-30 sm:opacity-40 pointer-events-none">
              <Image
                src={images.dotsPattern}
                alt="dots"
                width={220}
                height={220}
                className="w-[80px] sm:w-[150px] md:w-[220px] h-auto"
              />
            </div>

            {/* ── Top Info ── */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14 items-start sm:items-center">
              {/* Avatar */}
              <div className="flex flex-col items-center shrink-0">
                <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] rounded-full overflow-hidden">
                  <Image
                    src={images.maria}
                    alt="Maria"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Info — pr keeps text from sliding under dots pattern */}
              <div className="flex-1 min-w-0 pr-[80px] sm:pr-[140px] md:pr-0">
                <h3 className="text-[24px] sm:text-[34px] md:text-[46px] font-[RocaTwo] font-bold text-[#0F4F58] truncate">
                  {organizationData?.created_by_user?.first_name}{" "}
                  {organizationData?.created_by_user?.last_name}
                </h3>
                <p className="mt-1 text-[14px] sm:text-[16px] md:text-[19px] text-[#0F4F58] font-[Roboto]">
                  Joined {formatJoinedDate(organizationData?.date_created)}
                </p>
                <p className="text-[13px] sm:text-[16px] md:text-[19px] text-[#0F4F58]">
                  Active Member In Hi Humaniser!
                </p>
                <div className="mt-3 sm:mt-4 md:mt-6 text-[15px] sm:text-[18px] md:text-[22px] text-[#0F4F58] font-[Roboto] leading-6 space-y-1">
                  <p>Company: {organizationData?.company_name}</p>
                  <p>Team: Systems Engineering - UK</p>
                </div>
              </div>
            </div>

            {/* ── Editable Fields ── */}
            <div className="mt-8 sm:mt-10 md:mt-12 max-w-4xl space-y-3 sm:space-y-4">
              {/* First Name */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-full sm:w-[160px] md:w-[200px] text-[14px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[Roboto] shrink-0">
                  First Name
                </span>
                <div className="flex items-center gap-2 sm:contents">
                  <input
                    type="text"
                    value={firstName}
                    disabled={!isFirstNameEdit}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="flex-1 h-[48px] sm:h-[54px] md:h-[60px] rounded-[12px] sm:rounded-[16px] bg-white px-4 sm:px-5 text-[14px] sm:text-[15px] md:text-[16px] text-[#567F55] outline-none"
                  />
                  <button
                    onClick={() => setIsFirstNameEdit(true)}
                    className="shrink-0 w-[50px] sm:w-[60px] text-[15px] sm:text-[17px] md:text-[18px] text-[#567F55] font-[Roboto]"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-full sm:w-[160px] md:w-[200px] text-[14px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[Roboto] shrink-0">
                  Last Name
                </span>
                <div className="flex items-center gap-2 sm:contents">
                  <input
                    type="text"
                    value={lastName}
                    disabled={!isLastNameEdit}
                    onChange={(e) => setLastName(e.target.value)}
                    className="flex-1 h-[48px] sm:h-[54px] md:h-[60px] rounded-[12px] sm:rounded-[16px] bg-white px-4 sm:px-5 text-[14px] sm:text-[15px] md:text-[16px] text-[#567F55] outline-none"
                  />
                  <button
                    onClick={() => setIsLastNameEdit(true)}
                    className="shrink-0 w-[50px] sm:w-[60px] text-[15px] sm:text-[17px] md:text-[18px] text-[#567F55] font-[Roboto]"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-full sm:w-[160px] md:w-[200px] text-[14px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[Roboto] shrink-0">
                  Email/Username
                </span>
                <div className="flex items-center gap-2 sm:contents">
                  <input
                    value={email}
                    disabled
                    className="flex-1 h-[48px] sm:h-[54px] md:h-[60px] rounded-[12px] sm:rounded-[16px] bg-white px-4 sm:px-5 text-[14px] sm:text-[15px] md:text-[16px] text-[#567F55] outline-none"
                  />
                  {/* Spacer matches Edit button width on sm+ so email input aligns with others */}
                  <div className="hidden sm:block w-[60px] shrink-0" />
                </div>
              </div>

              {/* Change Password */}
              <p className="text-right text-[13px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[Roboto] pt-1">
                Change your password? click{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => router.push("/change-password")}
                >
                  here
                </span>
              </p>
            </div>

            {/* ── Why we ask ── */}
            <div className="mt-8 sm:mt-10 md:mt-14">
              <p className="text-[13px] sm:text-[16px] md:text-[18px] text-[#567F55] font-[Roboto] leading-6">
                <strong>Why we ask for this</strong>
                <br />
                These details are optional. They help us understand patterns and
                experiences across different groups, so we can design more
                inclusive and human workplaces. This information is never used
                to assess individuals.
              </p>
            </div>

            {/* ── Optional Fields ── */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {/* Gender */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="w-full sm:w-[160px] md:w-[220px] text-[14px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[RocaTwo] shrink-0">
                  Gender (Optional)
                </label>
                <div className="relative w-full sm:flex-1">
                  <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="w-full h-[48px] sm:h-[52px] md:h-[56px] bg-white text-[14px] sm:text-[16px] md:text-[18px] px-4 sm:px-6 rounded-[12px] sm:rounded-[16px] outline-none font-[Roboto] appearance-none"
                    style={{ color: selected ? "#0F4F58" : "#567f55" }}
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0F4F58] text-[12px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Birth Year */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="w-full sm:w-[160px] md:w-[220px] text-[14px] sm:text-[18px] md:text-[22px] text-[#567F55] font-[Roboto] shrink-0">
                  Birth Year (optional)
                </span>
                <input
                  type="text"
                  className="w-full sm:flex-1 h-[48px] sm:h-[54px] md:h-[60px] rounded-[12px] sm:rounded-[16px] bg-white px-4 sm:px-5 text-[14px] sm:text-[15px] md:text-[16px] text-[#567F55] outline-none"
                />
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="mt-10 sm:mt-12 md:mt-16 flex items-center justify-end gap-2 sm:gap-3">
              <Image
                src={images.footerDb}
                alt="footer-db"
                width={24}
                height={24}
                className="w-[18px] sm:w-[22px] md:w-[24px] h-auto shrink-0"
              />
              <span className="text-[12px] sm:text-[16px] md:text-[20px] text-[#567F55] font-[400] leading-[100%]">
                Your data stays yours. Learn more in our{" "}
                <a href="#" className="text-[#567F55] underline">
                  Privacy Policy
                </a>
              </span>
            </div>
          </section>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default AccountSetting;
