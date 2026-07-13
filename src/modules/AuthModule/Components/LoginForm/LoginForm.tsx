// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import images from "@/src/assets/images";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import {
//   decodeJWT,
//   getEmailValidationRules,
//   getPasswordValidationRules,
// } from "@/src/lib/Helpers";
// import { emailMessage, passwordMessage } from "@/src/lib/ErrorMessages";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useLoginMutation } from "../../Hooks/useLoginMutation";
// import { setAuthValue } from "../../Hooks/useAuthValue";
// import AuthService from "../../Services/AuthService";

// interface LoginFormProps {
//   onForgotPassword: () => void;
// }

// /* ─────────────────────────────────────────────────────────────
//    Breakpoints
//    xs  : 0   – 479   (small phones  e.g. iPhone SE)
//    sm  : 480 – 767   (large phones  e.g. iPhone Pro Max)
//    md  : 768 – 1023  (tablets       e.g. iPad)
//    lg  : 1024+       (laptops / desktops) ← unchanged from original
// ───────────────────────────────────────────────────────────── */
// type BP = "xs" | "sm" | "md" | "lg";

// function useBP(): BP {
//   const get = (): BP => {
//     if (typeof window === "undefined") return "lg";
//     const w = window.innerWidth;
//     if (w < 480) return "xs";
//     if (w < 768) return "sm";
//     if (w < 1024) return "md";
//     return "lg";
//   };
//   const [bp, set] = useState<BP>(get);
//   useEffect(() => {
//     const handler = () => set(get());
//     window.addEventListener("resize", handler);
//     return () => window.removeEventListener("resize", handler);
//   }, []);
//   return bp;
// }

// /* ════════════════════════════════════════════
//    Main LoginForm
// ════════════════════════════════════════════ */
// function LoginForm({ onForgotPassword }: LoginFormProps) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const bp = useBP();

//   const isLg = bp === "lg";
//   const isMd = bp === "md";
//   const isSm = bp === "sm";
//   const isXs = bp === "xs";

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     defaultValues: { email: "", password: "", rememberMe: false },
//   });

//   const router = useRouter();
//   const { mutate: loginUser, isPending } = useLoginMutation();

//   const handleLoginFrom = handleSubmit((values: any) => {
//     loginUser(
//       {
//         email_address: values.email,
//         password: values.password,
//       },
//       {
//         onSuccess: (res: any) => {
//           const token = res?.token;
//           const decoded = decodeJWT(token);

//           if (values.rememberMe) {
//             localStorage.setItem("token", token);
//           } else {
//             sessionStorage.setItem("token", token);
//           }

//           setAuthValue({
//             loggedIn: true,
//             token: token,
//             user: decoded,
//             accountType: "GOOGLE",
//             latitude: undefined,
//             longitude: undefined,
//             location: undefined,
//             language: "en",
//             isCompleteProfile: true,
//           });
//           if (values.rememberMe) {
//             localStorage.setItem("token", token);

//             AuthService.rememberMe$.next({
//               email: values.email,
//               password: values.password,
//               rememberMe: true,
//             });
//           } else {
//             sessionStorage.setItem("token", token);

//             AuthService.rememberMe$.next({
//               email: "",
//               password: "",
//               rememberMe: false,
//             });
//           }
//           router.push("/home");
//         },
//       },
//     );
//   });

//   useEffect(() => {
//     const rememberData = AuthService.rememberMe$.getValue();

//     if (rememberData?.rememberMe) {
//       setValue("email", rememberData.email);
//       setValue("password", rememberData.password);
//       setValue("rememberMe", true);
//     }
//   }, []);

//   /* ── Corner image ── */
//   const cornerW: number | string = isLg
//     ? 400
//     : isMd
//       ? "min(44vw, 340px)"
//       : isSm
//         ? 270
//         : 175;
//   const cornerH = isLg ? 340 : isMd ? 310 : isSm ? 230 : 155;

//   /* ── Header ── */
//   const hPadX = isLg ? 32 : isMd ? 28 : isSm ? 20 : 16;
//   const hPadT = isLg ? 32 : isMd ? 28 : isSm ? 24 : 20;
//   const hPadB = isLg ? 12 : isMd ? 16 : 12;

//   /* Logo */
//   const logoW = isLg ? 80 : isMd ? 68 : isSm ? 56 : 46;
//   const logoFontSize = isLg ? 28 : isMd ? 20 : isSm ? 17 : 15;
//   const taglineSize = isLg ? 16 : isMd ? 12 : isSm ? 11 : 10;

//   /* Header inner layout */
//   const headerRowStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: isXs || isSm ? "column" : "row",
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     width: "100%",
//     gap: isXs || isSm ? 12 : isMd ? 16 : 20,
//   };

//   /* "Hi Humaniser!" — flows in header, right-aligned from tablet up */
//   const hiStyle: React.CSSProperties = {
//     position: "relative",
//     alignSelf: isXs || isSm ? "flex-start" : "flex-end",
//     textAlign: isMd || isLg ? "right" : "left",
//     marginTop: isXs || isSm ? 12 : isMd ? 4 : 8,
//     marginLeft: isXs || isSm ? 0 : "auto",
//     flexShrink: 0,
//     maxWidth: isLg ? "50%" : isMd ? "52%" : "100%",
//     zIndex: 1,
//   };

//   const hiFontSize = isLg
//     ? "clamp(32px, 6vw, 84.8px)"
//     : isMd
//       ? "clamp(24px, 4.5vw, 44px)"
//       : isSm
//         ? "clamp(20px, 6.5vw, 34px)"
//         : "clamp(18px, 7vw, 26px)";

//   const tmFontSize = isLg
//     ? "clamp(14px, 2vw, 32px)"
//     : isMd
//       ? "clamp(10px, 1.5vw, 18px)"
//       : isSm
//         ? "clamp(9px, 2.5vw, 14px)"
//         : "clamp(8px, 2.8vw, 12px)";

//   const tmLineH = "1";

//   /* ── Main ── */
//   const mainPadX = isLg ? 0 : isMd ? 28 : isSm ? 20 : 16;
//   const mainPadT = isLg ? 0 : isMd ? 20 : isSm ? 24 : 16;
//   const mainPadB = isLg ? 16 : isMd ? 20 : 12;
//   const cardPadT = isLg ? 24 : isMd ? 16 : 12;

//   /* ── Banner ── */
//   const bannerMb = isLg ? 20 : isMd ? 20 : isSm ? 16 : 14;
//   const bannerPad = isLg ? "12px 16px" : isMd ? "10px 14px" : "8px 12px";
//   const bannerFontSize = isLg
//     ? "clamp(15px, 3vw, 24px)"
//     : isMd
//       ? "clamp(13px, 2vw, 17px)"
//       : isSm
//         ? 14
//         : 12;

//   /* ── Inputs ── */
//   const inputMl: number = isLg ? 43 : 0;
//   const inputW: React.CSSProperties["width"] = isLg ? 494 : "100%";
//   const inputPad = isLg ? "10px 16px" : isMd ? "10px 14px" : "8px 12px";
//   const inputGap = isLg ? 12 : isMd ? 10 : 8;
//   const inputIconW = isLg ? 30 : isMd ? 26 : isSm ? 24 : 22;
//   const inputIconH = isLg ? 16 : isMd ? 14 : 13;
//   const inputFontSize = isLg
//     ? "clamp(15px, 2.5vw, 21px)"
//     : isMd
//       ? "clamp(13px, 1.8vw, 16px)"
//       : isSm
//         ? 14
//         : 13;
//   const errorFontSize = isLg ? 13 : isMd ? 12 : 11;

//   /* ── Remember / Forgot row ── */
//   const rfMb = isLg ? 24 : isMd ? 24 : isSm ? 16 : 14;
//   const forgotMr = 0;
//   const rfFontSize = isLg
//     ? "clamp(14px, 2vw, 18px)"
//     : isMd
//       ? 14
//       : isSm
//         ? 13
//         : 12;

//   /* ── Login button ── */
//   const btnW = isLg ? 573 : "100%";
//   const btnPad = isLg ? "10px 16px" : isMd ? "10px 14px" : isXs ? "8px 12px" : "10px 14px";
//   const btnFontSize = isLg
//     ? "clamp(22px, 4vw, 32px)"
//     : isMd
//       ? "clamp(17px, 2.8vw, 22px)"
//       : isSm
//         ? 18
//         : 16;

//   /* ── Footer ── */
//   const formMaxW = 573;
//   const ftBannerBreakout = isLg;
//   const ftTop = isLg ? "50%" : "7%";
//   const footerMt = isLg ? 40 : isMd ? 24 : 16;
//   const footerPad = isLg ? "0 0 24px" : "0 0 16px";
//   const ftLeft = isSm ? "5%" : "3%";
//   const ftBannerWidth = ftBannerBreakout ? "100vw" : "100%";
//   const ftTextInset = ftBannerBreakout ? hPadX : 0;
//   const ftTextRight = ftBannerBreakout ? hPadX : "3%";
//   const ftBannerHeight = isLg ? 88 : isMd ? 52 : isSm ? 48 : 42;

//   const ftFontSize = isLg
//     ? "clamp(13px, 1.2vw, 18px)"
//     : isMd
//       ? "clamp(8px, 1.2vw, 12px)"
//       : isSm
//         ? "clamp(7px, 1.8vw, 10px)"
//         : "clamp(6px, 2vw, 9px)";
//   const footerDbSize = isLg ? 24 : isMd ? 22 : isSm ? 20 : 18;
//   const privacyFontSize = isLg
//     ? "clamp(13px, 2vw, 20px)"
//     : isMd
//       ? "clamp(11px, 1.6vw, 14px)"
//       : isSm
//         ? 12
//         : 11;

//   /* ════════════════ JSX ════════════════ */
//   return (
//     <div
//       style={{
//         height: "100vh",
//         maxHeight: "100vh",
//         backgroundColor: "#e8e4df",
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//         overflowX: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* ── Corner decorative image ── */}
//       <Image
//         src={images.loginRectangle}
//         alt="login-rectangle"
//         width={630}
//         height={630}
//         style={{
//           position: "absolute",
//           top: 0,
//           right: isLg ? 0 : isMd ? 48 : 0,
//           zIndex: 0,
//           width: cornerW,
//           height: cornerH,
//           maxHeight: isLg ? cornerH : undefined,
//           objectFit: isLg ? "cover" : "contain",
//           objectPosition: "top right",
//           pointerEvents: "none",
//         }}
//       />

//       {/* ════════ HEADER ════════ */}
//       <header
//         style={{
//           position: "relative",
//           paddingLeft: hPadX,
//           paddingRight: hPadX,
//           paddingTop: hPadT,
//           paddingBottom: hPadB,
//           flexShrink: 0,
//           zIndex: 1,
//         }}
//       >
//         <div style={headerRowStyle}>
//           {/* Logo */}
//           <Link href="https://humanisingourworkplaces.com" target="_blank">
//             <div style={{ flexShrink: 0 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <Image
//                   src={images.humaniserLogo}
//                   alt="Humanising Our Workplaces Logo"
//                   width={logoW}
//                   style={{ objectFit: "contain", flexShrink: 0 }}
//                   priority
//                 />
//                 <div
//                   style={{
//                     fontSize: logoFontSize,
//                     fontFamily: "Aptos, sans-serif",
//                     fontWeight: "bold",
//                     lineHeight: 1,
//                   }}
//                 >
//                   <span style={{ display: "block" }}>Humanising our</span>
//                   <span style={{ display: "block", marginTop: -2 }}>
//                     Workplaces
//                   </span>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   fontFamily: "Aptos, sans-serif",
//                   fontWeight: 400,
//                   marginLeft: isXs ? 12 : 18,
//                   fontSize: taglineSize,
//                   marginTop: 4,
//                 }}
//               >
//                 Human Habits. Clear Decision. Reliable Execution.
//               </div>
//             </div>
//           </Link>

//           {/* "Hi Humaniser!" heading */}
//           <div style={hiStyle}>
//             <h1
//               style={{
//                 fontFamily: "RocaTwo-Bold, serif",
//                 fontSize: hiFontSize,
//                 fontWeight: "bold",
//                 display: "inline-block",
//                 color: "#0F4F58",
//                 marginRight: 0,
//                 lineHeight: 1.1,
//                 whiteSpace: isXs ? "normal" : "nowrap",
//               }}
//             >
//               Hi Humaniser!
//               <span
//                 style={{
//                   fontFamily: "RocaTwo-Bold, serif",
//                   fontSize: tmFontSize,
//                   lineHeight: tmLineH,
//                   fontWeight: "bold",
//                   verticalAlign: "top",
//                 }}
//               >
//                 ™
//               </span>
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* ════════ MAIN ════════ */}
//       <main
//         style={{
//           flex: "1 1 0",
//           minHeight: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           overflowX: "hidden",
//           overflowY: isLg ? "hidden" : "auto",
//           paddingLeft: mainPadX,
//           paddingRight: isMd ? 36 : mainPadX,
//           paddingTop: mainPadT,
//           paddingBottom: mainPadB,
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: 573,
//             paddingTop: cardPadT,
//             overflow: "visible",
//           }}
//         >
//           {/* Green banner */}
//           <div
//             style={{
//               width: "100%",
//               borderRadius: 12,
//               padding: bannerPad,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: bannerMb,
//               backgroundColor: "#8BBE8A",
//               boxSizing: "border-box",
//               overflow: "hidden",
//             }}
//           >
//             <p
//               style={{
//                 textAlign: "center",
//                 color: "#000",
//                 margin: 0,
//                 fontFamily: "Aptos, sans-serif",
//                 fontWeight: 400,
//                 fontSize: bannerFontSize,
//                 lineHeight: 1.3,
//                 overflow: "hidden",
//                 wordBreak: "break-word",
//               }}
//             >
//               Please login to access to Hi Humaniser! Portal
//             </p>
//           </div>

//           {/* ── Form ── */}
//           <form
//             style={{ width: "100%", overflow: "visible", boxSizing: "border-box" }}
//             onSubmit={handleLoginFrom}
//           >
//             {/* Email */}
//             <div style={{ marginBottom: 10, marginLeft: inputMl }}>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: inputGap,
//                   backgroundColor: "#fff",
//                   borderRadius: 8,
//                   padding: inputPad,
//                   border: `1px solid ${errors?.email ? "#ef4444" : "#e5e7eb"}`,
//                   width: inputW,
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Image
//                   src={images.email}
//                   alt="email-icon"
//                   width={inputIconW}
//                   height={inputIconH}
//                   style={{ flexShrink: 0 }}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   {...register(
//                     "email",
//                     getEmailValidationRules(
//                       emailMessage?.requiredMessage,
//                       emailMessage.invalidMessage,
//                     ),
//                   )}
//                   style={{
//                     flex: 1,
//                     minWidth: 0,
//                     background: "transparent",
//                     outline: "none",
//                     border: "none",
//                     fontWeight: 400,
//                     lineHeight: 1.5,
//                     color: "#000",
//                     padding: 0,
//                     fontFamily: "Aptos, sans-serif",
//                     fontSize: inputFontSize,
//                   }}
//                 />
//               </div>
//               {errors?.email && (
//                 <span
//                   style={{
//                     display: "block",
//                     color: "#ef4444",
//                     fontSize: errorFontSize,
//                     marginTop: 6,
//                     marginLeft: 4,
//                   }}
//                 >
//                   {errors.email?.message}
//                 </span>
//               )}
//             </div>

//             {/* Password */}
//             <div style={{ marginBottom: 10, marginLeft: inputMl }}>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: inputGap,
//                   backgroundColor: "#fff",
//                   borderRadius: 8,
//                   padding: inputPad,
//                   border: `1px solid ${errors?.password ? "#ef4444" : "#e5e7eb"}`,
//                   width: inputW,
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Image
//                   src={images.lock}
//                   alt="lock-icon"
//                   width={inputIconW}
//                   height={inputIconH}
//                   style={{ flexShrink: 0 }}
//                 />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   {...register(
//                     "password",
//                     getPasswordValidationRules(
//                       passwordMessage.password_required,
//                       passwordMessage.password_message,
//                     ),
//                   )}
//                   style={{
//                     flex: 1,
//                     minWidth: 0,
//                     background: "transparent",
//                     outline: "none",
//                     border: "none",
//                     fontWeight: 400,
//                     lineHeight: 1.5,
//                     color: "#000",
//                     padding: 0,
//                     fontFamily: "Aptos, sans-serif",
//                     fontSize: inputFontSize,
//                   }}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((v) => !v)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                   style={{
//                     flexShrink: 0,
//                     outline: "none",
//                     cursor: "pointer",
//                     background: "none",
//                     border: "none",
//                     padding: 0,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Image
//                     src={showPassword ? images.eyeOpen : images.eyeClose}
//                     alt={showPassword ? "Hide password" : "Show password"}
//                     width={isXs ? 20 : isSm ? 22 : 24}
//                     height={isXs ? 20 : isSm ? 22 : 24}
//                     style={{ opacity: 0.6 }}
//                   />
//                 </button>
//               </div>
//               {errors?.password && (
//                 <div
//                   style={{
//                     color: "#ef4444",
//                     fontSize: errorFontSize,
//                     marginTop: 6,
//                     marginLeft: 4,
//                     width: isLg ? 494 : "100%",
//                     lineHeight: 1.3,
//                     boxSizing: "border-box",
//                   }}
//                 >
//                   {errors.password?.message}
//                 </div>
//               )}
//             </div>

//             {/* Remember Me + Forgot Password */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: rfMb,
//                 marginLeft: inputMl,
//                 flexWrap: isLg ? "nowrap" : "wrap",
//                 rowGap: 8,
//                 gap: 12,
//                 width: inputW,
//                 maxWidth: "100%",
//                 boxSizing: "border-box",
//                 position: "relative",
//                 zIndex: 5,
//                 overflow: "visible",
//               }}
//             >
//               <label
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 10,
//                   cursor: "pointer",
//                   flexShrink: 0,
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   {...register("rememberMe")}
//                   style={{
//                     width: isXs ? 16 : 18,
//                     height: isXs ? 16 : 18,
//                     cursor: "pointer",
//                   }}
//                 />{" "}
//                 <span
//                   style={{
//                     color: "#E6A757",
//                     fontWeight: "bold",
//                     lineHeight: 1,
//                     whiteSpace: "nowrap",
//                     fontFamily: "Aptos, sans-serif",
//                     fontSize: rfFontSize,
//                   }}
//                 >
//                   Remember Me
//                 </span>
//               </label>

//               <button
//                 type="button"
//                 onClick={onForgotPassword}
//                 style={{
//                   color: "#E6A757",
//                   fontWeight: "bold",
//                   lineHeight: 1,
//                   marginRight: forgotMr,
//                   marginLeft: isMd || isSm ? "auto" : 0,
//                   cursor: "pointer",
//                   flexShrink: 0,
//                   whiteSpace: "nowrap",
//                   background: "none",
//                   border: "none",
//                   padding: 0,
//                   fontFamily: "Aptos, sans-serif",
//                   fontSize: rfFontSize,
//                   textDecoration: "none",
//                   position: "relative",
//                   zIndex: 5,
//                 }}
//                 onMouseEnter={(e) =>
//                   ((e.currentTarget as HTMLElement).style.textDecoration =
//                     "underline")
//                 }
//                 onMouseLeave={(e) =>
//                   ((e.currentTarget as HTMLElement).style.textDecoration =
//                     "none")
//                 }
//               >
//                 Forgot Password
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               style={{
//                 width: btnW,
//                 backgroundColor: "#8BBE8A",
//                 borderRadius: 12,
//                 padding: btnPad,
//                 fontFamily: "Aptos, sans-serif",
//                 fontWeight: 700,
//                 fontSize: btnFontSize,
//                 color: "#000000",
//                 textDecoration: "underline",
//                 textDecorationStyle: "solid",
//                 cursor: "pointer",
//                 border: "none",
//                 transition: "background-color 0.15s ease",
//                 boxSizing: "border-box",
//                 letterSpacing: 0,
//                 display: "block",
//               }}
//               onMouseEnter={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
//                   "#7aad79")
//               }
//               onMouseLeave={(e) =>
//                 ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
//                   "#8BBE8A")
//               }
//               disabled={isPending}
//             >
//               {isPending ? "Logging..." : "Login"}
//             </button>
//           </form>
//         </div>

//         {/* ════════ FOOTER ════════ */}
//         <footer
//           style={{
//             width: "100%",
//             maxWidth: ftBannerBreakout ? "none" : formMaxW,
//             flexShrink: 0,
//             marginTop: footerMt,
//             zIndex: 1,
//             position: "relative",
//             overflow: "visible",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: ftBannerBreakout ? "flex-start" : "center",
//             alignSelf: ftBannerBreakout ? "flex-start" : "center",
//           }}
//         >
//           {/* Banner image with overlay text */}
//           <div
//             style={{
//               position: "relative",
//               width: ftBannerWidth,
//               maxWidth: ftBannerBreakout ? "none" : "100%",
//               display: "flex",
//               justifyContent: ftBannerBreakout ? "flex-start" : "center",
//             }}
//           >
//             <Image
//               src={images.landRectangle}
//               alt="Footer Rectangle"
//               style={{
//                 width: "100%",
//                 height: ftBannerHeight,
//                 maxHeight: ftBannerHeight,
//                 objectFit: "fill",
//                 objectPosition: ftBannerBreakout ? "left center" : "center",
//                 display: "block",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 top: ftTop,
//                 left: ftBannerBreakout ? ftTextInset : isMd ? "3%" : ftLeft,
//                 right: ftBannerBreakout ? ftTextRight : "3%",
//                 display: "flex",
//                 alignItems: "center",
//                 transform: ftBannerBreakout ? "translateY(-50%)" : undefined,
//                 justifyContent: ftBannerBreakout
//                   ? "flex-start"
//                   : isMd
//                     ? "center"
//                     : "flex-start",
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "RocaTwo-Bold, serif",
//                   fontSize: ftFontSize,
//                   color: "#0F4F58",
//                   fontWeight: "bold",
//                   margin: 0,
//                   lineHeight: 1.35,
//                   whiteSpace: ftBannerBreakout ? "nowrap" : "normal",
//                   textAlign: ftBannerBreakout ? "left" : isMd ? "center" : "left",
//                 }}
//               >
//                 New here? Hi Humaniser!™ is part of Humanising Our Workplaces, a movement bringing humanity back into performance. Discover more at{" "}
//                 <Link
//                   href="https://humanisingourworkplaces.com"
//                   target="_blank"
//                   style={{ textDecoration: "underline", color: "inherit" }}
//                 >
//                   HumanisingOurWorkplaces.com
//                 </Link>
//               </p>
//             </div>
//           </div>

//           {/* Privacy row */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               marginTop: 8,
//               padding: footerPad,
//               paddingLeft: ftBannerBreakout ? ftTextInset : undefined,
//               width: ftBannerBreakout ? ftBannerWidth : "100%",
//               boxSizing: "border-box",
//             }}
//           >
//             <Image
//               src={images.footerDb}
//               alt="footer-db"
//               width={footerDbSize}
//               height={footerDbSize}
//               style={{ flexShrink: 0 }}
//             />
//             <span
//               style={{
//                 fontFamily: "Aptos, sans-serif",
//                 fontWeight: 400,
//                 fontSize: privacyFontSize,
//                 lineHeight: 1.3,
//                 color: "#567F55",
//                 whiteSpace: ftBannerBreakout || isMd ? "nowrap" : "normal",
//               }}
//             >
//               Your data stays yours. Learn more in our{" "}
//               <Link
//                 href="/privacy-policy"
//                 target="_blank"
//                 style={{ textDecoration: "underline", color: "inherit" }}
//               >
//                 Privacy Policy
//               </Link>
//             </span>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }

// export default LoginForm;

"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  authFetcher,
  decodeJWT,
  getEmailValidationRules,
  getPasswordValidationRules,
} from "@/src/lib/Helpers";
import { emailMessage, passwordMessage } from "@/src/lib/ErrorMessages";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLoginMutation } from "../../Hooks/useLoginMutation";
import { setAuthValue } from "../../Hooks/useAuthValue";
import AuthService from "../../Services/AuthService";

interface LoginFormProps {
  onForgotPassword: () => void;
}

/* ─────────────────────────────────────────────────────────────
   Breakpoints
   xs  : 0   – 479   (small phones  e.g. iPhone SE)
   sm  : 480 – 767   (large phones  e.g. iPhone Pro Max)
   md  : 768 – 1023  (tablets       e.g. iPad)
   lg  : 1024+       (laptops / desktops) ← unchanged from original
───────────────────────────────────────────────────────────── */
type BP = "xs" | "sm" | "md" | "lg";

function useBP(): { bp: BP; width: number } {
  const get = () => {
    if (typeof window === "undefined") return { bp: "lg" as BP, width: 1280 };
    const w = window.innerWidth;
    if (w < 480) return { bp: "xs" as BP, width: w };
    if (w < 768) return { bp: "sm" as BP, width: w };
    if (w < 1024) return { bp: "md" as BP, width: w };
    return { bp: "lg" as BP, width: w };
  };
  const [state, setState] = useState(get);
  useEffect(() => {
    const handler = () => setState(get());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return state;
}

/* ════════════════════════════════════════════
   Main LoginForm
════════════════════════════════════════════ */
function LoginForm({ onForgotPassword }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const { bp, width: viewportW } = useBP();

  const isLg = bp === "lg";
  const isMd = bp === "md";
  const isSm = bp === "sm";
  const isXs = bp === "xs";
  /* 1024px laptop band — wider desktops (≥1280px) stay unchanged */
  const isLg1024 = isLg && viewportW >= 1024 && viewportW < 1280;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const router = useRouter();
  const { mutate: loginUser, isPending } = useLoginMutation();

  const handleLoginFrom = handleSubmit((values: any) => {
    loginUser(
      {
        email_address: values.email,
        password: values.password,
      },
      {
        onSuccess: async (res: any) => {
          const token = res?.token;
          const decoded = decodeJWT(token);

          // Get profile
          const profileRes = await authFetcher({
            url: "/my-user-profile",
            method: "GET",
          });

          const profile = profileRes.data;

          //  USE rememberMe HERE
          if (values.rememberMe) {
            localStorage.setItem("token", token);
          } else {
            sessionStorage.setItem("token", token);
          }

          setAuthValue({
            loggedIn: true,
            token: token,
            user: {
              ...decoded,
              user_id: profile.user_id, // <-- save user_id
            },
            accountType: "GOOGLE",
            latitude: undefined,
            longitude: undefined,
            location: undefined,
            language: "en",
            isCompleteProfile: true,
          });
          if (values.rememberMe) {
            localStorage.setItem("token", token);

            AuthService.rememberMe$.next({
              email: values.email,
              password: values.password,
              rememberMe: true,
            });
          } else {
            sessionStorage.setItem("token", token);

            AuthService.rememberMe$.next({
              email: "",
              password: "",
              rememberMe: false,
            });
          }
          router.push("/home");
        },
      },
    );
  });

  useEffect(() => {
    const rememberData = AuthService.rememberMe$.getValue();

    if (rememberData?.rememberMe) {
      setValue("email", rememberData.email);
      setValue("password", rememberData.password);
      setValue("rememberMe", true);
    }
  }, []);
  /* ── Corner image ── */
  const cornerW = isLg1024 ? 460 : isLg ? 630 : isMd ? 460 : isSm ? 280 : 150;

  /* ── Header ── */
  const hPadX = isLg ? 32 : isMd ? 28 : isSm ? 20 : 16;
  const hPadT = isLg ? 32 : isMd ? 28 : isSm ? 24 : 20;

  /* Logo */
  const logoW = isLg ? 80 : isMd ? 68 : isSm ? 56 : 46;
  const logoFontSize = isLg ? 28 : isMd ? 22 : isSm ? 20 : 17;
  const taglineSize = isLg ? 16 : 13;

  /* Header inner layout — column on mobile, row on tablet+desktop */
  const headerRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isSm || isXs ? "column" : "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    gap: isLg1024 ? 16 : isMd ? 16 : isLg ? 20 : 6,
  };

  /* "Hi Humaniser!" — single line at 1024px; absolute positioning on wider lg */
  const hiStyle: React.CSSProperties = isLg1024
    ? {
        position: "relative",
        alignSelf: "flex-end",
        textAlign: "right",
        marginLeft: "auto",
        flexShrink: 0,
        maxWidth: "55%",
        zIndex: 2,
      }
    : isLg
      ? { position: "absolute", left: 679, top: 89, textAlign: "right" }
      : {
          position: "relative",
          textAlign: isMd ? "right" : "left",
          marginTop: isMd ? 0 : 6,
        };

  const hiFontSize = isLg1024
    ? "clamp(28px, 4.2vw, 52px)"
    : isLg
      ? "clamp(32px, 6vw, 84.8px)"
      : isMd
        ? "clamp(28px, 5vw, 52px)"
        : isSm
          ? "clamp(24px, 7.5vw, 42px)"
          : "clamp(22px, 9vw, 34px)";

  const tmFontSize = isLg1024
    ? "clamp(12px, 1.4vw, 20px)"
    : isLg
      ? "clamp(14px, 2vw, 32px)"
      : isMd
        ? "clamp(12px, 1.8vw, 22px)"
        : "clamp(10px, 3vw, 16px)";

  const tmLineH = isLg1024 ? "1" : isLg ? "clamp(40px, 8vw, 92px)" : "1";

  /* ── Main ── */
  const mainPadX = isLg ? 0 : isMd ? 32 : isSm ? 20 : 16;
  const mainPadT = isLg ? 0 : isMd ? 32 : isSm ? 24 : 16;
  const mainPadB = isLg ? 20 : isMd ? 24 : 16;
  const cardPadT = isLg ? 100 : 0;

  /* ── Banner ── */
  const bannerMb = isLg ? 20 : isMd ? 24 : 20;
  const bannerFontSize = isLg
    ? "clamp(15px, 3vw, 24px)"
    : isMd
      ? "clamp(14px, 2.2vw, 19px)"
      : isSm
        ? 16
        : 14;

  /* ── Inputs ── */
  const inputMl: number = isLg ? 43 : 0;
  const inputW: React.CSSProperties["width"] = isLg ? 494 : "100%";
  const inputFontSize = isLg
    ? "clamp(15px, 2.5vw, 21px)"
    : isMd
      ? "clamp(14px, 2vw, 18px)"
      : 15;

  /* ── Remember / Forgot row ── */
  const rfMb = isLg ? 24 : isMd ? 28 : isSm ? 20 : 16;
  // CHANGED: forgotMr set to 0 for all breakpoints so Forgot Password sits at far right
  const forgotMr = 0;
  const rfFontSize = isLg
    ? "clamp(14px, 2vw, 18px)"
    : isMd
      ? 16
      : isSm
        ? 15
        : 13;

  /* ── Login button ── */
  const btnW = isLg ? 573 : "100%";
  const btnFontSize = isLg
    ? "clamp(22px, 4vw, 32px)"
    : isMd
      ? "clamp(18px, 3vw, 26px)"
      : isSm
        ? 21
        : 19;

  /* ── Footer ── */
  const footerMt = isLg ? 0 : isMd ? 20 : 14;
  const footerPad = isLg ? 24 : 16;
  const ftLeft = isLg ? "15%" : isMd ? "14%" : isSm ? "5%" : "3%";
  const ftTop = isLg ? "12%" : "7%";
  const ftFontSize = isLg
    ? "clamp(9px, 1.5vw, 18px)"
    : isMd
      ? "clamp(9px, 1.4vw, 14px)"
      : isSm
        ? "clamp(8px, 2vw, 12px)"
        : "clamp(7px, 2.2vw, 10px)";
  const footerDbSize = isXs ? 20 : 24;
  const privacyFontSize = isLg
    ? "clamp(13px, 2vw, 20px)"
    : isMd
      ? "clamp(13px, 1.8vw, 16px)"
      : isSm
        ? 14
        : 12;

  /* ════════════════ JSX ════════════════ */
  return (
    <div
      style={{
        minHeight: isLg ? undefined : "100vh",
        height: isLg ? "100vh" : undefined,
        maxHeight: isLg ? "100vh" : undefined,
        backgroundColor: "#e8e4df",
        display: "flex",
        flexDirection: "column",
        overflow: isLg ? "hidden" : undefined,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* ── Corner decorative image ── */}
      <Image
        src={images.loginRectangle}
        alt="login-rectangle"
        width={630}
        height={630}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 0,
          width: cornerW,
          height: "auto",
          pointerEvents: "none",
        }}
      />

      {/* ════════ HEADER ════════ */}
      <header
        style={{
          position: "relative",
          paddingLeft: hPadX,
          paddingRight: hPadX,
          paddingTop: hPadT,
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <div style={headerRowStyle}>
          {/* Logo */}
          <Link href="https://humanisingourworkplaces.com" target="_blank">
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Image
                  src={images.humaniserLogo}
                  alt="Humanising Our Workplaces Logo"
                  width={logoW}
                  style={{ objectFit: "contain", flexShrink: 0 }}
                  priority
                />
                <div
                  style={{
                    fontSize: logoFontSize,
                    fontFamily: "Aptos, sans-serif",
                    fontWeight: "bold",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ display: "block" }}>Humanising our</span>
                  <span style={{ display: "block", marginTop: -2 }}>
                    Workplaces
                  </span>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Aptos, sans-serif",
                  fontWeight: 400,
                  marginLeft: 18,
                  fontSize: taglineSize,
                  marginTop: 4,
                }}
              >
                Human Habits. Clear Decision. Reliable Execution.
              </div>
            </div>
          </Link>
          {/* "Hi Humaniser!" heading */}
          <div style={hiStyle}>
            <h1
              style={{
                fontFamily: "RocaTwo-Bold, serif",
                fontSize: hiFontSize,
                fontWeight: "bold",
                display: "inline-block",
                color: "#0F4F58",
                margin: 0,
                lineHeight: 1,
                whiteSpace: isLg1024 ? "nowrap" : undefined,
              }}
            >
              Hi Humaniser!
              <span
                style={{
                  fontFamily: "RocaTwo-Bold, serif",
                  fontSize: tmFontSize,
                  lineHeight: tmLineH,
                  fontWeight: "bold",
                  verticalAlign: "top",
                }}
              >
                ™
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* ════════ MAIN ════════ */}
      <main
        style={{
          flex: isLg ? "1 1 0" : undefined,
          minHeight: isLg ? 0 : undefined,
          display: "flex",
          alignItems: isLg ? "center" : "flex-start",
          justifyContent: "center",
          overflowY: isLg ? "auto" : undefined,
          paddingLeft: mainPadX,
          paddingRight: mainPadX,
          paddingTop: mainPadT,
          paddingBottom: mainPadB,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 573,
            paddingTop: cardPadT,
          }}
        >
          {/* Green banner */}
          <div
            style={{
              width: "100%",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: bannerMb,
              backgroundColor: "#8BBE8A",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#000",
                margin: 0,
                fontFamily: "Aptos, sans-serif",
                fontWeight: 400,
                fontSize: bannerFontSize,
                lineHeight: 1.3,
              }}
            >
              Please login to access to Hi Humaniser! Portal
            </p>
          </div>

          {/* ── Form ── */}
          <form style={{ width: "100%" }} onSubmit={handleLoginFrom}>
            {/* Email */}
            <div style={{ marginBottom: 10, marginLeft: inputMl }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  padding: isLg ? "10px 16px" : "12px 16px",
                  border: `1px solid ${errors?.email ? "#ef4444" : "#e5e7eb"}`,
                  width: inputW,
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src={images.email}
                  alt="email-icon"
                  width={30}
                  height={16}
                  style={{ flexShrink: 0 }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register(
                    "email",
                    getEmailValidationRules(
                      emailMessage?.requiredMessage,
                      emailMessage.invalidMessage,
                    ),
                  )}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#000",
                    padding: 0,
                    fontFamily: "Aptos, sans-serif",
                    fontSize: inputFontSize,
                  }}
                />
              </div>
              {errors?.email && (
                <span
                  style={{
                    display: "block",
                    color: "#ef4444",
                    fontSize: 13,
                    marginTop: 6,
                    marginLeft: 4,
                  }}
                >
                  {errors.email?.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div style={{ marginBottom: 10, marginLeft: inputMl }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  padding: isLg ? "10px 16px" : "12px 16px",
                  border: `1px solid ${errors?.password ? "#ef4444" : "#e5e7eb"}`,
                  width: inputW,
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src={images.lock}
                  alt="lock-icon"
                  width={30}
                  height={16}
                  style={{ flexShrink: 0 }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register(
                    "password",
                    getPasswordValidationRules(
                      passwordMessage.password_required,
                      passwordMessage.password_message,
                    ),
                  )}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#000",
                    padding: 0,
                    fontFamily: "Aptos, sans-serif",
                    fontSize: inputFontSize,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{
                    flexShrink: 0,
                    outline: "none",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={showPassword ? images.eyeOpen : images.eyeClose}
                    alt={showPassword ? "Hide password" : "Show password"}
                    width={24}
                    height={24}
                    style={{ opacity: 0.6 }}
                  />
                </button>
              </div>
              {errors?.password && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: 13,
                    marginTop: 6,
                    marginLeft: 4,
                    width: isLg ? 494 : "100%",
                    lineHeight: 1.3,
                    boxSizing: "border-box",
                  }}
                >
                  {errors.password?.message}
                </div>
              )}
            </div>

            {/* Remember Me + Forgot Password */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: rfMb,
                marginLeft: inputMl,
                flexWrap: "nowrap",
                gap: 12,
                width: inputW,
                boxSizing: "border-box",
                position: "relative",
                zIndex: isLg1024 ? 10 : 2,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  style={{ width: 18, height: 18, cursor: "pointer" }}
                />{" "}
                <span
                  style={{
                    color: "#E6A757",
                    fontWeight: "bold",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    fontFamily: "Aptos, sans-serif",
                    fontSize: rfFontSize,
                  }}
                >
                  Remember Me
                </span>
              </label>

              <button
                type="button"
                onClick={onForgotPassword}
                style={{
                  color: "#E6A757",
                  fontWeight: "bold",
                  lineHeight: 1,
                  // CHANGED: marginRight is now 0 for all breakpoints — sits at far right via space-between
                  marginRight: forgotMr,
                  cursor: "pointer",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontFamily: "Aptos, sans-serif",
                  fontSize: rfFontSize,
                  textDecoration: "none",
                  position: "relative",
                  zIndex: isLg1024 ? 10 : undefined,
                  ...(isLg1024
                    ? {
                        backgroundColor: "rgba(232, 228, 223, 0.92)",
                        padding: "2px 8px",
                        borderRadius: 4,
                      }
                    : {}),
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "none")
                }
              >
                Forgot Password
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              style={{
                width: btnW,
                backgroundColor: "#8BBE8A",
                borderRadius: 12,
                padding: isLg ? "10px 16px" : isXs ? "10px 12px" : "12px 16px",
                fontFamily: "Aptos, sans-serif",
                fontWeight: 700,
                fontSize: btnFontSize,
                color: "#000000",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                cursor: "pointer",
                border: "none",
                transition: "background-color 0.15s ease",
                boxSizing: "border-box",
                letterSpacing: 0,
                display: "block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#7aad79")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#8BBE8A")
              }
              disabled={isPending}
            >
              {isPending ? "Logging..." : "Login"}
            </button>
          </form>
        </div>
      </main>

      {/* ════════ FOOTER ════════ */}
      <footer
        style={{
          flexShrink: 0,
          marginTop: footerMt,
          zIndex: 1,
          position: "relative",
        }}
      >
        {/* Banner image with overlay text */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "110%",
          }}
        >
          <Image
            src={images.landRectangle}
            alt="Footer Rectangle"
            style={{
              width: isLg || isMd ? "75%" : "100%",
              maxHeight: isLg ? 112 : isMd ? 100 : isSm ? 90 : 82,
              objectFit: "fill",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: ftTop,
              left: ftLeft,
              // CHANGED: right offset keeps text well inside the 75% banner
              right: isLg || isMd ? "" : "3%",
              // bottom: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "RocaTwo-Bold, serif",
                fontSize: ftFontSize,
                color: "#0F4F58",
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              New here? Hi Humaniser!™ is part of Humanising Our Workplaces, a
              movement bringing humanity back into performance.
              {(isLg || isMd) && <br />} Discover more at{" "}
              <Link
                href="https://humanisingourworkplaces.com"
                target="_blank"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                HumanisingOurWorkplaces.com
              </Link>
            </p>
          </div>
        </div>

        {/* Privacy row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 8,
            padding: footerPad,
          }}
        >
          <Image
            src={images.footerDb}
            alt="footer-db"
            width={footerDbSize}
            height={footerDbSize}
            style={{ flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "Aptos, sans-serif",
              fontWeight: 400,
              fontSize: privacyFontSize,
              lineHeight: 1.3,
              color: "#567F55",
            }}
          >
            Your data stays yours. Learn more in our{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              Privacy Policy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default LoginForm;
