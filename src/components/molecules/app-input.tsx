import { FC } from "@/utils/types"
import { Input, InputProps } from "@heroui/react"
import React from "react"

type Props = InputProps

const AppInput: FC<Props> = ({ classNames, ...props }) => {
  return (
    <Input
      variant="bordered"
      labelPlacement="outside"
      classNames={{
        inputWrapper: [
          "border-1 border-gray-200 rounded shadow-none",
          classNames?.inputWrapper,
        ],
        input: [
          "placeholder:text-gray-700 placeholder:opacity-50 text-body-sm",
          classNames?.input,
        ],
        label: ["text-gray text-[13px] font-[500px]", classNames?.label],
        ...classNames,
      }}
      color="primary"
      {...props}
    />
  )
}

export default AppInput
