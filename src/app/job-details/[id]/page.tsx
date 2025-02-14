import JobDetails from "@/components/views/job-details"
import { PageFC } from "@/utils/types"
import React from "react"

type ParamsProps = {
  id: string
}

const JobDetailsPage: PageFC<ParamsProps> = async ({ params }) => {
  const id = (await params)?.id as string
  return <JobDetails id={id} />
}

export default JobDetailsPage
