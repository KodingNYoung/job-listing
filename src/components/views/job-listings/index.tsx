import { FC } from "@/utils/types"
import React from "react"
import ListingsActions from "./listings-actions"
import Listings from "./listings"

const JobListings: FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pt-[76px]">
      <div className="px-5 flex flex-col h-full">
        <h1 className="text-headline-md py-10 md:sticky top-[75px] z-[1] bg-white">
          Job Listings
        </h1>
        <div className="flex gap-5 items-start flex-wrap flex-1">
          <ListingsActions />
          <Listings />
        </div>
      </div>
    </div>
  )
}

export default JobListings
