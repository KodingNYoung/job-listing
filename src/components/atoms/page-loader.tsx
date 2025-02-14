import { FC } from "@/utils/types"
import React from "react"
import Icon from "./icon"

const PageLoader: FC = () => {
  return (
    <div className="size-20 flex items-center justify-center animate-spin">
      <Icon name="icon-loading-01" size={20} />
    </div>
  )
}

export default PageLoader
