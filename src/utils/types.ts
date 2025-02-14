import { HTMLProps, PropsWithChildren, ReactElement } from "react"

export type TWClassNames = HTMLProps<HTMLElement>["className"]

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
  | "body-xs"

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
  | "gray"

export type FC<PropsType = unknown> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null
  displayName?: string
}
export type LayoutFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined },
> = {
  (
    props: PropsWithChildren<{ params?: Promise<ParamsType> }>,
    context?: unknown
  ): ReactElement | null | Promise<ReactElement | null>
  displayName?: string
}

export type PageFC<
  ParamsType =
    | { [paramsKey: string]: string | string[] | undefined }
    | Promise<unknown>,
  SearchParamsType = {
    [searchParamsKey: string]: string | string[] | undefined
  },
> = {
  (
    props: {
      params?: Promise<ParamsType>
      searchParams?: Promise<SearchParamsType>
    },
    context?: unknown
  ): ReactElement | null | Promise<ReactElement | null>
  displayName?: string
}
export type ErrorObjectType = {
  type: "request" | "validation"
  message?: string
  fields?: {
    [field: string]: string
  }
}

export type FormState<SP = unknown, EP = unknown> =
  | { redirectTo?: string }
  | (
      | {
          redirectTo?: string
          success: { message: string }
          payload?: SP
        }
      | {
          redirectTo?: string
          error: ErrorObjectType
          payload?: EP
        }
    )

export type JobListing = {
  job_id: string
  employer_logo: string
  job_title: string
  employer_name: string
  job_city: string
  job_state: string
  job_country: string
  job_employment_type: string
  job_salary_currency: string
  job_min_salary: number
  job_posted_at_datetime_utc: number
  job_max_salary: number
  job_salary_period: string
  employer_website: string
  job_description?: string
}
