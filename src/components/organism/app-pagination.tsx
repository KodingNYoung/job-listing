"use client"

import { FC } from "@/utils/types"
import React from "react"
import { Pagination } from "@heroui/react"

export type AppPaginationProps = {
  total: number
  page: number
  onChange: (page: number) => void
}

const AppPagination: FC<AppPaginationProps> = ({ onChange, page, total }) => {
  return (
    <Pagination
      showControls
      size="lg"
      variant="light"
      total={total}
      page={page}
      onChange={onChange}
      classNames={{
        wrapper: "gap-0",
        cursor:
          "bg-gray-50 border border-gray-100 rounded-lg !text-gray-600 text-body-sm ",
        item: "!text-gray-500 text-body-md",
      }}
    />
  )
}

export default AppPagination
