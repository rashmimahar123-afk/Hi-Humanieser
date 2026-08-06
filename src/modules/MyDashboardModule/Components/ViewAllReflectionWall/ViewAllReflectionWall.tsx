"use client";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import { enrichProgressWithPractice, getTimeAgo } from "@/src/lib/Helpers";
import { useEffect, useMemo, useRef, useState } from "react";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useToggleReflectionMutation } from "../../Hooks/useToggleReflectionMutation";
import useGetReflectionWallsQuery from "../../Hooks/useGetReflectionWallsQuery";
import { useSearchParams } from "next/navigation";
import { GET_REFLECTIONS_DATA } from "../../Types/ResponseTypes";
import { queryClient } from "@/src/lib/ReactQueryConfig";

function ViewAllReflectionWall() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [progressList, setProgressList] = useState<any>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();
  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const { mutate: toggleLikeMutate, isPending } = useToggleReflectionMutation();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { user } = useAuthValue();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const searchParams = useSearchParams();
  const teamId = searchParams.get("teamId");

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
      if (m3?.pin_to_dash?.length) selected.push(...m3.pin_to_dash);
    });
    return [...new Set(selected)];
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

  const PdfSafeImage = ({ src, alt, width, height, className }: any) => {
    const resolvedSrc = typeof src === "string" ? src : src?.src;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={alt || ""}
        width={width}
        height={height}
        className={className}
        crossOrigin="anonymous"
      />
    );
  };

  // Heart drawing helper — jsPDF has no image/icon support by default,
  // so we draw the heart using basic shapes (2 circles + 1 triangle)
  const drawHeart = (
    pdf: jsPDF,
    x: number,
    y: number,
    size: number,
    filled: boolean,
  ) => {
    const s = size;
    // Points forming a simple heart silhouette (polygon approximation)
    const points: [number, number][] = [
      [x + s * 0.5, y + s * 0.95], // bottom tip
      [x + s * 0.15, y + s * 0.55],
      [x, y + s * 0.3],
      [x + s * 0.05, y + s * 0.05],
      [x + s * 0.25, y],
      [x + s * 0.5, y + s * 0.2],
      [x + s * 0.75, y],
      [x + s * 0.95, y + s * 0.05],
      [x + s, y + s * 0.3],
      [x + s * 0.85, y + s * 0.55],
      [x + s * 0.5, y + s * 0.95], // back to tip
    ];

    if (filled) {
      pdf.setFillColor(239, 68, 68);
    } else {
      pdf.setDrawColor(15, 79, 88);
      pdf.setLineWidth(0.3);
    }

    // Build path using moveTo-style lines
    const first = points[0];
    const rest = points.slice(1).map((p, i) => {
      const prev = points[i];
      return [p[0] - prev[0], p[1] - prev[1]];
    });

    pdf.lines(
      rest as any,
      first[0],
      first[1],
      [1, 1],
      filled ? "F" : "S",
      true,
    );
  };

  // Small clock icon — drawn manually since emoji (⏱) breaks in jsPDF's default font
  const drawClock = (pdf: jsPDF, x: number, y: number, size: number) => {
    const r = size / 2;
    const cx = x + r;
    const cy = y + r;

    pdf.setDrawColor(15, 79, 88); // teal #0F4F58
    pdf.setLineWidth(0.25);
    pdf.circle(cx, cy, r, "S");

    // clock hands
    pdf.line(cx, cy, cx, cy - r * 0.6); // vertical hand
    pdf.line(cx, cy, cx + r * 0.4, cy); // horizontal hand
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const cardWidth = pageWidth - margin * 2;
    let y = 15;

    const addPageBackground = () => {
      pdf.setFillColor(245, 240, 235);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");
    };
    addPageBackground();

    pdf.setTextColor(75, 166, 166);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.text("Reflection Walls", pageWidth / 2, y, { align: "center" });
    y += 8;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(39, 107, 107);
    const desc = pdf.splitTextToSize(
      "This wall brings together reflections over time — offering a wider view of what's emerging across the team.",
      cardWidth,
    );
    pdf.text(desc, margin, y);
    y += desc.length * 5 + 10;

    reflections.forEach((item: any) => {
      const text = item.reflection || "";
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      const lines = pdf.splitTextToSize(text, cardWidth - 12);

      const isLikedByMe = likedIds.has(item.id);
      const timeText = getTimeAgo(item.created || item.created_at);
      const likeText = getLikeText(item.like_count, isLikedByMe);

      const cardHeight = lines.length * 6 + 20;

      if (y + cardHeight > pageHeight - 15) {
        pdf.addPage();
        addPageBackground();
        y = 15;
      }

      // Card background
      pdf.setFillColor(205, 227, 204);
      pdf.roundedRect(margin, y, cardWidth, cardHeight, 4, 4, "F");

      // Reflection text
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.setTextColor(15, 79, 88);
      pdf.text(lines, margin + 6, y + 8);

      // ---- Meta row: clock icon + time + heart + like text ----
      const metaY = y + cardHeight - 6;
      const clockSize = 3.2;
      let cursorX = margin + 6;

      // clock icon
      drawClock(pdf, cursorX, metaY - clockSize + 0.8, clockSize);
      cursorX += clockSize + 2;

      // time text
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(15, 79, 88);
      pdf.text(timeText, cursorX, metaY);
      cursorX += pdf.getTextWidth(timeText) + 8;

      // heart icon
      const heartSize = 4;
      drawHeart(
        pdf,
        cursorX,
        metaY - heartSize + 0.8,
        heartSize,
        item.like_count > 0,
      );
      cursorX += heartSize + 3;

      // like text
      if (likeText) {
        pdf.text(likeText, cursorX, metaY);
      }

      y += cardHeight + 6;
    });

    pdf.save("ReflectionWalls.pdf");
  };

  // const enrichedProgressList = enrichProgressWithPractice(
  //   progressList,
  //   practiceList,
  // );

  // const getSharedReflectionsFromEnriched = (data: any[]) => {
  //   if (!Array.isArray(data)) return [];
  //   const result: any[] = [];
  //   data.forEach((item) => {
  //     const dynamicKey = Object.keys(item).find(
  //       (key) => !["created", "uuid", "active", "completed"].includes(key),
  //     );
  //     if (!dynamicKey) return;
  //     const pathwayData = item[dynamicKey];
  //     const m2 = pathwayData?.m2;
  //     if (m2) {
  //       Object.values(m2).forEach((actions: any) => {
  //         if (Array.isArray(actions)) {
  //           actions.forEach((action) => {
  //             if (action?.share && action?.reflection) {
  //               result.push({
  //                 id: action.id,
  //                 text: action.reflection,
  //                 created: item.created,
  //               });
  //             }
  //           });
  //         }
  //       });
  //     }
  //     const m3 = pathwayData?.m3;
  //     if (m3?.reflection?.share === true && m3?.reflection?.reflection) {
  //       result.push({
  //         id: m3.reflection.id,
  //         text: m3.reflection.reflection,
  //         created: item.created,
  //       });
  //     }
  //   });
  //   return result;
  // };

  // const reflectionList = useMemo(() => {
  //   if (!enrichedProgressList?.length) return [];
  //   const extracted = getSharedReflectionsFromEnriched(enrichedProgressList);
  //   return extracted.sort((a, b) => b.created - a.created);
  // }, [enrichedProgressList]);
  const effectiveTeamId = useMemo(() => {
    if (!user) return undefined;

    if (user.user_type === 3) {
      return teamId ? teamId : user.team_id;
    }

    return user.team_id;
  }, [user, teamId]);

  const { data: reflectionApiData } =
    useGetReflectionWallsQuery(effectiveTeamId);

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

      // m2 reflections
      const m2 = pathwayData?.m2;

      if (m2) {
        Object.values(m2).forEach((actions: any) => {
          if (Array.isArray(actions)) {
            actions.forEach((action: any, index: number) => {
              if (action?.share && action?.reflection) {
                result.push({
                  id: item.uuid, // backend ko yehi chahiye
                  local_id: `${item.uuid}-${dynamicKey}-${index}`, // UI uniqueness ke liye
                  reflection: action.reflection,
                  created: item.created,
                  like_count: 0,
                });
              }
            });
          }
        });
      }

      // m3 reflections
      const m3 = pathwayData?.m3;

      if (m3?.reflection?.share && m3?.reflection?.reflection) {
        result.push({
          id: item.uuid,
          local_id: `${item.uuid}-m3`,
          reflection: m3.reflection.reflection,
          created: item.created,
          like_count: 0,
        });
      }
    });

    return result;
  };

  // const reflections = reflectionApiData?.data?.reflections ?? [];
  // const reflections = useMemo(() => {
  //   const apiReflections = reflectionApiData?.data?.reflections ?? [];

  //   // User type 1 & 2 → local + API reflections
  //   if (user?.user_type === 1 || user?.user_type === 2) {
  //     const localReflections =
  //       getSharedReflectionsFromEnriched(enrichedProgressList);

  //     return [...localReflections, ...apiReflections].sort(
  //       (a: any, b: any) =>
  //         Number(b.created || b.created_at) - Number(a.created || a.created_at),
  //     );
  //   }

  //   // User type 3 → only API reflections
  //   return apiReflections.sort(
  //     (a: any, b: any) =>
  //       new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  //   );
  // }, [user, enrichedProgressList, reflectionApiData]);

  const reflections = useMemo(() => {
    const apiReflections = reflectionApiData?.data?.reflections ?? [];

    let merged: any[] = [];

    if (user?.user_type === 1 || user?.user_type === 2) {
      const localReflections =
        getSharedReflectionsFromEnriched(enrichedProgressList);

      merged = [...localReflections, ...apiReflections];
    } else {
      merged = [...apiReflections];
    }

    // Sort latest first
    merged.sort(
      (a: any, b: any) =>
        new Date(b.created || b.created_at).getTime() -
        new Date(a.created || a.created_at).getTime(),
    );

    // Remove duplicates
    const seen = new Set();

    return merged.filter((item: any) => {
      const key = item.reflection?.trim().toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }, [user, enrichedProgressList, reflectionApiData]);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const filteredReflections = useMemo(() => {
  //   if (!reflectionList.length) return [];
  //   const now = Date.now();
  //   return reflectionList.filter((item) => {
  //     const createdTime = item.created * 1000;
  //     const diffDays = (now - createdTime) / (1000 * 60 * 60 * 24);
  //     if (selectedFilter === "7days") return diffDays <= 7;
  //     if (selectedFilter === "30days") return diffDays <= 30;
  //     return true;
  //   });
  // }, [reflectionList, selectedFilter]);
  const getFilterLabel = () => {
    if (selectedFilter === "7days") return "Last 7 days";
    if (selectedFilter === "30days") return "Last 30 days";
    return "All reflections";
  };

  const waitForImages = async (element: HTMLElement) => {
    const imgs = Array.from(element.querySelectorAll("img"));
    imgs.forEach((img) => {
      img.crossOrigin = "anonymous";
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
            if (img.complete && img.naturalHeight !== 0) resolve(true);
            else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          }),
      ),
    );
    await new Promise((r) => requestAnimationFrame(r));
  };

  // const handleDownloadPDF = async () => {
  //   try {
  //     setIsDownloading(true);
  //     if (!pdfRef.current) return;
  //     await new Promise((r) => setTimeout(r, 300));
  //     await waitForImages(pdfRef.current);
  //     await new Promise((r) => setTimeout(r, 300));
  //     const dataUrl = await toPng(pdfRef.current, {
  //       cacheBust: true,
  //       includeQueryParams: true,
  //       width: pdfRef.current.scrollWidth,
  //       height: pdfRef.current.scrollHeight,
  //       pixelRatio: 2,
  //       filter: (node) => {
  //         if (node.tagName === "NOSCRIPT") return false;
  //         return true;
  //       },
  //     });
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const imgProps = pdf.getImageProperties(dataUrl);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     let heightLeft = pdfHeight;
  //     let position = 0;
  //     const pageHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
  //     heightLeft -= pageHeight;
  //     while (heightLeft > 0) {
  //       position = heightLeft - pdfHeight;
  //       pdf.addPage();
  //       pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
  //       heightLeft -= pageHeight;
  //     }
  //     pdf.save("ReflectionWalls.pdf");
  //   } catch (err) {
  //     console.error("PDF Error:", err);
  //   } finally {
  //     setIsDownloading(false);
  //   }
  // };
  const handleLike = (reflectionId: string) => {
    setLikedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reflectionId)) {
        newSet.delete(reflectionId);
      } else {
        newSet.add(reflectionId);
      }
      return newSet;
    });

    toggleLikeMutate(
      { reflection_id: reflectionId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["getReflectionWallsQueryKey"],
          });
        },
      },
    );
  };

  const getLikeText = (likeCount: number, isLikedByMe: boolean) => {
    if (likeCount <= 0) return "";

    // sirf tumne like kiya hai
    if (likeCount === 1) {
      return "you felt this";
    }

    // tum + others
    if (isLikedByMe) {
      return `you and ${likeCount - 1} other${likeCount - 1 > 1 ? "s" : ""} felt this`;
    }

    // sirf others
    return `${likeCount} other${likeCount > 1 ? "s" : ""} felt this`;
  };
  return (
    <>
      <div className="min-h-screen bg-[#F5F0EB]" ref={pdfRef}>
        {/* Background polygon */}
        <div className="relative">
          <PdfSafeImage
            src={images.quizPolygon}
            alt="login-rectangle"
            width={630}
            height={630}
            className="absolute top-0 right-0 z-0 w-[140px] h-[140px] sm:w-[300px] sm:h-[300px] lg:w-[630px] lg:h-[630px]"
            priority
          />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
          {/* Header */}
          <UserProfileHeader
            greetingColor="#0F4F58"
            nameColor="#0F4F58"
            userInfo={user}
          />

          {/* Center Heading */}
          <div className="text-center mt-6 sm:mt-8 lg:mt-10">
            <SuccessMessage
              text={randomMessage || ""}
              fontSize="text-[13px] sm:text-[18px] lg:text-[23px]"
              leftImg={{ src: images.arrowImg, width: 30, height: 30 }}
              rightImg={{ src: images.leftArrowImg, width: 45, height: 45 }}
              bottom="3px"
              rightImgBottom="-3px"
              fontColor="#0F4F58"
              rotate="-35deg"
            />
            <h2 className="text-[30px] sm:text-[42px] lg:text-[52px] font-[RocaTwo] font-bold text-[#4BA6A6] mt-[16px] sm:mt-[24px] lg:mt-[30px]">
              Reflection Walls
            </h2>
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <p className="text-[14px] sm:text-[18px] lg:text-[22px] text-[#276b6b] leading-[20px] sm:leading-[22px] lg:leading-[23px] font-[Roboto]">
              This wall brings together reflections over time — offering a wider
              view of what's emerging across the team.
            </p>
          </div>

          {/* Filter + Download Row */}
          <div className="mt-8 sm:mt-12 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 sm:gap-6 lg:gap-10 px-0 sm:px-4 lg:px-[36px]">
            {/* Filter Button */}
            <div className="relative w-full sm:w-auto" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="bg-[#86C9C9] text-[#0F4F58] text-[14px] sm:text-[16px] lg:text-[18px] font-[Roboto] px-5 sm:px-8 lg:px-10 h-[38px] sm:h-[40px] lg:h-[44px] w-full sm:w-auto rounded-full flex items-center justify-between sm:justify-start gap-3"
              >
                {getFilterLabel()}
                <PdfSafeImage
                  src={images.dropdownImg}
                  alt="dropdown"
                  width={18}
                  priority
                />
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-[200px] sm:w-[220px] bg-white rounded-xl shadow-lg p-4 z-50">
                  <ul className="text-[#0F4F58] text-[14px] sm:text-[16px] font-[Roboto] space-y-2">
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
            <button
              className="flex flex-row sm:flex-col items-center gap-2 sm:gap-2"
              onClick={handleDownloadPDF}
              disabled={isDownloading}
            >
              <PdfSafeImage
                src={images.downloadImg}
                alt="download"
                width={32}
                height={32}
                priority
              />
              <span className="text-[12px] sm:text-[13px] lg:text-sm text-[#3E5F5F]">
                {isDownloading ? "Preparing PDF..." : "Download in PDF"}
              </span>
            </button>
          </div>

          {/* Cards Section */}
          <div className="bg-[#F8E1B8] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-5 lg:px-8 py-4 sm:py-5 lg:py-6 w-full">
            <div className="mt-[12px] sm:mt-[16px] lg:mt-[20px] flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {reflections.length === 0 ? (
                <div className="text-center text-[#0F4F58] text-[15px] sm:text-[16px] lg:text-[18px] font-[Roboto] py-8 lg:py-10">
                  No reflections found
                </div>
              ) : (
                reflections.map((item: GET_REFLECTIONS_DATA, index) => {
                  const isLikedByMe = likedIds.has(item.id);

                  const effectiveLikeCount = item.like_count;
                  return (
                    <div
                      key={index}
                      className="bg-[#CDE3CC] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] px-[10px] sm:px-[14px] lg:px-[10px] py-[14px] sm:py-[16px] lg:py-[20px] flex flex-col justify-between"
                    >
                      <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[20px] lg:leading-[20px] text-[#0F4F58] font-[Roboto] font-[400] mb-[24px] sm:mb-[32px] lg:mb-[40px]">
                        {item.reflection}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 text-[12px] sm:text-[13px] lg:text-[15px] text-[#0F4F58] font-[Aptos] font-[400]">
                        <span className="flex items-center">
                          ⏱{" "}
                          {getTimeAgo((item as any).created || item.created_at)}
                        </span>
                        <div className="flex items-center sm:ml-[29px] gap-2">
                          <motion.div
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleLike(item.id)}
                            className="cursor-pointer"
                          >
                            <motion.div
                              animate={{
                                scale: item.like_count > 0 ? [1, 1.4, 1] : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <Heart
                                size={18}
                                fill={
                                  item.like_count > 0
                                    ? "#ef4444"
                                    : "transparent"
                                }
                                color={
                                  item.like_count > 0 ? "#ef4444" : "#0F4F58"
                                }
                              />
                            </motion.div>
                          </motion.div>

                          <span>
                            {getLikeText(effectiveLikeCount, isLikedByMe)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default ViewAllReflectionWall;
