import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";

function Profile() {
  const members = [
    { name: "Matthew Richardson", img: "/m1.jpg" },
    { name: "Daniella James-Daniels", img: "/m2.jpg" },
    { name: "Bibil Baby Paramathatil", img: "/m3.jpg" },
    { name: "Lorenzo DiCaprio", img: "/m4.jpg" },
    { name: "George Brown", img: "/m5.jpg" },
  ];
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
  ];

  return (
    <div className="relative min-h-screen bg-[#F5F0EB] overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6">
        <UserProfileHeader />
      </div>
      <div className="absolute top-20 left-20 ">
        <Image src={images.sixDots} alt="dots" width={116} height={116} />
      </div>
      {/* Page Title */}
      <div className="px-14 mt-12">
        <h2 className="text-[45px] font-[RocaTwo-Bold] font-bold text-[#0F4F58]">
          Profile
        </h2>
      </div>

      {/* Profile Card */}
      <section className="relative mx-14 mt-6 rounded-[24px] bg-[#F8E1B8] px-14 py-12 overflow-hidden">
        {/* Right dotted pattern */}
        <div className="absolute right-12 top-12 opacity-40">
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
                src={images.maria}
                alt="Profile"
                width={168}
                height={168}
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[16px] text-[#0F4F58] font-[Roboto]  cursor-pointer">
              add/edit picture
            </p>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-[45px] font-[RocaTwo] font-bold text-[#0F4F58]">
              Maria Palacios
            </h3>

            <p className="mt-1 text-[19px] font-400 text-[#0F4F58] font-[Roboto] font-[#0F4F58]">
              Joined Jan 2026
            </p>
            <p className="text-[14px] text-[#0B3D3A]">
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
            <span className="w-40 text-[15px] text-[#5E8C84]">First Name</span>
            <input
              disabled
              placeholder="not able to modify"
              className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#5E8C84] outline-none"
            />
          </div>

          <div className="flex items-center gap-8">
            <span className="w-40 text-[15px] text-[#5E8C84]">Last Name</span>
            <input
              disabled
              placeholder="not able to modify"
              className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#5E8C84] outline-none"
            />
          </div>

          <div className="flex items-center gap-8">
            <span className="w-40 text-[15px] text-[#5E8C84]">
              email/username
            </span>
            <input
              disabled
              placeholder="not able to modify"
              className="w-full rounded-[14px] bg-white px-5 py-3 text-[14px] text-[#5E8C84] outline-none"
            />
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="mx-14 mt-10 rounded-[24px] bg-[#F8E1B8] px-14 py-12 relative overflow-hidden">
        {/* Decorative dashed curve */}
        <div className="absolute left-24 top-6 opacity-40">
          <Image src={images.teamDot} alt="curve" width={220} height={120} />
        </div>

        {/* Header */}
        <h2 className="text-[36px] font-[RocaTwo] font-bold text-[#0F4F58]">
          Team Structure
        </h2>

        {/* Champion Card */}
        <div className="mt-8 flex items-center justify-between">
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
              <p className="text-[15px] text-[#5E8C84]">Silvia Smith</p>
            </div>
          </div>

          <div className="rounded-[14px] bg-[#BFE3E1] px-6 py-3 text-[16px] font-[Roboto] text-[#0B3D3A]">
            Team:{" "}
            <span className="font-semibold">Systems Engineering - UK</span>
          </div>
        </div>

        {/* Members title */}
        <h3 className="mt-10 text-[24px] font-[RocaTwo] font-bold text-[#0F4F58]">
          Hi Humaniser! Members
        </h3>

        {/* Members Grid */}
        <div className="mt-8 grid grid-cols-5 gap-x-14 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-[72px] w-[72px] rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-[14px] font-[Roboto] text-[#0F4F58] leading-5">
                {member.name}
              </p>
            </div>
          ))}
        </div>

        {/* Left dotted pattern */}
        <div className="absolute bottom-10 left-10 opacity-40">
          <Image src={images.dotsPattern} alt="dots" width={160} height={160} />
        </div>
      </section>

      {/* Bottom dots */}
    </div>
  );
}

export default Profile;
