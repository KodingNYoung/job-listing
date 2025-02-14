import { createElement, HTMLProps, ReactNode } from "react"
import { ColorVariants, FC, TypographyVariants } from "@/utils/types"
import { cls } from "@/utils/helpers"

export type TypographyProps = HTMLProps<
  HTMLHeadingElement & HTMLParagraphElement
> & {
  variants?: TypographyVariants
  element?: keyof HTMLElementTagNameMap
  elementProps?: Omit<{ [key: string]: unknown }, "className" | "children">
  align?: "left" | "center" | "right"
  weight?: 400 | 500 | 600 | 700
  noWrap?: boolean
  overflowLines?: 1 | 2 | 3 | 4 | 5 | 6
  color?: ColorVariants
}

function getElement(
  variant: TypographyVariants,
  children: ReactNode,
  className: string,
  element?: keyof HTMLElementTagNameMap,
  props: HTMLProps<unknown> = {}
) {
  switch (variant) {
    case "display-lg":
      return createElement(
        (element as unknown as string) || "h1",
        { ...props, className: cls(variant, className) },
        children
      )
    case "display-md":
      return createElement(
        (element as unknown as string) || "h2",
        { ...props, className: cls(variant, className) },
        children
      )
    case "display-sm":
      return createElement(
        (element as unknown as string) || "h3",
        { ...props, className: cls(variant, className) },
        children
      )
    case "headline-lg":
      return createElement(
        (element as unknown as string) || "h4",
        { ...props, className: cls(variant, className) },
        children
      )
    case "headline-md":
      return createElement(
        (element as unknown as string) || "h5",
        { ...props, className: cls(variant, className) },
        children
      )
    case "headline-sm":
      return createElement(
        (element as unknown as string) || "h6",
        { ...props, className: cls(variant, className) },
        children
      )
    case "title-lg":
    case "title-md":
    case "title-sm":
    case "button1":
    case "button2":
    case "button3":
    case "label-lg":
    case "label-md":
    case "label-sm":
    case "body-md":
    case "body-sm":
    case "body-lg":
    case "body-xs":
    default:
      return createElement(
        (element as unknown as string) || "p",
        { ...props, className: cls(variant || "body-lg", className) },
        children
      )
  }
}

const alignProps = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

const weightProps = {
  400: "font-regular",
  500: "font-medium",
  600: "font-semi-bold",
  700: "font-bold",
}

const overflowProps = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
}

const textColorsProps = {
  primary: "text-primary",
  secondary: "text-primary-writeup",
  white: "text-white",
  black: "text-black",
  transparent: "text-transparent",
  current: "text-current",
  warning: "text-warning",
  success: "text-success",
  error: "text-error",
  neutral: "text-neutral",
  gray: "text-gray",
  primary_dark: "text-primary-600",
}

const Typography: FC<TypographyProps> = ({
  children,
  variants,
  className,
  elementProps,
  element,
  overflowLines,
  noWrap,
  align,
  weight,
  color,
  ...props
}) => {
  return getElement(
    variants || "body-lg",
    children,
    cls(
      align && alignProps[align],
      weight && weightProps[weight],
      noWrap && "truncate",
      overflowLines && overflowProps[overflowLines],
      color ? textColorsProps[color] : "text-gray-700",
      className
    ),
    element,
    { ...elementProps, ...props }
  )
}

export default Typography
