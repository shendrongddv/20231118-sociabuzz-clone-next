import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SOCIABUZZ: Monetization tools for creators",
  description:
    "Creator economy platform with multiple features to help you make more money as a creator. Accept support from fans. Sell your creations. Fund your passion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "font-body antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
