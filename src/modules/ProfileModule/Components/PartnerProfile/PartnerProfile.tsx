import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import {
  MY_PROFILE_RESPONSE,
  ORGANISATION_DATA,
} from "../../Types/ResponseTypes";
import { formatJoinedDate } from "@/src/lib/Helpers";

type PROFILE_DATA_PROPS = {
  profileData: MY_PROFILE_RESPONSE;
  organizationData: ORGANISATION_DATA;
};
function PartnerProfile(props: PROFILE_DATA_PROPS) {
  const { profileData, organizationData } = props;

  return (
    <section className="relative mx-14 rounded-[24px] bg-[#F8E1B8] px-14 py-12 overflow-hidden">
      {/* Right Pattern */}
      <div className="absolute right-12 top-12">
        <Image
          src={images.dotsPattern}
          alt="pattern"
          width={270}
          height={270}
        />
      </div>

      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex gap-10 items-center">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
              <Image
                src={images.dummyUser}
                alt="Profile"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            <p className="mt-2 text-[14px] text-[#0F4F58] cursor-pointer">
              add/edit picture
            </p>
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-[48px] font-bold text-[#0F4F58]">
              {profileData?.first_name} {profileData?.last_name}
            </h2>

            <p className="text-[18px] text-[#0F4F58] mt-2">
              {" "}
              Joined {formatJoinedDate(organizationData?.date_created)}
            </p>

            <p className="text-[16px] text-[#0F4F58]">
              Active Partner in Hi Humaniser!
            </p>

            <p className="text-[22px] text-[#0F4F58] mt-4">
              Company: {profileData?.company_name || ""}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE BUTTON */}
      </div>
      <div className="mt-6 flex justify-end mr-[300px]">
        <button className="bg-[#86c9c9] px-6 py-3 rounded-full text-[#0F4F58] font-medium">
          Switch to Champion
        </button>
      </div>
      {/* Inputs */}
      <div className="mt-12 max-w-3xl space-y-6">
        <div className="flex items-center gap-8">
          <span className="w-40 text-[18px] text-[#567F55]">Full name</span>
          <input
            disabled
            value={`${profileData?.first_name || ""} ${profileData?.last_name || ""}`}
            className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#567F55] outline-none"
          />
        </div>

        <div className="flex items-center gap-8">
          <span className="w-40 text-[18px] text-[#567F55]">
            email/username
          </span>
          <input
            disabled
            value={profileData?.email || ""}
            className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#567F55] outline-none"
          />
        </div>
      </div>
      <div className="absolute -bottom-[20px] z-10 ">
        <Image src={images.sixDots} alt="dots" width={116} height={116} />
      </div>
    </section>
  );
}
export default PartnerProfile;
