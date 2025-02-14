"use client"

import { useStorage } from "@/hooks/storageHooks"
import { getJobDetails } from "@/lib/data"
import { StorageKeys } from "@/utils/enums"
import { FC, JobListing } from "@/utils/types"
import { createContext, useContext, useEffect, useState } from "react"

type SavedJobsContextType = {
  jobs: Record<string, JobListing>
  loading: boolean
  removeJob: (id: string) => void
}

const SavedJobsContext = createContext<SavedJobsContextType>({
  jobs: {},
  loading: false,
  removeJob: () => {},
})

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext)
  if (!context) {
    throw new Error("useSavedJobs should be called inside a SavedJobsProvider")
  }
  return context
}

export const SavedJobsProvider: FC = ({ children }) => {
  const { data, set } = useStorage<string[]>(StorageKeys.SAVED_JOBS)

  const [jobs, setJobs] = useState<Record<string, JobListing>>({})
  const [loading, setLoading] = useState(false)

  const getJobsByIds = async (ids: string[]) => {
    setLoading(true)
    const jobs = (await getJobDetails(ids.join(","))) as JobListing[]
    console.log({ jobs })
    setLoading(false)

    const memoizedJobs = (jobs || []).reduce(
      (cumm, curr) => ({ ...cumm, [curr.job_id]: curr }),
      {} as Record<string, JobListing>
    )
    setJobs(memoizedJobs)
  }

  const removeJob = (id: string) => {
    const newSavedJobs = new Set(data || [])

    newSavedJobs.delete(id)

    set([...newSavedJobs])
  }

  useEffect(() => {
    if (!data || !data.length) return
    getJobsByIds(data)
  }, [data])

  return (
    <SavedJobsContext.Provider value={{ jobs, loading, removeJob }}>
      {children}
    </SavedJobsContext.Provider>
  )
}
