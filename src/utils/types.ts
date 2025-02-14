import { HTMLProps, PropsWithChildren, ReactElement } from "react";

export type TWClassNames = HTMLProps<HTMLElement>["className"];

export type TypographyVariants =
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "headline-lg"
  | "headline-md"
  | "headline-sm"
  | "title-lg"
  | "title-md"
  | "title-sm"
  | "button1"
  | "button2"
  | "button3"
  | "label-lg"
  | "label-md"
  | "label-sm"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "body-xs";

export type ColorVariants =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "transparent"
  | "current"
  | "warning"
  | "success"
  | "error"
  | "neutral"
  | "gray";

export type FC<PropsType = unknown> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null;
  displayName?: string;
};
export type LayoutFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined }
> = {
  (props: PropsWithChildren<{ params?: ParamsType }>, context?: unknown):
    | ReactElement
    | null
    | Promise<ReactElement | null>;
  displayName?: string;
};

export type PageFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined },
  SearchParamsType = {
    [searchParamsKey: string]: string | string[] | undefined;
  }
> = {
  (
    props: {
      params?: ParamsType;
      searchParams?: SearchParamsType;
    },
    context?: unknown
  ): ReactElement | null | Promise<ReactElement | null>;
  displayName?: string;
};
