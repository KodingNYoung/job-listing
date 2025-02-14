import { FC, JobListing } from "@/utils/types"
import React from "react"
import ListingsActions from "./listings-actions"
import Listings from "./listings"

type Props = {
  jobs: JobListing[]
}

const JobListings: FC<Props> = ({ jobs }) => {
  return (
    <div className="px-5 flex flex-col">
      <h1 className="text-headline-md py-10 md:sticky top-[75px] z-[1] bg-white">
        Job Listings
      </h1>
      <div className="flex gap-5 items-start flex-wrap">
        <ListingsActions />
        <Listings jobs={jobs} />
      </div>
    </div>
  )
}

export default JobListings
