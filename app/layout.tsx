import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/AnimationContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aidan McDonald - Portfolio",
  description: "Aidan McDonald's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimationProvider>
      <body className={montserrat.className}>{children}</body>
      </AnimationProvider>
    </html>
  );
}
