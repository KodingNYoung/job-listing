import Icon from "@/components/atoms/icon"
import { FC } from "@/utils/types"
import React from "react"

const Loading: FC = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center flex-col">
      <div className="size-20 flex items-center justify-center animate-spin">
        <Icon name="icon-loading-01" size={20} />
      </div>
    </div>
  )
}

export default Loading
