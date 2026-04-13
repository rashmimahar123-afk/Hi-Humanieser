import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import { useEffect, useRef, useState } from "react";
import useAuthValue from "../../AuthModule/Hooks/useAuthValue";
import styles from "./Profile.module.css";

function Profile() {
  const [enter, setEnter] = useState(false);

  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    images.dummyUser,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { user } = useAuthValue();
  const teamMembers = [
    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },

    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
  ];

  useEffect(() => {
    setEnter(true);
  }, []);

  const chunkByPattern = (arr: any, pattern = [8, 6]) => {
    const chunks = [];
    let i = 0;
    let p = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, i + pattern[p]));
      i += pattern[p];
      p = (p + 1) % pattern.length;
    }

    return chunks;
  };

  const rows = chunkByPattern(teamMembers);
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  return (
    <div
      className={`relative min-h-screen bg-[#F5F0EB] overflow-hidden  ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      {/* Header */}
      <div className="px-8 py-6">
        <UserProfileHeader
          greetingColor="#567F55"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>

      {/* Page Title */}
      <div className="relative">
        <div className="px-24 mt-4">
          <h2 className="text-[45px] font-[RocaTwo-Bold] font-bold text-[#0F4F58]">
            Profile
          </h2>
        </div>

        {/* Profile Card */}
        <section className="relative mx-14 rounded-[24px] bg-[#F8E1B8] px-14 py-12 overflow-hidden">
          {/* Right dotted pattern */}
          <div className="absolute right-12 top-12 ">
            <Image
              src={images.dotsPattern}
              alt="pattern"
              width={270}
              height={270}
            />
          </div>

          {/* Top content */}
          <div className="flex gap-16">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="h-[96px] w-[96px] rounded-full overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={168}
                  height={168}
                  className="object-cover"
                />
              </div>
              <p
                className="mt-2 text-[16px] text-[#0F4F58] font-[Roboto]  cursor-pointer"
                onClick={handleImageClick}
              >
                add/edit picture
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            {/* Details */}
            <div className="flex-1">
              <h3 className="text-[45px] font-[RocaTwo] font-bold text-[#0F4F58]">
                Maria Palacios
              </h3>

              <p className="mt-1 text-[19px] font-400 text-[#0F4F58] font-[Roboto] ">
                Joined Jan 2026
              </p>
              <p className="text-[14px] text-[#0F4F58]">
                Active Member In Hi Humaniser!
              </p>

              <div className="mt-5 text-[22px] text-[#0F4F58] font-[Roboto] font-[400] leading-6">
                <p>Company: TXM Ltd</p>
                <p>Team: Systems Engineering - UK</p>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="mt-10  max-w-3xl space-y-4">
            <div className="flex items-center gap-8">
              <span className="w-40 text-[15px] text-[#567F55]">
                First Name
              </span>
              <input
                disabled
                placeholder="not able to modify"
                className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#567F55] outline-none"
              />
            </div>

            <div className="flex items-center gap-8">
              <span className="w-40 text-[15px] text-[#567F55]">Last Name</span>
              <input
                disabled
                placeholder="not able to modify"
                className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#567F55] outline-none"
              />
            </div>

            <div className="flex items-center gap-8">
              <span className="w-40 text-[15px] text-[#567F55]">
                email/username
              </span>
              <input
                disabled
                value={user?.sub || ""}
                className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#5E8C84] outline-none"
              />
            </div>
          </div>
        </section>
        <div className="absolute -bottom-[20px] left-20 z-10 ">
          <Image src={images.sixDots} alt="dots" width={116} height={116} />
        </div>
      </div>
      <div className=" px-14 py-12">
        {/* Header */}
        <h2 className="ml-10 text-[36px] font-[RocaTwo] font-bold text-[#0F4F58]">
          Team Structure
        </h2>
        <div className="absolute left-8 top-190 z-10">
          <Image src={images.teamDot} alt="curve" width={520} height={120} />
        </div>
        {/* Team Structure Section */}
        <section className="rounded-[24px] bg-[#F8E1B8] relative overflow-hidden p-4">
          {/* Decorative dashed curve */}

          {/* Champion Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="h-[72px] w-[72px] rounded-full overflow-hidden">
                <Image
                  src={images.maria}
                  alt="Champion"
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-[18px] font-[Roboto] font-semibold text-[#0F4F58]">
                  Hi Humaniser! Champion
                </p>
                <p className="text-[15px] text-[#0F4F58]">Silvia Smith</p>
              </div>
            </div>

            <div className="relative inline-block">
              {/* Polygon Image */}
              <Image
                src={images.profilePolygon}
                alt="profile polygon"
                className="w-[280px] h-auto"
              />

              {/* Text on top of image */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <p className="text-[18px] font-[Roboto] text-[#0B3D3A]">
                  Team:{" "}
                  <span className="font-semibold">
                    [Systems Engineering - UK]
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Members title */}

          {/* Members Grid */}
          <div className="relative z-20 mt-8 space-y-12 mb-[130px]">
            <h3 className="text-[24px] font-[RocaTwo] font-bold text-[#0F4F58]">
              Hi Humaniser! Members
            </h3>
            {rows.map((row, rowIndex) => {
              const isSix = row.length === 6;
              const isLast = rowIndex === rows.length - 1;

              return (
                <div key={rowIndex} className="relative">
                  <div
                    className={`grid gap-y-12
    ${
      isSix
        ? "grid-cols-6 gap-x-6 max-w-[800px] mx-auto"
        : "grid-cols-8 gap-x-10"
    }
  `}
                  >
                    {row.map((member: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="h-[72px] w-[72px] rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={72}
                            height={72}
                            className="object-cover"
                          />
                        </div>

                        <p className="mt-3 text-[14px] font-[Roboto] text-[#0F4F58] leading-5 max-w-[120px]">
                          {member.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  {isSix && isLast && (
                    <div className="absolute -bottom-24 left-[28%] -translate-x-[330px]">
                      <Image
                        src={images.teamDots}
                        alt="dots"
                        width={160}
                        height={160}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Bottom dots */}
    </div>
  );
}

export default Profile;
