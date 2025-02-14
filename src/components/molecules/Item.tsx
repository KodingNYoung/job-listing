import { cls } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { ReactNode } from "react"
import Typography, { TypographyProps } from "../atoms/Typography"

type Props = {
  startContent?: ReactNode
  endContent?: ReactNode
  description?: string
  label: string
  titleProps?: TypographyProps
  descriptionProps?: TypographyProps
}

const Item: FC<Props> = ({
  startContent,
  endContent,
  description,
  label,
  titleProps,
  descriptionProps,
}) => {
  return (
    <div
      className={cls(
        "p-3 flex items-center gap-2 text-gray-600 hover:text-gray-700 text-body-md group/item"
      )}
    >
      {startContent}
      <div className={cls("flex-1 grid gap-1")}>
        <Typography {...titleProps} element="span">
          {label}
        </Typography>
        {description && (
          <Typography {...descriptionProps} element="span">
            {description}
          </Typography>
        )}
      </div>
      {endContent}
    </div>
  )
}

export default Item
