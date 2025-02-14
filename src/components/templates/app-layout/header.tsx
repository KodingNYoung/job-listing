import { FC } from "@/utils/types"
import React from "react"
import UserDropdown from "./user-dropdown"

const Header: FC = () => {
  return (
    <header className="bg-white border-b border-neutral-100 shadow-sm  sticky top-0">
      <div className="container flex justify-between items-center gap-2 py-3 px-5">
        <span className="text-2xl font-bold">LOGO</span>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
