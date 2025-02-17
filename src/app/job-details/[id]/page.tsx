import PageLoader from "@/components/atoms/page-loader"
import JobDetails from "@/components/views/job-details"
import { getJobDetails } from "@/lib/data"
import { PageFC } from "@/utils/types"
import React, { Suspense } from "react"

type ParamsProps = {
  id: string
}

const JobDetailsPage: PageFC<ParamsProps> = async ({ params }) => {
  const id = (await params)?.id as string
  const job = await getJobDetails(id)
  return (
    <Suspense fallback={<PageLoader />}>
      <JobDetails job={job?.[0]} />
    </Suspense>
  )
}

export default JobDetailsPage
