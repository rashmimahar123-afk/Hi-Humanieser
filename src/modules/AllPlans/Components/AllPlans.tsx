"use client";

import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import PlanCard from "./PlanCards/PlanCards";

export default function AllPlans() {
  const plans = [
    {
      title: "Exploration",
      price: "Free",
      subtitle: "10 days\nUp to 6 people",
      features: ["Full Portal Access", "No onboarding session"],
      footer: "For small teams getting started",
    },
    {
      title: "Starter",
      price: "Annual Subscription",
      subtitle: "Up to 50 people",
      features: [
        "Full Portal Access",
        "Personal Pathways",
        "Team Rituals",
        "Champion and Overseer Hubs",
        "1 onboarding session",
      ],
      footer: "For growing teams building consistency",
    },
    {
      title: "Growth",
      price: "Annual Subscription",
      subtitle: "Up to 150 people",
      features: [
        "Full Portal Access",
        "All Core Features",
        "2 onboarding sessions",
      ],
      footer: "For organisations aligning multiple teams",
    },
    {
      title: "Scale",
      price: "Annual Subscription",
      subtitle: "Up to 300 people",
      features: [
        "Full Portal Access",
        "All Core Features",
        "3 onboarding sessions",
      ],
      footer: "For organisations aligning multiple teams",
    },
    {
      title: "Organisation",
      price: "Annual Subscription",
      subtitle: "Up to 600 people",
      features: [
        "Full Portal Access",
        "All Core Features",
        "4 onboarding sessions",
        "Stronger Setup Support",
      ],
      footer: "For company-wide adoption",
    },
    {
      title: "Enterprise",
      price: "Annual Subscription",
      subtitle: "Up to 600+ people",
      features: [
        "For larger companies, HH! can be deployed across multiple organisational units.",
        "We’ll help you shape the right structure based on your size, teams, and rollout goals.",
      ],
      footer: "For company-wide adoption",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0EB] px-12 py-8 relative">
      {/* Top Right Shapes */}
      <Image
        src={images.loginRectangle}
        alt="bg"
        width={600}
        height={600}
        className="absolute top-0 right-0 w-[500px] pointer-events-none"
      />

      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <Image src={images.humaniserLogo} alt="logo" width={60} />
          <div className="leading-tight">
            <p className="font-bold text-[20px]">HUMANISING OUR</p>
            <p className="font-bold text-[20px]">WORKPLACES</p>
            <p className="text-[13px] mt-1 text-gray-600">
              People & Performance Thriving Together
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[100px] ml-20">
        <h1 className="text-[32px] mt-10 font-bold text-[#0F4F58] font-[RocaTwo]">
          Hi Humaniser!™ Plans & Access
        </h1>

        <p className="text-[23px] mt-4 text-[#0F4F58] font-bold font-[Roboto]">
          Choose the plan that best fits your organisation’s size and stage.
        </p>

        <p className="text-[23px] mt-6 text-gray-600 max-w-[1000px] font-[Roboto]">
          All paid plans include <b>full access</b> to the HH! portal, with{" "}
          <b>onboarding support</b> to help your people get started well.
        </p>
      </div>
      {/* CARDS */}
      <div className="flex gap-6 overflow-x-auto mt-[100px]">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
      <div className="absolute left-[130px] bottom-[195px] pointer-events-none z-0">
        <Image src={images.planWave} alt="wave" />
      </div>
      {/* SECTIONS */}
      <div className="mt-[100px] space-y-10 ">
        <div>
          <h2 className="text-[28px] font-bold text-[#0F4F58] font-[RocaTwo]">
            A quick note before you decide
          </h2>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8">
            All plans give you full access to Hi Humaniser!™.
            <br />
            The difference is simply how many people you bring into the
            experience.
          </p>
        </div>

        <div>
          <h2 className="text-[28px] font-bold text-[#0F4F58] font-[RocaTwo]">
            Support to help you embed HH!
          </h2>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8">
            If you’d like extra help embedding HH! into everyday work, we offer
            monthly support alongside any plan. This can include guidance for
            leaders, champions, and rollout.
          </p>
        </div>

        <div>
          <h2 className="text-[28px] font-bold text-[#0F4F58] font-[RocaTwo]">
            About pricing
          </h2>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8">
            Pricing reflects the size of your organisation and the level of
            support you need. Rather than a fixed price list, we work with you
            to set up the right plan with clarity from the start.
          </p>
        </div>

        <div>
          <h2 className="text-[28px] font-bold text-[#4BA6A6] font-[RocaTwo]">
            Why organisations choose HH!
          </h2>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8">
            Because it goes beyond adding another tool.
          </p>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8">
            It creates a shared way of working.
          </p>
          <p className="text-[20px] text-[#0F4F58] mt-2 font-[Roboto] ml-8 leading-[10%] font-bold">
            Clearer Decisions. Stronger Teams. Consistent Delivery.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-end mt-10 gap-6 items-center">
        <p className="text-[18px] text-[#0F4F58] max-w-[420px] text-right font-[Roboto]">
          Not sure which plan fits your organisation?
          <br />
          We’re happy to help you think it through.
        </p>
        <PolygonButton
          width="120px"
          height="100px"
          bgColor="#86C9C9"
          radius={14}
          clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
          childTop={11}
          decorationImg={{
            src: images.rightArrow,
            width: 48,
            height: 48,
          }}
          decorationPosition={{
            className: "-right-[20px] -top-[28px]",
          }}
        >
          <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
            Ask us a Question
          </span>
        </PolygonButton>
      </div>
    </div>
  );
}
