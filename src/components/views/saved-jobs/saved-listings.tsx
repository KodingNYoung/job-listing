"use client"

import React from "react"
import { useSavedJobs } from "@/provider/saved-jobs"
import { Button } from "@heroui/react"
import ListingCard from "@/components/organism/listing-card"
import Icon from "@/components/atoms/icon"
import PageLoader from "@/components/atoms/page-loader"

const SavedListings = () => {
  const { jobs, removeJob, loading } = useSavedJobs()
  return loading ? (
    <div className="flex items-center justify-center">
      <PageLoader />
    </div>
  ) : (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 ">
      {Object.values(jobs).map((job) => (
        <ListingCard
          key={job.job_id}
          actions={
            <Button
              isIconOnly
              color="danger"
              variant="light"
              size="sm"
              onClickCapture={(e) => {
                e.stopPropagation()
              }}
              onPress={() => {
                removeJob(job.job_id)
              }}
            >
              <Icon name="icon-trash-01" size={16} />
            </Button>
          }
          job={job}
        />
      ))}
    </div>
  )
}

export default SavedListings
