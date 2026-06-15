// /* eslint-disable @typescript-eslint/no-explicit-any */
// import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
// import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
// import Image from "next/image";
// import images from "@/src/assets/images";
// import styles from "./MyDashboard.module.css";
// import MyQuizResults from "./MyQuizResults/MyQuizResults";
// import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
// import MyPersonalProgress from "./MyPersonalProgress/MyPersonalProgress";
// import MyActivePractice from "./MyActivePractice/MyActivePractice";
// import MyTeamProgress from "./MyTeamProgress/MyTeamProgress";
// import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import useMyQuizResultQuery from "../../ChoosePathwayModule/Hooks/useMyQuizResultQuery";
// import useQuizDetailsQuery from "../../ChoosePathwayModule/Hooks/useQuizDetailsQuery";
// import { toPng } from "html-to-image";
// import jsPDF from "jspdf";
// import DashboardPdf from "./DashboardPdf/DashboardPdf";
// import usePersonalPathwayQuery from "../../PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
// import useChooseMyselfQuery from "../../ChoosePathwayModule/Hooks/useChooseMyselfQuery";
// import { enrichProgressWithPractice } from "@/src/lib/Helpers";
// import { useGetMppMessagesQuery } from "../../WelcomeModule/Hooks/useGetMppMessagesQuery";
// import useAuthValue from "../../AuthModule/Hooks/useAuthValue";
// import LogoutModal from "../../WelcomeModule/Components/LogoutModal/LogoutModal";
// import useFindUserQuery from "../../TeamSettingModule/Hooks/useFindUserQuery";

// type Principle = {
//   key: string;
//   score: number;
//   situation: number;
//   pillar: string;
// };

// type PillarItem = {
//   top: Principle;
//   weak: Principle;
// };

// type PillarDataType = Record<string, PillarItem>;

// function MyDashboard() {
//   const [resultData, setResultData] = useState<{
//     pillarData: PillarDataType;
//     pillarAvg: Record<string, number>;
//   } | null>(null);
//   const [progressList, setProgressList] = useState<any>([]);
//   const [selected, setSelected] = useState("");

//   const [isDownloading, setIsDownloading] = useState(false);
//   const [topStrengthDetails, setTopStrengthDetails] = useState<any[]>([]);
//   const [weakStrengthDetails, setWeakStrengthDetails] = useState<any[]>([]);
//   const [practiceList, setPracticeList] = useState<any[]>([]);
//   const [showPdf, setShowPdf] = useState(false);

//   const router = useRouter();
//   const { user } = useAuthValue();
//   const { data, isLoading } = useMyQuizResultQuery();
//   const pdfRef = useRef<HTMLDivElement>(null);
//   const [enter, setEnter] = useState(false);

//   const { data: findUserData } = useFindUserQuery(user?.sub, {
//     enabled: user?.user_type === 2,
//   });
//   const findUserProfile = findUserData?.data?.profile;

//   const joinedYear = findUserProfile?.created
//     ? new Date(findUserProfile.created).getFullYear()
//     : new Date().getFullYear();

//   const yearOptions = Array.from({ length: 11 }, (_, index) =>
//     String(joinedYear + index),
//   );

//   useEffect(() => {
//     setEnter(true);
//   }, []);

//   useEffect(() => {
//     if (!showPdf) return;

//     const generatePDF = async () => {
//       try {
//         await new Promise((r) => setTimeout(r, 500));

//         if (!pdfRef.current) {
//           console.error("PDF element still not found");
//           return;
//         }

//         const dataUrl = await toPng(pdfRef.current, {
//           cacheBust: true,
//           pixelRatio: 2,
//         });

//         const pdf = new jsPDF("p", "mm", "a4");

//         const imgProps = pdf.getImageProperties(dataUrl);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//         let heightLeft = pdfHeight;
//         let position = 0;

//         pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
//         heightLeft -= pdf.internal.pageSize.getHeight();

//         while (heightLeft > 0) {
//           position = heightLeft - pdfHeight;
//           pdf.addPage();
//           pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
//           heightLeft -= pdf.internal.pageSize.getHeight();
//         }

//         pdf.save("MyDashboard.pdf");
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setShowPdf(false);
//         setIsDownloading(false);
//       }
//     };

//     generatePDF();
//   }, [showPdf]);

//   const handleDownloadPDF = () => {
//     setIsDownloading(true);
//     setShowPdf(true);
//   };

//   const sortFn = (a: any, b: any, asc = false) => {
//     if (a.score !== b.score) {
//       return asc ? a.score - b.score : b.score - a.score;
//     }
//     if (a.situation !== b.situation) {
//       return a.situation - b.situation;
//     }
//     return a.key.localeCompare(b.key);
//   };

//   const processQuizResults = (results: any) => {
//     const wS = 0.5;
//     const wZ = 0.5;

//     const pillarData: any = {};
//     const pillarAvg: any = {};

//     Object.keys(results).forEach((pillarKey) => {
//       const principles = results[pillarKey];
//       const arr: any[] = [];

//       Object.keys(principles).forEach((pKey) => {
//         const item = principles[pKey];
//         const score = wS * item.strength + wZ * item.situation;
//         arr.push({
//           key: pKey,
//           score,
//           situation: item.situation,
//           pillar: pillarKey,
//         });
//       });

//       const sortedDesc = [...arr].sort((a, b) => sortFn(a, b, false));
//       const sortedAsc = [...arr].sort((a, b) => sortFn(a, b, true));

//       pillarData[pillarKey] = { top: sortedDesc[0], weak: sortedAsc[0] };
//       pillarAvg[pillarKey] =
//         arr.reduce((sum, p) => sum + p.score, 0) / arr.length;
//     });

//     return { pillarData, pillarAvg };
//   };

//   const getTopStrengthDetails = (topStrengths: any[], quizData: any) => {
//     if (!quizData?.pillars) return [];
//     const result: any[] = [];
//     topStrengths.forEach((item) => {
//       const formattedKey = item.key.replace("principle", "Principle");
//       Object.values(quizData.pillars).forEach((pillar: any) => {
//         const principle = pillar.principles?.[formattedKey];
//         if (principle) {
//           result.push({
//             key: item.key,
//             title: principle.display_name,
//             description: principle.why_this_strength,
//           });
//         }
//       });
//     });
//     return result;
//   };

//   const { data: quizDetails } = useQuizDetailsQuery();

//   const getWeakStrengthDetails = (growthTargets: any[], quizData: any) => {
//     if (!quizData?.pillars) return [];
//     const result: any[] = [];
//     growthTargets.forEach((item) => {
//       const formattedKey = item.key.replace("principle", "Principle");
//       const principle_number = parseInt(item.key.split("_")[1], 10);
//       const pillar_number = parseInt(item.pillar.split("_")[1], 10);
//       Object.values(quizData.pillars).forEach((pillar: any) => {
//         const principle = pillar.principles?.[formattedKey];
//         if (principle) {
//           result.push({
//             key: item.key,
//             title: principle.display_name,
//             description: principle.description,
//             principle_number,
//             pillar_number,
//           });
//         }
//       });
//     });
//     return result;
//   };

//   useEffect(() => {
//     if (resultData?.pillarData && quizDetails?.data) {
//       const topStrengths = Object.values(resultData.pillarData).map(
//         (p: any) => p.top,
//       );
//       const details = getTopStrengthDetails(topStrengths, quizDetails.data);
//       setTopStrengthDetails(details);
//     }
//   }, [resultData, quizDetails]);

//   useEffect(() => {
//     if (resultData?.pillarData && quizDetails?.data) {
//       const weakPrinciples = Object.values(resultData.pillarData).map(
//         (p: any) => p.weak,
//       );
//       const weakDetails = getWeakStrengthDetails(
//         weakPrinciples,
//         quizDetails.data,
//       );
//       setWeakStrengthDetails(weakDetails);
//     }
//   }, [resultData, quizDetails]);

//   const teamProgressList = [
//     {
//       id: 1,
//       title: "Ritual 1",
//       status: "Completed",
//       date: "15/01/2026",
//       icon: images.perspectiveImg,
//     },
//     {
//       id: 2,
//       title: "Ritual 2",
//       status: "Completed",
//       date: "29/01/2026",
//       icon: images.wellbeingSmallPoly,
//     },
//     {
//       id: 3,
//       title: "Ritual 3",
//       status: "Completed",
//       date: "25/02/2026",
//       icon: images.clarityImg,
//     },
//     {
//       id: 4,
//       title: "Ritual 4",
//       status: "Completed",
//       date: "19/03/2026",
//       icon: images.curiousImg,
//     },
//     { id: 5, title: "Ritual 5", status: "In Progress", icon: images.listenImg },
//   ];

//   const quizRef = useRef<HTMLDivElement>(null);
//   const progressRef = useRef<HTMLDivElement>(null);
//   const practiceRef = useRef<HTMLDivElement>(null);
//   const teamRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const { data: chooseMyselfData } = useChooseMyselfQuery();
//   const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();

//   const getLatestQuizByYear = (quizList: any[], selectedYear: string) => {
//     if (!Array.isArray(quizList)) return null;
//     const filtered = quizList.filter((item) => {
//       const year = new Date(item.created_at).getFullYear().toString();
//       return year === selectedYear;
//     });
//     if (filtered.length === 0) return null;
//     const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp);
//     return sorted[0];
//   };

//   const currentYear = new Date().getFullYear().toString();

//   const activeYear = selected || currentYear;

//   const latestQuiz = getLatestQuizByYear(data?.data?.quiz || [], activeYear);

//   const formattedDate = latestQuiz ? formatDate(latestQuiz.created_at) : "";

//   useEffect(() => {
//     if (latestQuiz?.results) {
//       const processed = processQuizResults(latestQuiz.results);
//       setResultData(processed);
//     } else {
//       setResultData(null);
//     }
//   }, [latestQuiz]);

//   const generateStructuredProgressList = (mppData: any[]) => {
//     if (!Array.isArray(mppData)) return [];
//     return mppData
//       .filter((item: any) => item.active || item.completed)
//       .map((item: any) => {
//         const pathwayKey = Object.keys(item).find(
//           (key) =>
//             ![
//               "created",
//               "uuid",
//               "active",
//               "completed",
//               "pathway_id",
//               "id",
//             ].includes(key),
//         );
//         if (!pathwayKey) return null;
//         return {
//           [pathwayKey]: item[pathwayKey],
//           created: item.created,
//           uuid: item.uuid,
//           active: item.active,
//           ...(item.completed && { completed: item.completed }),
//         };
//       })
//       .filter(Boolean);
//   };

//   const getPathwayMap = (chooseData: any[]) => {
//     const map: Record<number, string> = {};
//     chooseData?.forEach((item: any) => {
//       item?.pillars?.forEach((pillar: any) => {
//         pillar?.principles?.forEach((principle: any) => {
//           map[principle.pathway_number] = principle.pathway_title;
//         });
//       });
//     });
//     return map;
//   };

//   const transformProgressList = (progressList: any[], pathwayMap: any) => {
//     return progressList.map((item) => {
//       const dynamicKey = Object.keys(item).find(
//         (key) => !["created", "uuid", "active", "completed"].includes(key),
//       );
//       if (!dynamicKey) return item;
//       const pathwayNumber = Number(dynamicKey);
//       const pathwayName = pathwayMap[pathwayNumber] || dynamicKey;
//       return {
//         [pathwayName]: item[dynamicKey],
//         created: item.created,
//         uuid: item.uuid,
//         active: item.active,
//         ...(item.completed && { completed: item.completed }),
//       };
//     });
//   };

//   useEffect(() => {
//     if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
//       const structuredList = generateStructuredProgressList(
//         getListMppData.data.pathways,
//       );
//       const pathwayMap = getPathwayMap(chooseMyselfData.data);
//       const updatedList = transformProgressList(structuredList, pathwayMap);
//       const sortedList = updatedList.sort(
//         (a: any, b: any) =>
//           new Date(b.created).getTime() - new Date(a.created).getTime(),
//       );
//       const latest20 = sortedList.slice(0, 20);
//       setProgressList(latest20);
//     }
//   }, [getListMppData, chooseMyselfData]);

//   const getSelectedMicroActions = (pathways: any[]) => {
//     if (!Array.isArray(pathways)) return [];
//     let selected: string[] = [];
//     pathways.forEach((item) => {
//       const dynamicKey = Object.keys(item).find(
//         (key) =>
//           ![
//             "created",
//             "uuid",
//             "active",
//             "completed",
//             "pathway_id",
//             "id",
//           ].includes(key),
//       );
//       if (!dynamicKey) return;
//       const m3 = item?.[dynamicKey]?.m3;
//       if (m3?.pin_to_dash?.length) {
//         selected.push(...m3.pin_to_dash);
//       }
//     });
//     return [...new Set(selected)];
//   };

//   useEffect(() => {
//     if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
//       const selectedKeys = getSelectedMicroActions(
//         getListMppData.data.pathways,
//       );
//       const list: any[] = [];
//       chooseMyselfData.data.forEach((item: any) => {
//         item?.pillars?.forEach((pillar: any) => {
//           pillar?.principles?.forEach((principle: any) => {
//             principle?.micro_actions?.forEach((action: any, index: number) => {
//               const key = `ma${index + 1}`;
//               list.push({
//                 id: key,
//                 title: action.title,
//                 description: action.description,
//                 pathway: principle.pathway_title,
//                 checked: selectedKeys.includes(key),
//               });
//             });
//           });
//         });
//       });
//       setPracticeList(list);
//     }
//   }, [getListMppData, chooseMyselfData]);

//   const activePracticeListForPdf = practiceList.filter((item) => item.checked);
//   const enrichedProgressList = enrichProgressWithPractice(
//     progressList,
//     practiceList,
//   );
//   const { data: randomMessage } = useGetMppMessagesQuery();

//   return (
//     <>
//       <div
//         className={`min-h-screen bg-[#4BA6A6] relative font-sans ${styles.page}
//           ${styles.enterRight}
//           ${enter ? styles.enterActive : ""}`}
//       >
//         {/* Background decorative images — hidden on mobile to avoid overflow issues */}
//         <Image
//           src={images.myDashGreenPoly}
//           alt="dash-green-rectangle"
//           width={330}
//           height={330}
//           className="absolute top-0 left-0 z-0 hidden md:block"
//         />
//         <Image
//           src={images.myDashBluePoly}
//           alt="dash-rectangle"
//           width={530}
//           height={530}
//           className="absolute top-45 right-0 z-0 hidden md:block"
//         />

//         {/* Smaller decorative images for mobile */}
//         <Image
//           src={images.myDashGreenPoly}
//           alt="dash-green-rectangle"
//           width={160}
//           height={160}
//           className="absolute top-0 left-0 z-0 block md:hidden"
//         />
//         <Image
//           src={images.myDashBluePoly}
//           alt="dash-rectangle"
//           width={220}
//           height={220}
//           className="absolute top-20 right-0 z-0 block md:hidden"
//         />

//         <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 absolute w-screen">
//           {/* Header */}
//           <UserProfileHeader
//             greetingColor="#0F4F58"
//             nameColor="#0F4F58"
//             userInfo={user}
//           />

//           <SuccessMessage
//             text={randomMessage || ""}
//             fontSize="text-[18px] md:text-[28px]"
//             fontColor="#0F4F58"
//             leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
//             rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
//             bottom="3px"
//             rightImgBottom="3px"
//             rotate="-35deg"
//           />

//           {/* Title */}
//           <h1 className="text-center text-[30px] sm:text-[38px] md:text-[45px] font-semibold text-[#254C4C] mt-8 md:mt-14 font-[RocaTwo]">
//             My Dashboard
//           </h1>

//           {/* Description + Download */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1000px] mx-auto mt-6 md:mt-10 gap-4">
//             <p className="text-[#0F4F58] text-[16px] md:text-[20px] leading-6 md:leading-7 max-w-full md:max-w-[800px]">
//               This is your hub — a snapshot of your journey so far. Revisit your
//               check-in, see what you're building, track what you're practicing,
//               and notice how it's showing up in your team.
//             </p>
//           </div>

//           {/* Period Selector */}
//           <div className="flex justify-end w-full mx-auto mt-6 md:mt-10">
//             <div className="flex items-center gap-3 relative">
//               <label className="text-[16px] md:text-[22px] text-[#0F4F58] font-[RocaTwo]">
//                 Select Period
//               </label>
//               <div className="relative">
//                 <select
//                   value={selected}
//                   onChange={(e) => setSelected(e.target.value)}
//                   className="
//                     appearance-none
//                     bg-[#EDEDED]
//                     text-[#254C4C]
//                     text-[15px] md:text-[18px]
//                     px-4 md:px-6 pr-12 md:pr-14
//                     h-[40px] md:h-[48px]
//                     rounded-full
//                     outline-none
//                     cursor-pointer
//                   "
//                 >
//                   <option value="" disabled hidden>
//                     Select Year
//                   </option>
//                   {yearOptions.map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="absolute right-0 top-0 h-full w-[40px] md:w-[50px] flex items-center justify-center pointer-events-none">
//                   <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-r-[8px] md:border-r-[10px] border-t-[10px] md:border-t-[12px] border-l-transparent border-r-transparent border-t-[#254C4C]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Cards — 2x2 grid on mobile/tablet, 4-col on desktop */}
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[47px] justify-center items-center mx-auto mt-10 md:mt-[90px]">
//             <div
//               className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
//               onClick={() => scrollToSection(quizRef)}
//             >
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={images.quizPoly}
//                   alt="home icon"
//                   fill
//                   className={styles.cardImage}
//                 />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>My Check-In Space</h3>
//               </div>
//             </div>

//             <div
//               className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
//               onClick={() => scrollToSection(progressRef)}
//             >
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={images.personalPoly}
//                   alt="green-icon"
//                   fill
//                   className={styles.cardImage}
//                 />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>My Personal Progress</h3>
//               </div>
//             </div>

//             <div
//               className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
//               onClick={() => scrollToSection(practiceRef)}
//             >
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={images.activePoly}
//                   alt="green-icon"
//                   fill
//                   className={styles.cardImage}
//                 />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>My Active Practice List</h3>
//               </div>
//             </div>

//             <div
//               className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
//               onClick={() => scrollToSection(teamRef)}
//             >
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={images.progressPoly}
//                   alt="green-icon"
//                   fill
//                   className={styles.cardImage}
//                 />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>My Team Progress</h3>
//               </div>
//             </div>
//           </div>

//           {/* Download Row */}
//           <div className="flex flex-col sm:flex-row justify-end w-full mx-auto mt-6 md:mt-10 gap-4 sm:gap-10 items-center sm:items-center">
//             <div className="text-[15px] md:text-[18px] text-[#0F4F58] font-bold text-center sm:text-right max-w-full sm:max-w-[400px] md:max-w-none">
//               Download your journey and use it in your next performance or
//               development review
//             </div>
//             <div className="flex-shrink-0">
//               <button
//                 className="flex flex-col items-center gap-2"
//                 onClick={handleDownloadPDF}
//                 disabled={isDownloading}
//               >
//                 <Image src={images.downloadImg} alt="download" />
//                 <span className="text-xs sm:text-sm text-[#3E5F5F]">
//                   {isDownloading ? "Preparing PDF..." : "Download in PDF"}
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Sections */}
//           <div className="items-center mx-auto mt-10 md:mt-14">
//             <div className="mx-auto mt-10 md:mt-14" ref={quizRef}>
//               <MyQuizResults
//                 topStrengthDetails={topStrengthDetails}
//                 formattedDate={formattedDate}
//                 resultData={resultData}
//                 weakStrengthDetails={weakStrengthDetails}
//               />
//             </div>

//             <div className="mx-auto mt-10 md:mt-14" ref={progressRef}>
//               <MyPersonalProgress progressList={progressList} />
//             </div>

//             <div className="mx-auto mt-10 md:mt-14" ref={practiceRef}>
//               <MyActivePractice practiceList={practiceList} />
//             </div>

//             <div className="mx-auto mt-10 md:mt-14" ref={teamRef}>
//               <MyTeamProgress teamProgressList={teamProgressList} />
//             </div>
//           </div>

//           {/* Bottom Action Row */}
//           {/* Bottom Action Row */}
//           <div className="flex flex-col sm:flex-row justify-between mt-[40px] md:mt-[50px] gap-6 sm:gap-0 items-center sm:items-start">
//             {/* Download PDF */}
//             <div className="flex justify-center sm:justify-start">
//               <button
//                 className="flex flex-col items-center gap-2"
//                 onClick={handleDownloadPDF}
//                 disabled={isDownloading}
//               >
//                 <Image src={images.downloadImg} alt="download" />
//                 <span className="text-xs sm:text-sm text-[#3E5F5F]">
//                   {isDownloading ? "Preparing PDF..." : "Download in PDF"}
//                 </span>
//               </button>
//             </div>

//             {/* See all Ritual Reflections Button */}
//             <div className="flex justify-center sm:justify-end">
//               <div
//                 className="cursor-pointer"
//                 onClick={() => router.push("/reflection-walls")}
//               >
//                 <PolygonButton
//                   width="137px"
//                   height="129px"
//                   bgColor="#f8e1b8"
//                   radius={14}
//                   clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
//                   decorationImg={{
//                     src: images.rightArrow,
//                     width: 48,
//                     height: 48,
//                   }}
//                   decorationPosition={{
//                     className: "-right-[20px] -top-[28px]",
//                   }}
//                 >
//                   <div className="h-full flex items-center justify-center text-center">
//                     <span className="text-[#0F4F58] text-[18px] sm:text-[22px] font-[RocaTwo] font-bold leading-[28px] md:leading-[32px]">
//                       See all Ritual Reflections
//                     </span>
//                   </div>
//                 </PolygonButton>
//               </div>
//             </div>
//           </div>
//           {/* Success Message */}
//           <div className="mt-10 md:mt-14 mx-auto">
//             <SuccessMessage
//               text="Performance shifts when we practice, reflect, and connect — and you're doing that here"
//               fontSize="text-[17px] md:text-[23px]"
//               leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
//               rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
//               fontColor="#0F4F58"
//               top="-28px"
//               rightImgTop="-35px"
//               rotate="-35deg"
//               maxWidth="450px"
//             />
//           </div>

//           {/* Footer */}
//           <div className="flex flex-col sm:flex-row justify-between mt-[80px] md:mt-[160px] gap-8 sm:gap-0">
//             {/* Invite Section */}
//             <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-0">
//               <div className="max-w-[200px] text-[#0F4F58] font-[Aptos] text-[15px] md:text-[17px]">
//                 Love what Hi Humaniser!™ brings? Share it with a friend who'd
//                 enjoy it too.
//               </div>
//               <div className="ml-0 sm:ml-[26px]">
//                 <PolygonButton
//                   width="85px"
//                   height="95px"
//                   bgColor="#F7C3BE"
//                   radius={14}
//                   clipPath={`polygon(0% 0%, 100% 18px,100% calc(100% - 14px),0% 100%)`}
//                 >
//                   <div className="h-full flex items-center justify-center text-center">
//                     <span className="text-[#0F4F58] text-[16px] md:text-[18px] font-[RocaTwo] font-bold leading-[20px] md:leading-[21px]">
//                       Invite a Humaniser
//                     </span>
//                   </div>
//                 </PolygonButton>
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex flex-col items-center gap-[10px] md:gap-[14px]">
//               <CommonButtons
//                 label="Change my Pathway"
//                 bgColor="#F5F0EB"
//                 onClick={() => router.push("/choose-myself")}
//               />
//               <CommonButtons
//                 label="Return to
// My Personal Pathway"
//                 bgColor="#F5F0EB"
//                 onClick={() => router.push("/personal-pathway")}
//               />
//               <CommonButtons
//                 label="Return to My Team
// Journey"
//                 bgColor="#F5F0EB"
//                 onClick={() => router.push("/team-journey")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {showPdf && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             opacity: 0,
//             pointerEvents: "none",
//             zIndex: -1,
//           }}
//         >
//           <div ref={pdfRef}>
//             <DashboardPdf
//               resultData={resultData}
//               topStrengthDetails={topStrengthDetails}
//               weakStrengthDetails={weakStrengthDetails}
//               activePracticeListForPdf={activePracticeListForPdf}
//               enrichedProgressList={enrichedProgressList}
//               randomMessage={randomMessage}
//             />
//           </div>
//         </div>
//       )}
//       <LogoutModal />
//     </>
//   );
// }

// export default MyDashboard;





















/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./MyDashboard.module.css";
import MyQuizResults from "./MyQuizResults/MyQuizResults";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import MyPersonalProgress from "./MyPersonalProgress/MyPersonalProgress";
import MyActivePractice from "./MyActivePractice/MyActivePractice";
import MyTeamProgress from "./MyTeamProgress/MyTeamProgress";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useMyQuizResultQuery from "../../ChoosePathwayModule/Hooks/useMyQuizResultQuery";
import useQuizDetailsQuery from "../../ChoosePathwayModule/Hooks/useQuizDetailsQuery";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import DashboardPdf from "./DashboardPdf/DashboardPdf";
import usePersonalPathwayQuery from "../../PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "../../ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { enrichProgressWithPractice } from "@/src/lib/Helpers";
import { useGetMppMessagesQuery } from "../../WelcomeModule/Hooks/useGetMppMessagesQuery";
import useAuthValue from "../../AuthModule/Hooks/useAuthValue";
import LogoutModal from "../../WelcomeModule/Components/LogoutModal/LogoutModal";
import useFindUserQuery from "../../TeamSettingModule/Hooks/useFindUserQuery";

type Principle = {
  key: string;
  score: number;
  situation: number;
  pillar: string;
};

type PillarItem = {
  top: Principle;
  weak: Principle;
};

type PillarDataType = Record<string, PillarItem>;

function MyDashboard() {
  const [resultData, setResultData] = useState<{
    pillarData: PillarDataType;
    pillarAvg: Record<string, number>;
  } | null>(null);
  const [progressList, setProgressList] = useState<any>([]);
  const [selected, setSelected] = useState("");

  const [isDownloading, setIsDownloading] = useState(false);
  const [topStrengthDetails, setTopStrengthDetails] = useState<any[]>([]);
  const [weakStrengthDetails, setWeakStrengthDetails] = useState<any[]>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [showPdf, setShowPdf] = useState(false);

  const router = useRouter();
  const { user } = useAuthValue();
  const { data, isLoading } = useMyQuizResultQuery();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [enter, setEnter] = useState(false);

  const { data: findUserData } = useFindUserQuery(user?.sub, {
    enabled: user?.user_type === 2,
  });
  const findUserProfile = findUserData?.data?.profile;

  const joinedYear = findUserProfile?.created
    ? new Date(findUserProfile.created).getFullYear()
    : new Date().getFullYear();

  const yearOptions = Array.from({ length: 11 }, (_, index) =>
    String(joinedYear + index),
  );

  useEffect(() => {
    setEnter(true);
  }, []);

  useEffect(() => {
    if (!showPdf) return;

    const generatePDF = async () => {
      try {
        await new Promise((r) => setTimeout(r, 500));

        if (!pdfRef.current) {
          console.error("PDF element still not found");
          return;
        }

        const dataUrl = await toPng(pdfRef.current, {
          cacheBust: true,
          pixelRatio: 2,
        });

        const pdf = new jsPDF("p", "mm", "a4");

        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();

        while (heightLeft > 0) {
          position = heightLeft - pdfHeight;
          pdf.addPage();
          pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
          heightLeft -= pdf.internal.pageSize.getHeight();
        }

        pdf.save("MyDashboard.pdf");
      } catch (err) {
        console.error(err);
      } finally {
        setShowPdf(false);
        setIsDownloading(false);
      }
    };

    generatePDF();
  }, [showPdf]);

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    setShowPdf(true);
  };

  const sortFn = (a: any, b: any, asc = false) => {
    if (a.score !== b.score) {
      return asc ? a.score - b.score : b.score - a.score;
    }
    if (a.situation !== b.situation) {
      return a.situation - b.situation;
    }
    return a.key.localeCompare(b.key);
  };

  const processQuizResults = (results: any) => {
    const wS = 0.5;
    const wZ = 0.5;

    const pillarData: any = {};
    const pillarAvg: any = {};

    Object.keys(results).forEach((pillarKey) => {
      const principles = results[pillarKey];
      const arr: any[] = [];

      Object.keys(principles).forEach((pKey) => {
        const item = principles[pKey];
        const score = wS * item.strength + wZ * item.situation;
        arr.push({
          key: pKey,
          score,
          situation: item.situation,
          pillar: pillarKey,
        });
      });

      const sortedDesc = [...arr].sort((a, b) => sortFn(a, b, false));
      const sortedAsc = [...arr].sort((a, b) => sortFn(a, b, true));

      pillarData[pillarKey] = { top: sortedDesc[0], weak: sortedAsc[0] };
      pillarAvg[pillarKey] =
        arr.reduce((sum, p) => sum + p.score, 0) / arr.length;
    });

    return { pillarData, pillarAvg };
  };

  const getTopStrengthDetails = (topStrengths: any[], quizData: any) => {
    if (!quizData?.pillars) return [];
    const result: any[] = [];
    topStrengths.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");
      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];
        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.why_this_strength,
          });
        }
      });
    });
    return result;
  };

  const { data: quizDetails } = useQuizDetailsQuery();

  const getWeakStrengthDetails = (growthTargets: any[], quizData: any) => {
    if (!quizData?.pillars) return [];
    const result: any[] = [];
    growthTargets.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");
      const principle_number = parseInt(item.key.split("_")[1], 10);
      const pillar_number = parseInt(item.pillar.split("_")[1], 10);
      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];
        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.description,
            principle_number,
            pillar_number,
          });
        }
      });
    });
    return result;
  };

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const topStrengths = Object.values(resultData.pillarData).map(
        (p: any) => p.top,
      );
      const details = getTopStrengthDetails(topStrengths, quizDetails.data);
      setTopStrengthDetails(details);
    }
  }, [resultData, quizDetails]);

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const weakPrinciples = Object.values(resultData.pillarData).map(
        (p: any) => p.weak,
      );
      const weakDetails = getWeakStrengthDetails(
        weakPrinciples,
        quizDetails.data,
      );
      setWeakStrengthDetails(weakDetails);
    }
  }, [resultData, quizDetails]);

  const teamProgressList = [
    {
      id: 1,
      title: "Ritual 1",
      status: "Completed",
      date: "15/01/2026",
      icon: images.perspectiveImg,
    },
    {
      id: 2,
      title: "Ritual 2",
      status: "Completed",
      date: "29/01/2026",
      icon: images.wellbeingSmallPoly,
    },
    {
      id: 3,
      title: "Ritual 3",
      status: "Completed",
      date: "25/02/2026",
      icon: images.clarityImg,
    },
    {
      id: 4,
      title: "Ritual 4",
      status: "Completed",
      date: "19/03/2026",
      icon: images.curiousImg,
    },
    { id: 5, title: "Ritual 5", status: "In Progress", icon: images.listenImg },
  ];

  const quizRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();

  const getLatestQuizByYear = (quizList: any[], selectedYear: string) => {
    if (!Array.isArray(quizList)) return null;
    const filtered = quizList.filter((item) => {
      const year = new Date(item.created_at).getFullYear().toString();
      return year === selectedYear;
    });
    if (filtered.length === 0) return null;
    const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp);
    return sorted[0];
  };

  const currentYear = new Date().getFullYear().toString();

  const activeYear = selected || currentYear;

  const latestQuiz = getLatestQuizByYear(data?.data?.quiz || [], activeYear);

  const formattedDate = latestQuiz ? formatDate(latestQuiz.created_at) : "";

  useEffect(() => {
    if (latestQuiz?.results) {
      const processed = processQuizResults(latestQuiz.results);
      setResultData(processed);
    } else {
      setResultData(null);
    }
  }, [latestQuiz]);

  const generateStructuredProgressList = (mppData: any[]) => {
    if (!Array.isArray(mppData)) return [];
    return mppData
      .filter((item: any) => item.active || item.completed)
      .map((item: any) => {
        const pathwayKey = Object.keys(item).find(
          (key) =>
            ![
              "created",
              "uuid",
              "active",
              "completed",
              "pathway_id",
              "id",
            ].includes(key),
        );
        if (!pathwayKey) return null;
        return {
          [pathwayKey]: item[pathwayKey],
          created: item.created,
          uuid: item.uuid,
          active: item.active,
          ...(item.completed && { completed: item.completed }),
        };
      })
      .filter(Boolean);
  };

  const getPathwayMap = (chooseData: any[]) => {
    const map: Record<number, string> = {};
    chooseData?.forEach((item: any) => {
      item?.pillars?.forEach((pillar: any) => {
        pillar?.principles?.forEach((principle: any) => {
          map[principle.pathway_number] = principle.pathway_title;
        });
      });
    });
    return map;
  };

  const transformProgressList = (progressList: any[], pathwayMap: any) => {
    return progressList.map((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) => !["created", "uuid", "active", "completed"].includes(key),
      );
      if (!dynamicKey) return item;
      const pathwayNumber = Number(dynamicKey);
      const pathwayName = pathwayMap[pathwayNumber] || dynamicKey;
      return {
        [pathwayName]: item[dynamicKey],
        created: item.created,
        uuid: item.uuid,
        active: item.active,
        ...(item.completed && { completed: item.completed }),
      };
    });
  };

  useEffect(() => {
    if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
      const structuredList = generateStructuredProgressList(
        getListMppData.data.pathways,
      );
      const pathwayMap = getPathwayMap(chooseMyselfData.data);
      const updatedList = transformProgressList(structuredList, pathwayMap);
      const sortedList = updatedList.sort(
        (a: any, b: any) =>
          new Date(b.created).getTime() - new Date(a.created).getTime(),
      );
      const latest20 = sortedList.slice(0, 20);
      setProgressList(latest20);
    }
  }, [getListMppData, chooseMyselfData]);

  const getSelectedMicroActions = (pathways: any[]) => {
    if (!Array.isArray(pathways)) return [];
    let selected: string[] = [];
    pathways.forEach((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) =>
          ![
            "created",
            "uuid",
            "active",
            "completed",
            "pathway_id",
            "id",
          ].includes(key),
      );
      if (!dynamicKey) return;
      const m3 = item?.[dynamicKey]?.m3;
      if (m3?.pin_to_dash?.length) {
        selected.push(...m3.pin_to_dash);
      }
    });
    return [...new Set(selected)];
  };

  useEffect(() => {
    if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
      const selectedKeys = getSelectedMicroActions(
        getListMppData.data.pathways,
      );
      const list: any[] = [];
      chooseMyselfData.data.forEach((item: any) => {
        item?.pillars?.forEach((pillar: any) => {
          pillar?.principles?.forEach((principle: any) => {
            principle?.micro_actions?.forEach((action: any, index: number) => {
              const key = `ma${index + 1}`;
              list.push({
                id: key,
                title: action.title,
                description: action.description,
                pathway: principle.pathway_title,
                checked: selectedKeys.includes(key),
              });
            });
          });
        });
      });
      setPracticeList(list);
    }
  }, [getListMppData, chooseMyselfData]);

  const activePracticeListForPdf = practiceList.filter((item) => item.checked);
  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );
  const { data: randomMessage } = useGetMppMessagesQuery();

  return (
    <>
      <div
        className={`min-h-screen bg-[#4BA6A6] relative font-sans ${styles.page}
          ${styles.enterRight}
          ${enter ? styles.enterActive : ""}`}
      >
        <div className={styles.bgGreenPoly}>
          <Image
            src={images.myDashGreenPoly}
            alt=""
            fill
            sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 330px"
            className={styles.bgPolyImage}
            style={{ objectPosition: "top left" }}
            priority
          />
        </div>
        <div className={styles.bgBluePoly}>
          <Image
            src={images.myDashBluePoly}
            alt=""
            fill
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 280px, 530px"
            className={styles.bgPolyImage}
            style={{ objectPosition: "top right" }}
            priority
          />
        </div>

        <div
          className={`px-4 sm:px-6 md:px-10 py-6 md:py-8 ${styles.contentWrapper}`}
        >
          {/* Header */}
          <UserProfileHeader
            greetingColor="#0F4F58"
            nameColor="#0F4F58"
            userInfo={user}
          />

          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px]"
            fontColor="#0F4F58"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            bottom="3px"
            rightImgBottom="3px"
            rotate="-35deg"
          />

          {/* Title */}
          <h1 className="text-center text-[24px] sm:text-[30px] md:text-[34px] lg:text-[45px] font-semibold text-[#254C4C] mt-8 md:mt-14 font-[RocaTwo]">
            My Dashboard
          </h1>

          {/* Description + Download */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1000px] mx-auto mt-6 md:mt-10 gap-4">
            <p className="text-[#0F4F58] text-[13px] sm:text-[14px] md:text-[17px] lg:text-[20px] leading-5 md:leading-6 lg:leading-7 max-w-full md:max-w-[800px]">
              This is your hub — a snapshot of your journey so far. Revisit your
              check-in, see what you're building, track what you're practicing,
              and notice how it's showing up in your team.
            </p>
          </div>

          {/* Period Selector */}
          <div className="flex justify-center sm:justify-end w-full mx-auto mt-6 md:mt-10">
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 relative">
              <label className="text-[14px] md:text-[18px] lg:text-[22px] text-[#0F4F58] font-[RocaTwo]">
                Select Period
              </label>
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="
                    appearance-none
                    bg-[#EDEDED]
                    text-[#254C4C]
                    text-[13px] md:text-[16px] lg:text-[18px]
                    px-4 md:px-6 pr-12 md:pr-14
                    h-[40px] md:h-[48px]
                    rounded-full
                    outline-none
                    cursor-pointer
                  "
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-0 h-full w-[40px] md:w-[50px] flex items-center justify-center pointer-events-none">
                  <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-r-[8px] md:border-r-[10px] border-t-[10px] md:border-t-[12px] border-l-transparent border-r-transparent border-t-[#254C4C]" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Cards — 2x2 grid on mobile/tablet, 4-col on desktop */}
          <div className={`${styles.cardGrid} mt-10 md:mt-[90px]`}>
            <div
              className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
              onClick={() => scrollToSection(quizRef)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={images.quizPoly}
                  alt="home icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Check-In Space</h3>
              </div>
            </div>

            <div
              className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
              onClick={() => scrollToSection(progressRef)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={images.personalPoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Personal Progress</h3>
              </div>
            </div>

            <div
              className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
              onClick={() => scrollToSection(practiceRef)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={images.activePoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Active Practice List</h3>
              </div>
            </div>

            <div
              className={`${styles.card} bg-[#F5F0EB] cursor-pointer`}
              onClick={() => scrollToSection(teamRef)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={images.progressPoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Team Progress</h3>
              </div>
            </div>
          </div>

          {/* Download Row */}
          <div className="flex flex-col sm:flex-row justify-end w-full mx-auto mt-6 md:mt-10 gap-4 sm:gap-10 items-center sm:items-center">
            <div className="text-[13px] md:text-[15px] lg:text-[18px] text-[#0F4F58] font-bold text-center sm:text-right max-w-full sm:max-w-[400px] md:max-w-none">
              Download your journey and use it in your next performance or
              development review
            </div>
            <div className="flex-shrink-0">
              <button
                className="flex flex-col items-center gap-2"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                <Image src={images.downloadImg} alt="download" />
                <span className="text-xs sm:text-sm text-[#3E5F5F]">
                  {isDownloading ? "Preparing PDF..." : "Download in PDF"}
                </span>
              </button>
            </div>
          </div>

          {/* Sections */}
          <div className="w-full max-w-[1200px] mx-auto mt-10 md:mt-14">
            <div className="mx-auto mt-10 md:mt-14" ref={quizRef}>
              <MyQuizResults
                topStrengthDetails={topStrengthDetails}
                formattedDate={formattedDate}
                resultData={resultData}
                weakStrengthDetails={weakStrengthDetails}
              />
            </div>

            <div className="mx-auto mt-10 md:mt-14" ref={progressRef}>
              <MyPersonalProgress progressList={progressList} />
            </div>

            <div className="mx-auto mt-10 md:mt-14" ref={practiceRef}>
              <MyActivePractice practiceList={practiceList} />
            </div>

            <div className="mx-auto mt-10 md:mt-14" ref={teamRef}>
              <MyTeamProgress teamProgressList={teamProgressList} />
            </div>
          </div>

          {/* Bottom Action Row */}
          {/* Bottom Action Row */}
          <div className="flex flex-col sm:flex-row justify-between mt-[40px] md:mt-[50px] gap-6 sm:gap-0 items-center sm:items-start">
            {/* Download PDF */}
            <div className="flex justify-center sm:justify-start">
              <button
                className="flex flex-col items-center gap-2"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                <Image src={images.downloadImg} alt="download" />
                <span className="text-xs sm:text-sm text-[#3E5F5F]">
                  {isDownloading ? "Preparing PDF..." : "Download in PDF"}
                </span>
              </button>
            </div>

            {/* See all Ritual Reflections Button */}
            <div className="flex justify-center sm:justify-end">
              <div
                className="cursor-pointer"
                onClick={() => router.push("/reflection-walls")}
              >
                <PolygonButton
                  width="137px"
                  height="129px"
                  bgColor="#f8e1b8"
                  radius={14}
                  clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                  decorationImg={{
                    src: images.rightArrow,
                    width: 48,
                    height: 48,
                  }}
                  decorationPosition={{
                    className: "-right-[20px] -top-[28px]",
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-[RocaTwo] font-bold leading-[24px] md:leading-[28px] lg:leading-[32px]">
                      See all Ritual Reflections
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
          {/* Success Message */}
          <div className="mt-10 md:mt-14 mx-auto w-full max-w-[450px] sm:max-w-none">
            <SuccessMessage
              text="Performance shifts when we practice, reflect, and connect — and you're doing that here"
              fontSize="text-[14px] md:text-[18px] lg:text-[23px]"
              leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
              rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
              fontColor="#0F4F58"
              top="-28px"
              rightImgTop="-35px"
              rotate="-35deg"
              maxWidth="100%"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between mt-[80px] md:mt-[160px] gap-8 sm:gap-0">
            {/* Invite Section */}
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-0">
              <div className="max-w-[200px] text-[#0F4F58] font-[Aptos] text-[13px] md:text-[15px] lg:text-[17px]">
                Love what Hi Humaniser!™ brings? Share it with a friend who'd
                enjoy it too.
              </div>
              <div className="ml-0 sm:ml-[26px]">
                <PolygonButton
                  width="85px"
                  height="95px"
                  bgColor="#F7C3BE"
                  radius={14}
                  clipPath={`polygon(0% 0%, 100% 18px,100% calc(100% - 14px),0% 100%)`}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[14px] md:text-[16px] lg:text-[18px] font-[RocaTwo] font-bold leading-[18px] md:leading-[20px] lg:leading-[21px]">
                      Invite a Humaniser
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col items-center gap-[10px] md:gap-[14px]">
              <CommonButtons
                label="Change my Pathway"
                bgColor="#F5F0EB"
                textClassName="text-[13px] sm:text-[15px] lg:text-[18px]"
                onClick={() => router.push("/choose-myself")}
              />
              <CommonButtons
                label="Return to
My Personal Pathway"
                bgColor="#F5F0EB"
                textClassName="text-[13px] sm:text-[15px] lg:text-[18px]"
                onClick={() => router.push("/personal-pathway")}
              />
              <CommonButtons
                label="Return to My Team
Journey"
                bgColor="#F5F0EB"
                textClassName="text-[13px] sm:text-[15px] lg:text-[18px]"
                onClick={() => router.push("/team-journey")}
              />
            </div>
          </div>
        </div>
      </div>

      {showPdf && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            opacity: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <div ref={pdfRef}>
            <DashboardPdf
              resultData={resultData}
              topStrengthDetails={topStrengthDetails}
              weakStrengthDetails={weakStrengthDetails}
              activePracticeListForPdf={activePracticeListForPdf}
              enrichedProgressList={enrichedProgressList}
              randomMessage={randomMessage}
            />
          </div>
        </div>
      )}
      <LogoutModal />
    </>
  );
}

export default MyDashboard;
