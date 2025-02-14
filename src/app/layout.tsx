import type { Metadata } from "next";
import "./globals.css";
import { LayoutFC } from "@/utils/types";
import { HeroUIProvider } from "@heroui/react";

export const metadata: Metadata = {
  title: "Job Listings",
  description: "Get the jobs you want just by searching",
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
