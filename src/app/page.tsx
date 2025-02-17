import JobListings from "@/components/views/job-listings"
import { PageFC } from "@/utils/types"
import { Suspense } from "react"
import PageLoader from "@/components/atoms/page-loader"

const HomePage: PageFC = async () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <JobListings />
    </Suspense>
  )
}

export default HomePage
