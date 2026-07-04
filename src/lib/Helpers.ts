/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosRequestConfig } from "axios";

import SnackbarHandler from "./SnackbarHandler";
//@ts-ignore
import uuid from "react-uuid";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  getAuthValue,
  resetAuthValue,
} from "../modules/AuthModule/Hooks/useAuthValue";
import { emitEvent } from "../components/Hooks/useEventEmitter";
import AuthService from "../modules/AuthModule/Services/AuthService";
import { GET_REFLECTIONS_DATA } from "../modules/MyDashboardModule/Types/ResponseTypes";

// const router = useRouter();

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      console.warn("Unauthorized - logging out");

      // Clear auth state
      AuthService.resetAuthValue();

      // Optional: clear storage
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");

      // Redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
// In your Helpers file
// Helpers.ts

export const fetcher = (config: AxiosRequestConfig) => {
  const { url, method = "GET", data, headers } = config;
  const { token, language } = getAuthValue();

  return axios.request({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Language": language,
      ...headers,
    },
    ...config,
  });
};

export const authFetcher = (config: AxiosRequestConfig) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const token = getCookie("token");
  // const token =
  //   "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYXNobWltYWhhckBnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwidXNlcl90eXBlIjozLCJjb21wYW55X25hbWUiOiJNb2IgVGVjaCIsIm9yZ19pZCI6Ijg0ODVhNjVmYWVlOWRjMzE4YWMxYjExNGVhZTgyN2RiNGI0NTI2YzUiLCJ0ZWFtX2lkIjoiNmEwYzk2OTk5MzUyYmI1ZDgxYjQxYTY0IiwiaWF0IjoxNzgwNTU4Mzg5LCJleHAiOjE3ODA1NjE5ODksImp0aSI6IjEwOTlhMTViLTlkYjAtNDliYS1hOWE5LTk0MzZhY2I4MTYyYiJ9.ejIwSCcGH3OxqTHZ0iMxkancRsIA2kdBpTHe1hOG0m0Ft-0suC_9JzJQ09jYE_omBMM7vBFtzTNahWKfa7hpsfvh0QjyVOF_ycB6gQ3yNqKzrNwBr27ysE95Y7QC0jBQ2yXQ4L_FO8CP406B3He9AmxjacLhf6OSM4O0cjnJAOxCYPIoWWfA3_kBL2ggLAHEJpv2CxHa3uIje6yLwbZT5hAbAYudZHRCb-pQaGvdr3okiQC0eD7bQ4hIC_7-SF8a_Oo4KYJWSdb2z3U_PMmisjv2TpGjUVEFR2GuOnkk2fJ_4AUY1Qcd8Kq31UybPzLVItvr-a7D95NkREBO9i09NA";
  return axios.request({
    baseURL,
    url: config.url,
    method: config.method ?? "GET",
    data: config.data,
    params: config.params,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    withCredentials: true,
    timeout: 10000,
  });
};
export const secureFetcher = (config: AxiosRequestConfig) => {
  const { language } = getAuthValue();
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  return axios.request({
    baseURL: baseURL,
    url: config.url,
    method: config.method ?? "GET",
    data: config.data,
    withCredentials: true,
    headers: {
      ...(language ? { "Accept-Language": language } : {}),
    },
  });
};

export const fetcherUrl = (config: AxiosRequestConfig) => {
  return axios.request({
    url: config.url,
    method: config.method ?? "GET",
    data: config.data,
    ...config,
  });
};

export const FILE_URL = "https://devserverspace.blr1.digitaloceanspaces.com/";

// Helper function to validate aspect ratio
export const validateAspectRatio = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const imageUrl = URL.createObjectURL(file);
    const img = new window.Image();
    img.src = imageUrl;

    img.onload = () => {
      const { width, height } = img;
      const aspectRatio = width / height;
      const targetAspectRatio = 9 / 16;

      // Allow for slight floating-point differences
      const isValid = Math.abs(aspectRatio - targetAspectRatio) <= 0.01;
      resolve(isValid);
    };
  });
};

export const onError = (error: any) => {
  if (error?.response) {
    if (error?.response?.status === 401) {
      resetAuthValue();
    }
    if (error?.response?.data?.message) {
      SnackbarHandler.errorToast(error?.response?.data?.message);
    }
  }
};

export const jsonToFormData = (data: any) => {
  const formData = new FormData();
  for (let key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      if (Array.isArray(data[key])) {
        data[key].forEach((element: any) => {
          formData.append(key, element);
        });
      } else {
        formData.append(key, data[key]);
      }
    }
  }
  return formData;
};

export const getBase64 = (
  file: File,
  cb: (base64: string | ArrayBuffer | null) => void,
) => {
  if (typeof window !== "undefined") {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {};
  }
};

export const getBase64ToFile = (
  base64: string,
  filename: string,
  mimeType: string,
): any => {
  try {
    // Ensure the base64 string is properly formatted
    const base64Regex = /^data:(.+);base64,(.*)$/;
    const matches = base64.match(base64Regex);

    if (!matches || matches.length !== 3) {
      throw new Error("Invalid base64 string");
    }

    const base64Data = matches[2];
    const bstr = atob(base64Data.trim()); // Trim to remove any extraneous whitespace
    const n = bstr.length;
    const u8arr = new Uint8Array(n);

    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    return new File([u8arr], filename, { type: mimeType });
  } catch (error: any) {
    console.error("Error converting base64 to file:", error);
  }
};

export const thousandConverter = (data: any) => {
  return Math.abs(data) > 999
    ? //@ts-ignore
      Math.sign(data) * (Math.abs(data) / 1000).toFixed(1) + "k"
    : Math.sign(data) * Math.abs(data);
};

export const getNextPageParam = (lastPage: any) => {
  const { count, limit, page } = lastPage.data.data;
  const totalPages = Math.ceil(count / limit);
  return totalPages > page ? page + 1 : undefined;
};

export const combineStringIds = (id1: string, id2: string) => {
  return `${id1}${id2}`
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
};

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
}

export const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];

export const sendFlag = (flag: boolean) => {
  emitEvent("MANAGING_FLAG_ENY_WHERE", flag);
};

// export const getUniqueId = () => {
//   const deviceId = localStorage.getItem("deviceId");
//   if (deviceId) {
//     return deviceId;
//   }

//   const newDeviceId = uuid();
//   localStorage.setItem("deviceId", newDeviceId);

//   return newDeviceId;
// };

export const filterUrlData = (
  router: AppRouterInstance,
  routeName: string,
  keyName: string,
  value: string,
) => {
  const data = new URLSearchParams(window.location.search);

  if (value === "") {
    data.delete(keyName);
  } else {
    data.set(keyName, value);
  }

  router.push(`${routeName}?${data.toString()}`);
};
// export const momentTranslate = (timeStamp: string) => {
//   const { language } = getAuthValue();
//   language ? moment.locale(language) : moment.locale("fr");
//   return moment(timeStamp).fromNow();
// };

export function hasNumber(url: any) {
  // checking if a string has number

  const lastSlashIndex = url.lastIndexOf("/");
  const lastPart = url.substring(lastSlashIndex + 1);
  return /\d+$/.test(lastPart);
}

export const getEmailValidationRules = (
  requiredMessage: string,
  invalidMessage: string,
) => {
  return {
    validate: (value: string) =>
      (value || "")?.trim() ? true : requiredMessage,
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: invalidMessage,
    },
  };
};

export const getPasswordValidationRules = (
  requiredMessage: string,
  invalidMessage: string,
) => {
  return {
    validate: (value: string) =>
      (value || "")?.trim() ? true : requiredMessage,
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_€-])[A-Za-z\d@$!%*?&#_€-]{8,20}$/,
      message: invalidMessage,
    },
  };
};

export const getConfirmValidationRules = (password: string) => {
  return {
    validate: (value: string) =>
      (value || "")?.trim()
        ? value === password
          ? true
          : "password do not match"
        : "password is required",
  };
};

export const getMediaTypes = (event: string, type: string) => {
  emitEvent(event, type);
};

export const getProfileIndex = (index: number) => {
  emitEvent("EVENT_PROFILE_OVERLAY_INDEX", index);
};

export const createPatternRows = (data: any[], pattern = [3, 2]) => {
  const rows: any[] = [];
  let index = 0;
  let patternIndex = 0;

  while (index < data.length) {
    const count = pattern[patternIndex % pattern.length];
    rows.push(data.slice(index, index + count));
    index += count;
    patternIndex++;
  }

  return rows;
};
export function decodeJWT(token: string) {
  try {
    const payload = token.split(".")[1]; // middle part
    const decodedPayload = atob(payload); // base64 decode
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}
export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
};

export const renderBoldQuotesText = (text: string): string[] => {
  const parts = text.split(/(“[^”]+”)/g);
  return parts; // array of strings, JSX return nahi karta
};
export const getPulseMessage = (
  m3Value: number,
  m1Value: number | undefined,
  pulseConfig:
    | {
        better: string[];
        same: string[];
        worse: string[];
      }
    | undefined,
) => {
  if (!pulseConfig || !m1Value) return "";

  let messages: string[] = [];

  if (m3Value > m1Value) {
    messages = pulseConfig.better;
  } else if (m3Value === m1Value) {
    messages = pulseConfig.same;
  } else {
    messages = pulseConfig.worse;
  }

  if (!messages.length) return "";

  return messages[Math.floor(Math.random() * messages.length)];
};

// helpers.ts

export type ProgressResult = {
  steps: number;
  percentage: number;
};

export const getPathwayProgress = (data: any): ProgressResult => {
  let percentage = 0;
  let completedSteps = 0;

  // ✅ m1 → 30%
  if (data?.m1?.behaviour_selection || data?.m1?.pulse_check) {
    percentage += 30;
    completedSteps += 1;
  }

  // ✅ m2 → 30%
  if (
    data?.m2 &&
    Object.values(data.m2).some(
      (val: any) => Array.isArray(val) && val.length > 0,
    )
  ) {
    percentage += 30;
    completedSteps += 1;
  }

  // ✅ m3 → 40%
  if (data?.m3?.reflection || data?.m3?.pulse_check) {
    percentage += 40;
    completedSteps += 1;
  }

  return {
    steps: completedSteps,
    percentage,
  };
};

export const enrichProgressWithPractice = (
  progressList: any[],
  practiceList: any[],
) => {
  if (!Array.isArray(progressList)) return [];

  return progressList.map((item) => {
    const dynamicKey = Object.keys(item).find(
      (key) => !["created", "uuid", "active", "completed"].includes(key),
    );

    if (!dynamicKey) return item;

    const pathwayName = dynamicKey;
    const pathwayData = item[dynamicKey];

    const m2 = pathwayData?.m2 || {};
    const updatedM2: any = {};

    Object.keys(m2).forEach((key) => {
      const maId = `ma${key.split("_").pop()}`;

      const practiceItem = practiceList?.find(
        (p) => p.id === maId && p.pathway === pathwayName,
      );

      //  FIX: safe array handling
      const entries = Array.isArray(m2[key]) ? m2[key] : [];

      updatedM2[key] = entries.map((entry: any) => ({
        ...entry,
        title: practiceItem?.title || null,
        description: practiceItem?.description || null,
        id: maId,
      }));
    });

    return {
      ...item,
      [pathwayName]: {
        ...pathwayData,
        m2: updatedM2,
      },
    };
  });
};

export const formatJoinedDate = (timestamp?: number) => {
  if (!timestamp) return "";

  const date = new Date(timestamp * 1000); // convert to ms

  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};
export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};

// pressurePointConfig.ts
export const PRESSURE_POINT_CONFIG: any = {
  urgent: {
    title: "Everything Feels Urgent",
    description: `Your days are filled with escalations, last-minute decisions, and “quick questions” that are not quick. Priorities keep shifting, there’s little uninterrupted time to think, and work feels reactive rather than led.`,
    underneath: `This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens. 
    Over time, urgency becomes the default operating mode — not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.`,
    response: `To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.`,
    message: `This is a common leadership pressure — and it’s workable.`,
  },
  alignment: {
    title: "Teams are Busy, but not Aligned",
    description: `Your team is busy and capable, yet progress feels uneven and slower than expected. Different parts of the work move in parallel without fully connecting, creating rework and a sense that effort is not adding up.`,
    underneath: `This pressure tends to emerge when alignment relies on conversations rather than shared anchors. Goals exist, but they’re interpreted rather than held in common. 

As the work grows more complex, small differences in understanding quietly multiply — until effort no longer translates cleanly into outcomes.`,
    response: `Leaders often try to restore alignment by explaining more, checking in more frequently, or holding additional coordination meetings. It brings temporary clarity — but alignment fades again once attention moves elsewhere.`,

    message: `Hard-working teams can still struggle when 
shared direction is not clear.`,
  },
  late: {
    title: "Problems Surface Too Late",
    description: `On the surface, things seem fine — updates sound positive and meetings stay polite. Issues tend to surface only when they’re already costly: deadlines slip, tensions rise, or clients escalate. There’s often a sense that something was off, but it wasn’t visible early enough to address lightly.`,
    underneath: `This pressure often grows in environments where raising concerns feels risky, uncomfortable, or disruptive. Signals get softened, delayed, or diverted into side conversations. 

Over time, the system rewards keeping things smooth on the surface — even when it slows learning and increases risk underneath.`,
    response: `Leaders may respond by asking for more detailed updates, tightening oversight, or getting involved once issues are already serious. That can help regain control — but it doesn’t always make it easier for concerns to surface earlier next time.`,
    message: `This is a common leadership pressure — and it’s workable.`,
  },
  dependency: {
    title: "Too Much Depends on Me",
    description: `Decisions slow down unless you’re involved. People look to you for reassurance before acting, and progress stalls when you’re unavailable. Even capable leaders hesitate without your input, and the organisation feels more fragile than it should.`,
    underneath: `This pressure often emerges when ownership and decision rights have not scaled with the complexity of the work. 

Clarity about who decides, who owns what, and how risk is shared has not kept pace — so responsibility drifts upward by default.`,
    response: `Leaders often stay close to decisions, step in to unblock work, or “just handle it” themselves to keep things moving. It works in the moment — but can quietly reinforce reliance and limit autonomy over time.`,
    message: `Many leaders experience this as organisations grow 
and demands increase.`,
  },
  other: {
    title: "Something Else is Making Work Heavier",
    description: `Work feels heavier than it should, even when nothing is obviously broken. Progress takes more effort, energy drains faster, and small issues feel harder to absorb. There’s a sense of drag without a single clear cause.`,
    underneath: `This pressure often appears when multiple small frictions combine — unclear expectations, shifting demands, stretched capacity, or unresolved tensions that haven’t found a clear place to land. 

Individually they seem manageable, but together they weigh the system down.`,
    response: `Leaders often try to push through, absorb the strain, or wait for things to settle before addressing it directly. The work continues — but the underlying heaviness remains.`,
    message: `Not all pressure is obvious or easy to name — that doesn’t make it less real or less workable.`,
  },
};

export const chunkByPattern = (arr: any, pattern = [8, 6]) => {
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

export const getTimeAgo = (createdAt: string | number) => {
  if (!createdAt) return "";

  const now = Date.now();

  let createdTime = 0;

  // local reflections -> unix timestamp number
  if (typeof createdAt === "number") {
    createdTime = createdAt * 1000;
  } else {
    // API reflections -> ISO string
    const normalizedDate = createdAt.replace(/\.\d+$/, "");
    const finalDate = normalizedDate + "Z";

    createdTime = new Date(finalDate).getTime();
  }

  const diffMs = now - createdTime;

  if (diffMs < 0) return "just now";

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return `${seconds} sec ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  if (days === 1) return `1 day ago`;
  if (days < 7) return `${days} days ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? "s" : ""} ago`;
};

export const getSharedReflectionsFromEnriched = (data: any[]) => {
  if (!Array.isArray(data)) return [];

  const result: any[] = [];

  data.forEach((item) => {
    const dynamicKey = Object.keys(item).find(
      (key) => !["created", "uuid", "active", "completed"].includes(key),
    );

    if (!dynamicKey) return;

    const pathwayData = item[dynamicKey];

    //  m2 reflections
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

    // ✅ m3 reflections
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

export const downloadPdf = (filePath: string, fileName?: string) => {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName || filePath.split("/").pop() || "download.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
