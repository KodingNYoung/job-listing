import type { Metadata } from "next"
import { LayoutFC } from "@/utils/types"
import { HeroUIProvider } from "@heroui/react"
import { DMSans } from "@/assets/fonts"
import "../styles/globals.css"
import AppLayout from "@/components/templates/app-layout"

export const metadata: Metadata = {
  title: "Job Listings",
  description: "Get the jobs you want just by searching",
}

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en" className={DMSans.variable}>
      <body>
        <HeroUIProvider>
          <AppLayout>{children}</AppLayout>
        </HeroUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
