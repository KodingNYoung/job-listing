import { FC } from "@/utils/types"
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
} from "@heroui/react"
import React, { ReactNode } from "react"

type Props = CheckboxGroupProps & {
  items: { label: ReactNode; value: string; props?: CheckboxProps }[]
  checkboxProps?: CheckboxProps
}

const AppCheckboxGroup: FC<Props> = ({
  items,
  checkboxProps,
  classNames,
  ...props
}) => {
  return (
    <CheckboxGroup
      orientation="horizontal"
      color="primary"
      classNames={{
        base: ["gap-1", classNames?.base],
        label: ["text-[13px] font-[500] text-gray-500 ", classNames?.label],
        ...classNames,
      }}
      {...props}
    >
      {items.map((item) => (
        <Checkbox
          key={item.value}
          value={item.value}
          classNames={{
            label: [
              "text-gray-700 opacity-80 !text-body-sm ",
              checkboxProps?.classNames?.label,
              item.props?.classNames?.label,
            ],
            ...checkboxProps?.classNames,
            ...item.props?.classNames,
          }}
          size="sm"
          {...checkboxProps}
          {...item.props}
        >
          {item.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  )
}

export default AppCheckboxGroup
