import { formStateResponse } from "@/utils/helpers"
import { FormState } from "@/utils/types"

export const applyToJob = async (state: FormState): Promise<FormState> => {
  const { successResponse } = formStateResponse(state)

  //   LOGIC FOR APPLYING TO JOB

  return new Promise((res) =>
    setTimeout(
      () => res(successResponse("Successfully applied for this job.")),
      200
    )
  )
}
