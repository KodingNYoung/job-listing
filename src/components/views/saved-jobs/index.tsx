import Typography from "@/components/atoms/typography"
import { FC } from "@/utils/types"
import React from "react"
import SavedListings from "./saved-listings"

const SavedJobs: FC = () => {
  return (
    <div className="px-5">
      <header className="sticky top-[75px] z-[1] bg-white py-10">
        <Typography element="h1" variants="headline-md" className="">
          Saved Jobs
        </Typography>
      </header>
      <SavedListings />
    </div>
  )
}

export default SavedJobs
