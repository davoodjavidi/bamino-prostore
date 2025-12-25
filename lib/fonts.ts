import localFont from "next/font/local";

// Define your local font
export const peydaFont = localFont({
  src: [
    {
      path: "./fonts/PeydaWebFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PeydaWebFaNum-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
});
