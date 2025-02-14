import { FC } from "@/utils/types"
import React from "react"
import UserDropdown from "./user-dropdown"

const Header: FC = () => {
  return (
    <header className="bg-white shadow-sm fixed z-[2] top-0 left-0 w-full h-[75px]">
      <div className="container flex justify-between items-center gap-2 py-3 px-5">
        <span className="text-2xl font-bold text-primary">LOGO</span>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
