import localFont from "next/font/local";

export const csMedium = localFont({
  src: "../fonts/ABCCulturalService-Medium.woff",
  variable: "--font-cs-medium",
  display: "swap",
  weight: "400",
});

export const csBold = localFont({
  src: "../fonts/ABCCulturalService-Bold.woff",
  variable: "--font-cs-bold",
  display: "swap",
  weight: "700",
});

export const csBoldMix = localFont({
  src: "../fonts/ABCCulturalService-BoldMix.woff",
  variable: "--font-cs-bold-mix",
  display: "swap",
  weight: "400",
});
