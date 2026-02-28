import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/lib/hooks/useToast";
import { ToastContainer } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADAMftd – Trade Intelligence Platform",
  description: "Commercial decision engine for global trade intelligence, market analysis, and buyer discovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${firaCode.variable} antialiased`}
      >
        <ToastProvider>
          <Header />
          <Navigation />
          {children}
          <MobileNavigation />
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}
