"use client"

import { FC, JobListing } from "@/utils/types"
import React from "react"
import ListingCard from "../../organism/listing-card"
import AppPagination from "@/components/organism/app-pagination"
import { useQueryParams } from "@/hooks/utilityHooks"
import { LISTINGS_QUERY_KEYS } from "./utils"

type Props = {
  jobs: JobListing[]
}

const Listings: FC<Props> = ({ jobs }) => {
  const { set, get } = useQueryParams()

  return (
    <section className="flex-[3] flex flex-col gap-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 ">
        {jobs.map((job) => (
          <ListingCard key={job.job_id} job={job} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full sticky bottom-0 bg-white">
        <AppPagination
          total={4}
          page={parseInt(get(LISTINGS_QUERY_KEYS.PAGE) || "1")}
          onChange={(page) => set(LISTINGS_QUERY_KEYS.PAGE, page)}
        />
      </div>
    </section>
  )
}

export default Listings
