import { FC } from "@/utils/types"
import React from "react"
import Header from "./header"

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
