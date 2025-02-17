import { FC } from "@/utils/types"
import React from "react"
import Header from "./header"

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="min-h-screen container bg-white relative">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
