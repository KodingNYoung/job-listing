import { RefObject } from "react"
import { ErrorObjectType, FormState, TWClassNames } from "./types"
import { ZodError } from "zod"

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter((className) => !!className) as string[]
  return validClasses.join(" ")
}
export const getFormdataFromFormRef = (
  formRef: RefObject<HTMLFormElement | null>
) => {
  const form = formRef.current

  return form ? new FormData(form) : undefined
}
export const extractZodErrors = (err: ZodError) => {
  return err.issues.reduce(
    (err, curr) => {
      const field = curr.path[0]
      return { ...err, [field]: curr.message }
    },
    {} as Record<string, string>
  )
}
export function formStateResponse<SP = unknown, EP = unknown>(
  formState?: FormState<SP, EP>
) {
  const state: FormState = {
    ...formState,
    error: undefined,
    success: undefined,
    redirectTo: undefined,
  }

  return {
    successResponse: (
      message: string,
      redirectTo?: string,
      payload?: SP
    ): FormState<SP, EP> => {
      return {
        ...state,
        success: { message },
        redirectTo,
        payload,
      }
    },
    errorResponse: (
      error: ErrorObjectType,
      redirectTo?: string,
      payload?: EP
    ): FormState<SP, EP> => {
      return {
        ...state,
        error,
        redirectTo,
        payload,
      }
    },
  }
}
