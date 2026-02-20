import Image from "next/image";
import images from "@/src/assets/images";
import PrivacyPolicyDivider from "./PrivacyPolicyDivider/PrivacyPolicyDivider";

function PrivacyPolicy() {
  return (
    <div>
      <main className="relative bg-[#F5F0EB] min-h-screen ">
        {/* Background Shapes */}
        <Image
          src={images.privacyPolygon}
          alt="left shape"
          width={420}
          height={520}
          className="absolute left-0 top-0 z-0"
        />
        <div className=" px-8 py-6">
          {/* ===== TOP HEADER (DIFFERENT ROWS) ===== */}
          <div className="relative z-10">
            {/* Row 1 - Left */}
            <h1 className="text-[37px] font-[Roboto] font-[400] text-[#0F4F58]">
              Hi Humaniser!™
            </h1>

            {/* Row 2 - Right End */}
            <div className="flex justify-end">
              <div className="text-right">
                <h1 className="text-[59px] font-bold font-[RocaTwo-Bold] text-[#0F4F58]">
                  Privacy Policy
                </h1>
                <p className="text-[#0F4F58] font-bold font-[RocaTwo-Bold] text-[29px] mt-2">
                  Last Updated: January, 2026
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          {/* ===== CONTENT + CENTER DIVIDER WRAPPER ===== */}
          <div className="relative z-10 w-full px-4 py-16">
            {/* LEFT CONTENT */}
            <section>
              <div>
                <p className="text-[37px] leading-[100%] text-[#0F4F58] font-[Roboto] font-[400]">
                  Welcome to Hi Humaniser!™, a platform created by Humanising
                  Our Workplaces Ltd (“we”, “us”, “our”). We’re committed to
                  protecting your privacy and treating your data with care,
                  respect, and transparency.
                </p>
              </div>
              <div className="flex justify-center mt-[70px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title ">What This Policy Covers</h2>
                <p className="section-text">
                  This policy explains how we collect, use, and protect the
                  personal information of people using our website, platform, or
                  related services.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">The Information We Collect</h2>

                <p className="section-text mt-[20px]">
                  We only collect what’s needed to create your account and
                  personalise your experience. This may include:
                </p>

                <ul className="list-disc ml-[40px] space-y-2 section-text mt-[20px]">
                  <li>Name and email address (to set up your account)</li>
                  <li>Role or team (to connect you with your organisation)</li>
                  <li>
                    Gender and age range (optional, used only for anonymised
                    insights)
                  </li>
                  <li>
                    Activity data – such as reflections, polls, or participation
                    in team rituals (used only in aggregated form)
                  </li>
                </ul>

                <p className="mt-[20px] section-text">
                  We never collect sensitive personal data unless it’s clearly
                  optional and you choose to share it.
                </p>
              </div>

              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">Who can see your data</h2>

                {/* Bullet points */}
                <ul className="list-disc mt-[20px] ml-[40px] space-y-3 section-text">
                  <li>
                    You can see your own account information and activities.
                  </li>
                  <li>
                    Your organisation may view aggregated results (never
                    individual reflections or personal responses).
                  </li>
                  <li>
                    We, the platform team, access data only as needed to support
                    or maintain the service.
                  </li>
                </ul>

                {/* Footer note */}
                <p className="section-text mt-[20px]">
                  We never sell your data or share it with third parties for
                  marketing purposes.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px] ">
                <h2 className="section-title">How We Use Your Information</h2>

                {/* Intro text */}
                <p className="section-text">We use your information to:</p>

                {/* Bullet points */}
                <ul className="list-disc ml-[40px] mt-[20px] space-y-3 section-text">
                  <li>Create and manage your account</li>
                  <li>Provide and improve the Hi Humaniser™ experience</li>
                  <li>
                    Generate anonymous insights that help your organisation
                    understand and strengthen its workplace culture
                  </li>
                  <li>Keep the platform secure and running smoothly</li>
                </ul>

                {/* Footer note */}
                <p className="section-text mt-[20px]">
                  We never sell your data or share it with third parties for
                  marketing purposes.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">
                  How long we keep your information
                </h2>

                {/* Intro text */}
                <p className="section-text">
                  We keep your data only as long as your organisation uses the
                  platform or as required by law. When your account is deleted,
                  your personal data is removed or securely anonymised.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">Your rights </h2>
                <p className="section-text">You have the right to:</p>

                {/* Bullet points */}
                <ul className="list-disc mt-[20px] ml-[40px] space-y-3 section-text">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct or update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for optional information at any time</li>
                </ul>

                {/* Footer note */}
                <p className="section-text">
                  To exercise your rights, contact us at
                  connect@humansingourworkplaces.com
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>

              <div className="mt-[70px]">
                <h2 className="section-title">How we protect your data</h2>

                {/* Intro text */}
                <p className="section-text">
                  We use secure servers, encrypted connections (SSL), and strong
                  access controls to keep your data safe.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">Cookies & analytics</h2>

                {/* Intro text */}
                <p className="section-text">
                  We may use cookies and analytics tools to understand how
                  people use the platform and improve usability. You can control
                  cookies through your browser settings.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">Updates to this policy</h2>

                {/* Intro text */}
                <p className="section-text">
                  We may occasionally update this policy to reflect improvements
                  or legal changes. We’ll post the latest version on our website
                  with a new date.
                </p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <div className="mt-[70px]">
                <h2 className="section-title">Contact Us</h2>

                <p className="section-text">
                  If you have any questions or concerns, reach us at:
                </p>
              </div>
              <div className="space-y-1 section-text mt-[70px]">
                <p>
                  📧{" "}
                  <span className="font-medium">
                    connect@humansingourworkplaces.com
                  </span>
                </p>
                <p>🏢 Humanising Our Workplaces Ltd, London, United Kingdom</p>
              </div>
              <div className="flex justify-center mt-[40px]">
                <PrivacyPolicyDivider />
              </div>
              <h2 className="section-title">Your Data Stays Yours.</h2>

              <p className="mt-[20px] section-text">
                We simply use it to make workplaces — and the systems behind
                them — more human.
              </p>
            </section>

            {/* CENTER DOTTED DIVIDER (GLOBAL) */}
            <div className="flex justify-center mt-[40px]">
              <PrivacyPolicyDivider />
            </div>
          </div>
        </div>

        <Image
          src={images.privacyFooterPoly}
          alt="left-shape"
          width={420}
          height={520}
          className="absolute right-0 bottom-0 z-0"
        />
      </main>
    </div>
  );
}
export default PrivacyPolicy;
