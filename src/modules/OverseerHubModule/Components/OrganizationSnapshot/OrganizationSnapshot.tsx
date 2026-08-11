"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from "./OrganizationSnapshot.module.css";
import { createPatternRows } from "@/src/lib/Helpers";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import GaugeChart from "react-gauge-chart";
import ProgressPill from "@/src/modules/ChampionHubModule/Components/ProgressPill/ProgressPill";
import ViewAllReflectionCard from "@/src/modules/MyDashboardModule/Components/ViewAllReflectionCard/ViewAllReflectionCard";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetTeamsQuery from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import useTeamKpisQuery from "../../Hooks/useTeamKpisQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import React from "react";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

function OrganizationSnapshot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const router = useRouter();
  const { user } = useAuthValue();

  const { data: teamsData } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  const data = [
    { name: "Own Your Impact", value: 32 },
    { name: "Stay Curious", value: 21 },
    { name: "Be Real, Not Right", value: 18 },
    { name: "Recognise the Person", value: 11 },
    { name: "Make it Safe", value: 9 },
    { name: "Wellbeing is Infrastructure", value: 7 },
  ];

  const reflectionTexts = [
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",

    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
  ];

  const reflections = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    text: reflectionTexts[i % reflectionTexts.length],
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));

  const rows = createPatternRows(reflections, [3, 2]);

  const renderBar = (props: any) => {
    const { x, y, width, height, index } = props;

    let fill = "#86c9c9";

    if (activeIndex !== null && activeIndex !== index) {
      fill = "#B7D6D6";
    }

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        ry={8}
        fill={fill}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      />
    );
  };

  const CustomTooltip = ({ active, payload, coordinate }: any) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;

    return (
      <div
        style={{
          position: "absolute",
          left: coordinate.x + 10, // value axis (x)
          top: coordinate.y - 20, // name axis (y)
          background: "#1f2430",
          borderRadius: "8px",
          padding: "8px",
          color: "#fff",
          textAlign: "center",
          minWidth: "200px",
        }}
      >
        <div style={{ fontSize: "14px" }}>{data.name}</div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {data.value}
        </div>
        <div
          style={{
            position: "absolute",
            left: "-6px",
            top: "30%",
            transform: "translateY(-5x0%)",
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: "6px solid #1f2430",
          }}
        />
      </div>
    );
  };
  const { data: usersData } = useGetAllListUsersQuery();

  const allUsers = usersData?.data?.users || [];

  const champions = allUsers.filter((u) => u.user_type === 2 && !u.deactivated);
  const members = allUsers.filter((u) => u.user_type === 1 && !u.deactivated);

  const championsWithMembers = champions
    .filter((c) => c.team_id) // avoid null team
    .map((champion) => {
      const teamMembers = members.filter(
        (m) => m.team_id === champion.team_id && !m.deactivated,
      );

      return {
        champion,
        members: teamMembers,
      };
    });

  const filteredChampions = selectedTeam
    ? championsWithMembers.filter(
        (item: any) => item.champion.team_id === selectedTeam.id,
      )
    : [];

  const { data: teamKpiResponse } = useTeamKpisQuery(selectedTeam?.id);

  const teamKpiData = teamKpiResponse?.data;

  const teamSnapshot = teamKpiData?.quiz?.team_snapshot;
  const getGaugePercent = (value: number = 0) => {
    return Math.min(Math.max(value / 5, 0), 1);
  };
  const { data: chooseMyselfResponse } = useChooseMyselfQuery();

  const pathwayMap = React.useMemo(() => {
    const map: Record<number, string> = {};

    const frameworkData = chooseMyselfResponse?.data?.[1];

    frameworkData?.pillars?.forEach((pillar) => {
      pillar.principles?.forEach((principle) => {
        map[principle.pathway_number] = principle.pathway_title;
      });
    });

    return map;
  }, [chooseMyselfResponse]);

  const focusAreaChartData =
    teamKpiData?.individual_focus_areas
      ?.filter((item) => item.active_count > 0)
      ?.sort((a, b) => b.active_count - a.active_count)
      ?.map((item) => ({
        name: pathwayMap[item.pathway],
        value: item.active_count,
        activeCount: item.active_count,
      })) || [];

  const getWeeksRemaining = (seconds: number = 0) => {
    return Math.ceil(seconds / (60 * 60 * 24 * 7));
  };

  const latestReflections = teamKpiData?.engagement?.shared_reflections || [];
  const noDataFocusAreas =
    teamKpiData?.individual_focus_areas
      ?.sort((a, b) => b.active_count - a.active_count)
      ?.map((item) => ({
        name: pathwayMap[item.pathway],
        value: item.active_count || 0,
        activeCount: item.active_count || 0,
      })) || [];
  const isAllZero =
    noDataFocusAreas.length > 0 &&
    noDataFocusAreas.every((item) => item.value === 0);

  return (
    <>
      <div
        className={`relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        {/* TOP LEFT SHAPE */}
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />
        <Image
          src={images.orgSnapBg}
          alt="left-bg"
          width={421}
          height={400}
          className="absolute top-0 right-0 -z-10"
          priority
        />
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo] mt-[35px]">
          Overseer Hub
        </div>
        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-8">
          <h3 className="text-[#0f4f58] text-[30px] font-bold mb-4 font-[RocaTwo]">
            Organisation Snapshot{" "}
          </h3>
          <div className="ml-12">
            <p className="text-[#0F4F58] text-[22px] leading-relaxed">
              A clear view of engagement, focus and participation across teams.
              See emerging patterns, current priorities and where attention may
              be needed — all in one place.
            </p>
          </div>
        </div>
        <div className="mt-10 relative">
          <Image
            src={images.orgSnapTextBg}
            alt="left-bg"
            width={521}
            height={400}
            className="absolute top-0 left-0 -z-10"
            priority
          />
          <div>
            <div className="font-bold font-[RocaTwo] text-[27px] text-[#0f4f58]">
              Top Insights Across the Organisation{" "}
            </div>
            <div className="font-[Roboto] text-[23px]  text-[#0f4f58] ml-4">
              A quick view of the patterns emerging across your organisation.
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col text-[25px] font-[Roboto] text-[#0f4f58]  font-[#0f4f58]">
            <div>Most chosen Pressure Point: Everything feel urgent</div>
            <div>Most chosen Focus Area: Improve Clarity</div>
            <div>Most practised Team Ritual: [xxx]</div>
            <div>Average participation on team rituals: 72%</div>
            <div>Most practised individual micro-actions: [xxx]</div>
            <div>Average participation on individual micro-actions: 72%</div>
          </div>
        </div>
        <div className="mt-10 relative">
          <SuccessMessage
            text="When the system is healthy, performance becomes a natural outcome"
            fontSize="text-[22px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="392px"
            bottom="20px"
            rightImgRight="380px"
            rightImgBottom="20px"
            rotate="-35deg"
            maxWidth="500px"
          />
        </div>
        <div className="mt-10 bg-[#F4EFEA]font-[Roboto]">
          {/* Page Heading */}
          <h1 className="text-[33px] text-[#0F4F58] font-[RocaTwo] ">
            Explore All Teams
          </h1>

          {/* Top Filter Card */}
          <div className="bg-[#F6E3BB] rounded-[20px] px-10 py-8 mb-12">
            <div className="flex justify-end items-center gap-10">
              <label className="text-[28px] text-[#0F4F58] font-[RocaTwo]">
                Team
              </label>

              <div className="relative w-[520px]">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer bg-white text-[#567F55] text-[18px] px-6 h-[52px] rounded-[14px] flex items-center"
                >
                  <span className="truncate">
                    {selectedTeam?.team_name || "Select Team"}
                  </span>

                  <div className="ml-auto">
                    <Image
                      src={images.dropdownImg}
                      alt="dropdown"
                      width={28}
                      height={28}
                      className={`transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-full max-h-[250px] overflow-y-auto bg-white rounded-[14px] shadow-md z-50">
                    {teams.length > 0 ? (
                      teams.map((team: any) => (
                        <div
                          key={team.id}
                          onClick={() => {
                            setSelectedTeam(team);
                            setIsDropdownOpen(false);
                          }}
                          className="px-6 py-3 cursor-pointer hover:bg-[#F3EEE7] text-[#567F55]"
                        >
                          {team.team_name}
                        </div>
                      ))
                    ) : (
                      <div className="px-6 py-3 text-sm text-gray-500">
                        No team found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Team Details Card */}

          {selectedTeam && filteredChampions.length > 0 && (
            <>
              <div className="bg-[#F6E3BB] rounded-[20px] px-12 py-10">
                {filteredChampions.map((item: any, index: number) => (
                  <div
                    key={item.champion.id}
                    className={index > 0 ? "mt-[100px]" : ""}
                  >
                    {/* Champion */}

                    <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center gap-6">
                        <Image
                          src={
                            item.champion.has_profile_picture &&
                            item.champion.profile_picture_path
                              ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.champion.profile_picture_path}`
                              : images.dummyUser
                          }
                          alt="champion"
                          width={90}
                          height={90}
                          className="rounded-full"
                        />

                        <div>
                          <h2 className="text-[34px] text-[#0F4F58] font-[RocaTwo]">
                            Hi Humaniser! Champion
                          </h2>

                          <p className="text-[18px] text-[#0F4F58] mt-1">
                            {item.champion.first_name} {item.champion.last_name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Members */}

                    <h3 className="text-[32px] text-[#0F4F58] font-[RocaTwo] mb-10">
                      Hi Humaniser! Members
                    </h3>

                    <div className="grid grid-cols-5 gap-y-14">
                      {item.members.map((member: any) => (
                        <div
                          key={member.id}
                          className="flex flex-col items-center"
                        >
                          <Image
                            src={
                              member.has_profile_picture &&
                              member.profile_picture_path
                                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${member.profile_picture_path}`
                                : images.dummyUser
                            }
                            alt={`${member.first_name} ${member.last_name}`}
                            width={90}
                            height={90}
                            className="rounded-full"
                          />

                          <p className="text-center text-[#0F4F58] text-[16px] mt-4 w-[140px] leading-tight">
                            {member.first_name} {member.last_name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {selectedTeam && filteredChampions.length > 0 && (
          <>
            {/* Team Snapshot*/}
            <div className="mt-10">
              <div className="font-bold font-[RocaTwo] text-[32px] text-[#0f4f58]">
                Team Snapshot
              </div>
              <div className="font-[Roboto] text-[20px] text-[#0f4f58]">
                A summary of how this team scores across the three Humaniser
                pillars.
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-3 gap-[60px] text-center ">
                  {/* Pillar 1 */}
                  <div className="flex flex-col items-center">
                    <h4
                      className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                      style={{ fontFamily: "RocaTwo-BI" }}
                    >
                      The Mindset We Bring
                    </h4>

                    <p
                      className="mt-2 text-[#737373] text-[20px] w-[300px]"
                      style={{ fontFamily: "Aptos" }}
                    >
                      How you show up — your habits, openness, and
                      self-awareness.
                    </p>

                    <div className="mt-6 relative w-[250px]">
                      <GaugeChart
                        id="pillar-1-gauge"
                        nrOfLevels={1}
                        percent={getGaugePercent(teamSnapshot?.pillar_01_avg)}
                        hideText
                        arcWidth={0.38}
                        colors={["#D3CBB6"]}
                        needleColor="#F28B82"
                      />

                      <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        0
                      </span>

                      <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        5
                      </span>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex flex-col items-center">
                    <h4
                      className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                      style={{ fontFamily: "RocaTwo-BI" }}
                    >
                      The Way We Connect
                    </h4>

                    <p
                      className="mt-2 text-[#737373] text-[20px] w-[300px]"
                      style={{ fontFamily: "Aptos" }}
                    >
                      How you communicate, listen, and build trust with others.
                    </p>

                    <div className="mt-6 relative w-[250px]">
                      <GaugeChart
                        id="connect-gauge"
                        nrOfLevels={1}
                        percent={getGaugePercent(teamSnapshot?.pillar_02_avg)}
                        hideText
                        arcWidth={0.38}
                        colors={["#D3CBB6"]}
                        needleColor="#F28B82"
                      />

                      {/* Labels */}
                      <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        0
                      </span>

                      <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        5
                      </span>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex flex-col items-center">
                    <h4
                      className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                      style={{ fontFamily: "RocaTwo-BI" }}
                    >
                      The Culture We Shape
                    </h4>

                    <p
                      className="mt-2 text-[#737373] text-[20px] w-[300px]"
                      style={{ fontFamily: "Aptos" }}
                    >
                      How your actions influence the team environment and
                      wellbeing.
                    </p>

                    <div className="mt-6 relative w-[250px]">
                      <GaugeChart
                        id="pillar-3-gauge"
                        nrOfLevels={1}
                        percent={getGaugePercent(teamSnapshot?.pillar_03_avg)}
                        hideText
                        arcWidth={0.38}
                        colors={["#D3CBB6"]}
                        needleColor="#F28B82"
                      />

                      {/* Labels */}
                      <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        0
                      </span>

                      <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participation Pill */}
              <div className="flex justify-end mt-20">
                <div className="bg-[#86c9c9] px-8 py-2 rounded-full">
                  <p className="text-[#0F4F58] text-[22px] font-bold">
                    Participation: {teamKpiData?.quiz?.participation?.responded}
                    /{teamKpiData?.quiz?.participation?.total} have responded to
                    the quiz
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area */}
            <div className="mt-10">
              {/* Title */}
              <h2 className="text-[32px] text-[#0F4F58] font-[RocaTwo] font-bold">
                Individual Personal Pathways{" "}
              </h2>
              {isAllZero ? (
                <div className="bg-[#f8e1b8] rounded-[32px] mt-10 py-20 flex justify-center items-center">
                  <p className="text-[#0F4F58] text-[24px] font-[RocaTwo]">
                    No Data Found
                  </p>
                </div>
              ) : (
                <>
                  {/* Subtitle */}
                  <p className="text-[20px] text-[#0F4F58] font-[Roboto]">
                    Where team members are currently directing their personal
                    attention.
                  </p>

                  {/* Chart Card */}
                  <div className="bg-[#f8e1b8] rounded-[20px] p-16 mt-6">
                    {isAllZero ? (
                      <div className="relative">
                        <ResponsiveContainer
                          width="100%"
                          height={450}
                          style={{ background: "#D7D8C8" }}
                        >
                          <BarChart
                            data={noDataFocusAreas}
                            layout="vertical"
                            margin={{
                              top: 10,
                              right: 30,
                              left: 120,
                              bottom: 40,
                            }}
                          >
                            <XAxis
                              type="number"
                              domain={[0, 35]}
                              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                            />
                            <YAxis type="category" dataKey="name" width={260} />
                            <Bar dataKey="value" fill="#86c9c9" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <ResponsiveContainer
                        width="100%"
                        height={450}
                        style={{ background: "#D7D8C8" }}
                      >
                        <BarChart
                          data={focusAreaChartData}
                          layout="vertical"
                          margin={{ top: 10, right: 30, left: 120, bottom: 40 }}
                        >
                          <CartesianGrid
                            stroke="#A8A99A"
                            strokeOpacity={0.4}
                            horizontal={false}
                          />

                          <XAxis
                            type="number"
                            domain={[0, 35]}
                            ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
                            tick={{ fontSize: 20, fill: "#000" }}
                            axisLine={false}
                            tickLine={false}
                            label={{
                              value: "% of people",
                              position: "bottom",
                              offset: 10,
                              style: { fontSize: 22, fill: "#000" },
                            }}
                          />

                          <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 22, fill: "#000" }}
                            axisLine={false}
                            tickLine={false}
                            width={260}
                          />

                          <Bar
                            dataKey="value"
                            barSize={40}
                            shape={renderBar}
                            isAnimationActive
                            animationDuration={2000}
                            animationEasing="ease-in-out"
                          />

                          <Tooltip
                            cursor={false}
                            content={(props) => <CustomTooltip {...props} />}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Latest Poll Result */}
            <div className="mt-10">
              {/* Header Section */}
              <div>
                <h1 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
                  Latest Team Poll Results{" "}
                </h1>
              </div>
              {!teamKpiData?.poll ? (
                <div className="bg-[#f8e1b8] rounded-[32px] mt-10 py-20 flex justify-center items-center">
                  <p className="text-[#0F4F58] text-[24px] font-[RocaTwo]">
                    No Latest Team Poll Result Found
                  </p>
                </div>
              ) : (
                <div className="relative bg-[#f8e1b8] p-4 mt-6 rounded-xl overflow-hidden">
                  {/* <div className="absolute top-8 right-10 text-right text-[#0F4F58] text-sm leading-tight">
          <p>State 4 – Poll reached threshold</p>
          <p>(≥ 50% responses, Champion can act)</p>
        </div> */}

                  <div className="absolute right-0 top-0 ">
                    <Image
                      src={images.dottedCurve}
                      alt="pattern"
                      width={500}
                      height={270}
                    />
                  </div>

                  {/* Two Column Section */}
                  <div className="grid grid-cols-2 gap-16 mt-16 ml-8">
                    {/* LEFT COLUMN */}
                    <div>
                      <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                        What the team says would most support progress right now
                      </h3>

                      <div className="bg-[#b9cbb7] rounded-2xl p-8 space-y-6">
                        {teamKpiData?.poll?.results?.map((item) => (
                          <ProgressPill
                            key={item.option}
                            label={item.option}
                            percent={item.vote_percentage}
                          />
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                      <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                        How this helps your leadership
                      </h3>

                      <div className="bg-[#b9cbb7] rounded-2xl p-8 space-y-8 text-[#0F4F58] text-[18px] leading-relaxed font-[Roboto] ">
                        <p>
                          Earlier issue-raising, better judgement in decisions,
                          and fewer surprises later.
                        </p>

                        <p>
                          Clear priorities, faster decision-making, and less
                          rework across the team.
                        </p>

                        <p>
                          Better coordination across teams, reducing silos,
                          friction, and delays in delivery.
                        </p>

                        <p>
                          Stronger ownership, more discretionary effort, and
                          better retention of key people.
                        </p>

                        <p>
                          More sustainable pace, fewer energy crashes, and
                          steadier delivery over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Participation */}
                  <div className="mt-6 ml-4">
                    <p className="text-[#0F4F58] text-[20px] font-bold font-[RocaTwo]">
                      Participation:{" "}
                      {teamKpiData?.poll?.participation?.responded} of{" "}
                      {teamKpiData?.poll?.participation?.total} team members
                      responded ({teamKpiData?.poll?.participation?.percentage}
                      %)
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="bg-[#f8e1b8] rounded-[16px] px-8 py-6">
                  <h3 className="text-[#0F4F58] text-[20px] font-[RocaTwo] mb-6">
                    Champion Pressure Point
                  </h3>

                  <div className="bg-[#E9E9E9] rounded-[14px] px-5 py-3 text-[#567F55] text-[16px] w-full">
                    {teamKpiData?.cycle?.champion_pp || "No Data Found"}
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f8e1b8] rounded-[16px] px-8 py-6">
                  <h3 className="text-[#0F4F58] text-[20px] font-[RocaTwo] mb-2">
                    Recommended Focus Area
                  </h3>
                  {!teamKpiData?.cycle ? (
                    <div className="bg-[#E9E9E9] rounded-[14px] px-5 py-3 text-[#567F55] text-[16px] w-full mt-6">
                      No Data Found
                    </div>
                  ) : (
                    <div className="flex justify-center items-center ">
                      {teamKpiData?.cycle?.recommended_focus_areas?.map(
                        (focusArea: string, index: number) => (
                          <div key={focusArea} className={styles.card}>
                            <Image
                              src={
                                index % 2 === 0
                                  ? images.orgSnapPoly
                                  : images.overseerToolPoly
                              }
                              alt={focusArea}
                              fill
                              className={styles.cardImage}
                            />
                            <h3 className={styles.cardTitle}>{focusArea}</h3>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>

                {/* Card 3 */}
                <div className="bg-[#f8e1b8] rounded-[16px] px-8 py-6">
                  <h3 className="text-[#0F4F58] text-[20px] font-[RocaTwo] mb-6">
                    Chosen Team Ritual
                  </h3>
                  {!teamKpiData?.cycle ? (
                    <div className="bg-[#E9E9E9] rounded-[14px] px-5 py-3 text-[#567F55] text-[16px] w-full mt-6">
                      No Data Found
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {teamKpiData?.cycle?.chosen_team_rituals?.map(
                        (ritual: any) => (
                          <div
                            key={ritual.team_ritual_id}
                            className="bg-[#E9E9E9] rounded-[14px] px-5 py-3 text-[#567F55] text-[16px]"
                          >
                            {ritual.title}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ACTIVE FOCUS & ENGAGEMENT SECTION */}
            <div className="mt-10">
              {/* Section Title */}
              <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58] mt-6 font-bold">
                Active Focus & Engagement
              </h2>
              {!teamKpiData?.cycle ? (
                <div className="bg-[#f8e1b8] rounded-[32px] mt-10 py-20 flex justify-center items-center">
                  <p className="text-[#0F4F58] text-[24px] font-[RocaTwo]">
                    No Active Focus & Engagement Found
                  </p>
                </div>
              ) : (
                <div className="bg-[#f8e1b8] rounded-[24px] p-10">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-2 gap-12">
                    {/* CARD */}
                    {teamKpiData?.cycle?.chosen_team_rituals?.map(
                      (ritual: any, index: number) => (
                        <div
                          key={ritual.team_ritual_id}
                          className="bg-[#b9cbb7] rounded-[20px] p-10"
                        >
                          {/* TOP INFO SECTION */}
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <span className="text-[20px] font-[RocaTwo] text-[#0F4F58]">
                                Focus Area
                              </span>

                              <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                                {ritual.focus_area}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                                Active Team <br /> Ritual
                              </span>

                              <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                                {ritual.title}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                                Time remaining <br /> in this cycle
                              </span>

                              <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                                [
                                {getWeeksRemaining(
                                  teamKpiData?.cycle?.time_remaining_seconds,
                                )}{" "}
                                Weeks]
                              </div>
                            </div>
                          </div>

                          {/* Engagement Section */}
                          <div className="mt-12">
                            <h3 className="text-[28px] font-[RocaTwo] text-[#0F4F58] mb-8">
                              Engagement so far:
                            </h3>

                            <ul className="space-y-6 text-[18px] text-[#0F4F58] font-[Roboto]">
                              <li className="flex items-start gap-4">
                                <Image
                                  src={images.engagementImg}
                                  alt="arrow"
                                  width={22}
                                  height={22}
                                  className="mt-1"
                                />
                                <span>
                                  Awareness:{" "}
                                  {teamKpiData?.engagement?.awareness
                                    ?.percentage ?? 0}
                                  % have viewed the ritual
                                </span>
                              </li>

                              <li className="flex items-start gap-4">
                                <Image
                                  src={images.engagementImg}
                                  alt="arrow"
                                  width={22}
                                  height={22}
                                  className="mt-1"
                                />
                                <span>
                                  Participation:{" "}
                                  {teamKpiData?.engagement
                                    ?.team_ritual_participation?.percentage ??
                                    0}
                                  % have contributed at least one team
                                  reflection
                                </span>
                              </li>

                              <li className="flex items-start gap-4">
                                <Image
                                  src={images.engagementImg}
                                  alt="arrow"
                                  width={22}
                                  height={22}
                                  className="mt-1"
                                />
                                <span>
                                  Momentum:{" "}
                                  {teamKpiData?.engagement?.momentum
                                    ?.percentage ?? 0}
                                  % have contributed more than once
                                </span>
                              </li>

                              <li className="flex items-start gap-4">
                                <Image
                                  src={images.engagementImg}
                                  alt="arrow"
                                  width={22}
                                  height={22}
                                  className="mt-1"
                                />
                                <span>
                                  Sharing:{" "}
                                  {teamKpiData?.engagement?.sharing
                                    ?.shared_count ?? 0}{" "}
                                  reflections shared on Reflection Wall
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10">
              <div className="font-bold text-[32px] font-[RocaTwo] text-[#0f4f58]">
                Latest Reflections
              </div>
              <div className="font-[Roboto] text-[20px] text-[#0f4f58]">
                Recent insights shared by the team.
              </div>
              {/* Cards Section */}
              {latestReflections.length > 0 ? (
                <>
                  <div className="bg-[#c2e2e2] rounded-[32px] mt-10 px-4 py-4 relative max-w-[1150px] h-[873px] ml-[95px] ">
                    <div className="absolute -left-[53px]">
                      <div className="flex flex-col items-center">
                        {rows.map((row: any, rowIndex: any) => (
                          <div key={rowIndex} className={`flex gap-10`}>
                            {row.map((item: any) => (
                              <ViewAllReflectionCard
                                key={item.id}
                                text={item.text}
                                rotate={item.rotate}
                                imageKey={item.imageKey}
                                index={item.id}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-[#c2e2e2] rounded-[32px] mt-10 py-20 flex justify-center items-center">
                  <p className="text-[#0F4F58] text-[24px] font-[RocaTwo]">
                    No Latest Reflections Shared By Team
                  </p>
                </div>
              )}
            </div>
            {latestReflections.length > 0 && (
              <div className="flex justify-end ">
                {/* View All Reflections Button */}
                <PolygonButton
                  height="106px"
                  width="87px"
                  bgColor="#f5c882"
                  radius={14}
                  topTilt={18}
                  slantSide="right"
                  clipPath={`polygon(17% 28px, 77% 17%, 100% 79%, 0% calc(100% - 25px))`}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[18px]">
                      View All Reflections
                    </span>
                  </div>
                </PolygonButton>
              </div>
            )}
          </>
        )}
        <div className="flex flex-col justify-end mt-10 relative z-20">
          <div className="flex justify-end">
            {/* Bottom Buttons */}
            <div className="flex flex-col gap-4 items-center ">
              <div className="cursor-pointer">
                <CommonButtons
                  label={`Return to Partner Hub`}
                  bgColor="#cde3cc"
                  onClick={() => router.push("/overseer-hub")}
                />
              </div>
              <div className="cursor-pointer">
                <CommonButtons
                  label="Go to Homepage"
                  bgColor="#cde3cc"
                  onClick={() => router.push("/home")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default OrganizationSnapshot;
