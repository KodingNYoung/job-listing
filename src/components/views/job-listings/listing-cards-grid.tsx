import PageLoader from "@/components/atoms/page-loader"
import ListingCard from "@/components/organism/listing-card"
import { useJobListings } from "@/hooks/jobsHooks"
import { FC } from "@/utils/types"
import React from "react"

const ListingCardsGrid: FC = () => {
  const { jobs, isLoading } = useJobListings()

  return isLoading ? (
    <div className="flex justify-center items-center h-[50vh]">
      <PageLoader />
    </div>
  ) : (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 ">
      {jobs.map((job) => (
        <ListingCard key={job.job_id} job={job} />
      ))}
    </div>
  )
}

export default ListingCardsGrid
