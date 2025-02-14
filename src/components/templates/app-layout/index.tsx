import { FC } from "@/utils/types"
import React from "react"
import Header from "./header"

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-[76px] min-h-screen container bg-white border-x border-neutral-100">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
