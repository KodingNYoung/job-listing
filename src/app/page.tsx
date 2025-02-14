import { getJobs } from "@/lib/data"
import JobListings from "@/components/views/job-listings"
import { ListingsQueryKeys } from "@/components/views/job-listings/utils"
import { PageFC } from "@/utils/types"
import { EmploymentTypes } from "@/utils/enums"
import { Suspense } from "react"
import PageLoader from "@/components/atoms/page-loader"

type SearchParams = Record<ListingsQueryKeys, string>

const HomePage: PageFC<unknown, SearchParams> = async ({ searchParams }) => {
  const params = await searchParams
  const page = params?.page,
    country = params?.country,
    search = params?.q || "software engineering jobs",
    employmentType = params?.employment_type as EmploymentTypes

  const jobs = await getJobs({
    page,
    country,
    query: search,
    employment_types: employmentType,
  })
  return (
    <Suspense fallback={<PageLoader />}>
      <JobListings jobs={jobs || []} />
    </Suspense>
  )
}

export default HomePage
