import type { Metadata } from "next"
import { LayoutFC } from "@/utils/types"
import { HeroUIProvider } from "@heroui/react"
import { DMSans } from "@/assets/fonts"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Job Listings",
  description: "Get the jobs you want just by searching",
}

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en" className={DMSans.variable}>
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
