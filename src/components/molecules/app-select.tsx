"use client"

import { FC } from "@/utils/types"
import { Select, SelectItem, SelectItemProps, SelectProps } from "@heroui/react"
import React, { ReactNode } from "react"

type Props = Omit<SelectProps, "children"> & {
  items: { label: ReactNode; value: string; props?: SelectItemProps }[]
  itemProps?: SelectItemProps
}

const AppSelect: FC<Props> = ({ items, itemProps, classNames, ...props }) => {
  return (
    <Select
      variant="bordered"
      labelPlacement="outside"
      color="primary"
      classNames={{
        trigger: [
          "border border-gray-200 rounded shadow-none",
          classNames?.trigger,
        ],
        label: ["text-[13px] text-gray-500", classNames?.label],
        ...classNames,
      }}
      popoverProps={{ classNames: { content: "rounded shadow-menu" } }}
      listboxProps={{ variant: "light" }}
      {...props}
    >
      {items.map(({ label, value, props }) => (
        <SelectItem key={value} {...itemProps} {...props}>
          {label}
        </SelectItem>
      ))}
    </Select>
  )
}

export default AppSelect
