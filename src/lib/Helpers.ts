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
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Response error:",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      console.error("Request error - no response received:", error.request);
    } else {
      console.error("Error:", error.message);
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
  return axios.request({
    baseURL,
    url: config.url,
    method: config.method ?? "GET",
    data: config.data,
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
      // key = micro_action_1 → ma1
      const maId = `ma${key.split("_").pop()}`;

      // find matching practice item
      const practiceItem = practiceList.find(
        (p) => p.id === maId && p.pathway === pathwayName,
      );

      updatedM2[key] = m2[key].map((entry: any) => ({
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
