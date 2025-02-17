import Typography from "@/components/atoms/typography"
import { FC } from "@/utils/types"
import React from "react"
import SavedListings from "./saved-listings"
import { SavedJobsProvider } from "@/provider/saved-jobs"

const SavedJobs: FC = () => {
  return (
    <SavedJobsProvider>
      <div className="pt-[75px] px-5">
        <header className="sticky top-[75px] z-[1] bg-white py-10">
          <Typography element="h1" variants="headline-md" className="">
            Saved Jobs
          </Typography>
        </header>
        <SavedListings />
      </div>
    </SavedJobsProvider>
  )
}

export default SavedJobs
