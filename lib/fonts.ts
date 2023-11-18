import { Hind as FontDisplay, Open_Sans as FontBody } from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const fontBody = FontBody({
  subsets: ["latin"],
  variable: "--font-body",
});
