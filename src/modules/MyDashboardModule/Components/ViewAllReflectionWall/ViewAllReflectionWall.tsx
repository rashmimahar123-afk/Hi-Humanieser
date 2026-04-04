import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";
import {
  createPatternRows,
  enrichProgressWithPractice,
} from "@/src/lib/Helpers";
import ViewAllReflectionCard from "../ViewAllReflectionCard/ViewAllReflectionCard";
import { useEffect, useMemo, useRef, useState } from "react";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const PdfSafeImage = ({ src, alt, width, height, className }: any) => {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );
};

function ReflectionWalls() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [progressList, setProgressList] = useState<any>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();
  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { user } = useAuthValue();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const generateStructuredProgressList = (mppData: any[]) => {
    if (!Array.isArray(mppData)) return [];

    return mppData
      .filter((item: any) => item.active || item.completed) // only active/completed
      .map((item: any) => {
        // 🔍 find dynamic key like "The Mindset We Bring"
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
          [pathwayKey]: item[pathwayKey], // 👈 main structured data
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
      // -------- Progress List --------
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

      // -------- Practice List --------
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
  const { data: randomMessage } = useGetMppMessagesQuery();

  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );
  const getSharedReflectionsFromEnriched = (data: any[]) => {
    if (!Array.isArray(data)) return [];

    const result: any[] = [];

    data.forEach((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) => !["created", "uuid", "active", "completed"].includes(key),
      );

      if (!dynamicKey) return;

      const pathwayData = item[dynamicKey];

      // -------- M2 --------
      const m2 = pathwayData?.m2;

      if (m2) {
        Object.values(m2).forEach((actions: any) => {
          if (Array.isArray(actions)) {
            actions.forEach((action) => {
              if (action?.share && action?.reflection) {
                result.push({
                  text: action.reflection,
                  created: item.created,
                });
              }
            });
          }
        });
      }

      // -------- M3 --------
      const m3 = pathwayData?.m3;

      if (m3?.reflection?.share === true && m3?.reflection?.reflection) {
        result.push({
          text: m3.reflection.reflection,
          created: item.created,
        });
      }
    });

    return result;
  };
  const reflectionList = useMemo(() => {
    if (!enrichedProgressList?.length) return [];

    const extracted = getSharedReflectionsFromEnriched(enrichedProgressList);

    return extracted.sort((a, b) => b.created - a.created); // ✅ latest 5 only
  }, [enrichedProgressList]);

  const filterRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getTimeAgo = (timestamp: number) => {
    if (!timestamp) return "";

    const now = Date.now();
    const createdTime = timestamp * 1000; // ✅ seconds → ms

    const diffMs = now - createdTime;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (seconds < 60) return `${seconds} sec ago`;
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`; // ✅ 24 hr ke andar
    if (days === 1) return `1 day ago`;
    if (days < 7) return `${days} days ago`;

    // optional: weeks/months
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week ago`;

    const months = Math.floor(days / 30);
    return `${months} month ago`;
  };
  const filteredReflections = useMemo(() => {
    if (!reflectionList.length) return [];

    const now = Date.now();

    return reflectionList.filter((item) => {
      const createdTime = item.created * 1000;
      const diffDays = (now - createdTime) / (1000 * 60 * 60 * 24);

      if (selectedFilter === "7days") return diffDays <= 7;
      if (selectedFilter === "30days") return diffDays <= 30;

      return true; // default = all
    });
  }, [reflectionList, selectedFilter]);
  const getFilterLabel = () => {
    if (selectedFilter === "7days") return "Last 7 days";
    if (selectedFilter === "30days") return "Last 30 days";
    return "All reflections";
  };

  const waitForImages = async (element: HTMLElement) => {
    const imgs = Array.from(element.querySelectorAll("img"));

    // Force crossOrigin on all images before capture
    imgs.forEach((img) => {
      img.crossOrigin = "anonymous";
      // Force reload if not loaded
      if (!img.complete || img.naturalHeight === 0) {
        const src = img.src;
        img.src = "";
        img.src = src;
      }
    });

    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalHeight !== 0) {
              resolve(true);
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          }),
      ),
    );

    // Extra wait for paint
    await new Promise((r) => requestAnimationFrame(r));
  };

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      if (!pdfRef.current) return;

      // Wait for re-render with isDownloading=true (switches to <img> tags)
      await new Promise((r) => setTimeout(r, 300));

      await waitForImages(pdfRef.current);

      // Extra settle time
      await new Promise((r) => setTimeout(r, 300));

      const dataUrl = await toPng(pdfRef.current, {
        cacheBust: true,
        includeQueryParams: true,
        width: pdfRef.current.scrollWidth,
        height: pdfRef.current.scrollHeight,
        pixelRatio: 2, // ✅ better quality
        filter: (node) => {
          // Skip Next.js noscript tags that duplicate images
          if (node.tagName === "NOSCRIPT") return false;
          return true;
        },
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("ReflectionWalls.pdf");
    } catch (err) {
      console.error("PDF Error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  console.log("filteredReflectionsfilteredReflections", filteredReflections);
  return (
    <div className="min-h-screen bg-[#F5F0EB] " ref={pdfRef}>
      <div className="relative">
        <PdfSafeImage
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
          priority
        />
      </div>
      <div className="px-10 py-8">
        {/* Header */}
        <UserProfileHeader
          greetingColor="#0F4F58"
          nameColor="#0F4F58"
          userInfo={user}
        />
        {/* Center Heading */}
        <div className="text-center mt-10">
          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            bottom="3px"
            rightImgBottom="-3px"
            fontColor="#0F4F58"
            rotate="-35deg"
          />
          <h2 className="text-[52px] font-[RocaTwo] font-bold  text-[#4BA6A6] mt-[30px]">
            Reflection Walls
          </h2>
        </div>

        {/* Description + Filters */}

        {/* Left text */}
        <div className="mt-10">
          <p className=" text-[22px] text-[#276b6b] leading-[23px] font-[Roboto] ">
            This wall brings together reflections over time — offering a wider
            view of what’s emerging across the team.
          </p>
        </div>

        {/* Right select */}
        {/* Filter Section */}
        <div className="mt-20 flex items-start justify-end px-[36px]">
          {/* Left: Filter text */}

          {/* Right: Button + Download */}
          <div className="flex items-center gap-10">
            {/* <div className="text-[#0F4F58] font-[Roboto]">
              <p className="text-[18px] font-[500] mb-2">Filter by</p>
              <ul className="list-disc ml-6 text-[18px] leading-[28px]">
                <li>All reflections</li>
                <li>Last 7 days</li>
                <li>Last 30 days</li>
                <li>Custom range</li>
              </ul>
            </div> */}
            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              {" "}
              <button
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="bg-[#86C9C9] text-[#0F4F58] text-[18px] font-[Roboto] px-10 h-[44px] rounded-full flex items-center gap-3"
              >
                {getFilterLabel()}
                <PdfSafeImage
                  src={images.dropdownImg}
                  alt="dropdown"
                  width={20}
                  priority
                />
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-[220px] bg-white rounded-xl shadow-lg p-4 z-50">
                  <ul className="text-[#0F4F58] text-[16px] font-[Roboto] space-y-2">
                    <li
                      className="cursor-pointer hover:text-[#4BA6A6]"
                      onClick={() => {
                        setSelectedFilter("all");
                        setIsFilterOpen(false);
                      }}
                    >
                      All reflections
                    </li>

                    <li
                      className="cursor-pointer hover:text-[#4BA6A6]"
                      onClick={() => {
                        setSelectedFilter("7days");
                        setIsFilterOpen(false);
                      }}
                    >
                      Last 7 days
                    </li>

                    <li
                      className="cursor-pointer hover:text-[#4BA6A6]"
                      onClick={() => {
                        setSelectedFilter("30days");
                        setIsFilterOpen(false);
                      }}
                    >
                      Last 30 days
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Download PDF */}

            <div className="flex justify-end">
              <button
                className="flex flex-col items-center gap-2"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                <PdfSafeImage
                  src={images.downloadImg}
                  alt="download"
                  priority
                />

                <span className="text-sm text-[#3E5F5F]">
                  {" "}
                  {isDownloading ? "Preparing PDF..." : "Download in PDF"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="bg-[#F8E1B8] rounded-[32px] mt-10 px-8 py-4 relative ">
          <div className="mt-[20px] flex flex-col gap-6">
            {filteredReflections.length === 0 ? (
              <div className="text-center text-[#0F4F58] text-[18px] font-[Roboto] py-10">
                No reflections found
              </div>
            ) : (
              filteredReflections.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#CDE3CC] rounded-[16px] px-[10px] py-[20px] flex flex-col justify-between"
                >
                  <p className="text-[18px] leading-[20px] text-[#0F4F58] text-center font-[Roboto] font-[400] mb-[40px]">
                    {item.text}
                  </p>

                  <div className="flex items-center text-[15px] text-[#0F4F58] font-[Aptos] font-[400]">
                    <span className="flex items-center ">
                      ⏱ {getTimeAgo(item.created)}
                    </span>
                    <span className="flex items-center ml-[29px]">
                      {/* ❤️ {item.likes} */}
                      ❤️ you and 7 others felt this
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReflectionWalls;
