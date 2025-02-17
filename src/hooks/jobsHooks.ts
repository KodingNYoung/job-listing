import { useQuery } from "@tanstack/react-query"
import { useQueryParams } from "./utilityHooks"
import { getJobs } from "@/lib/data"
import { EmploymentTypes } from "@/utils/enums"
import { toast } from "react-toastify"

export const useJobListings = () => {
  const { get } = useQueryParams()

  const query = get("q") || "software engineering jobs",
    page = get("page") || "1",
    country = get("country") || "us",
    employment_types = (get("employment_type") ?? undefined) as EmploymentTypes

  console.log(query)

  const result = useQuery({
    queryKey: ["job-listings", query, page, country, employment_types],
    queryFn: async () =>
      await getJobs({ query, page, country, employment_types }),
  })

  if (result.error) {
    toast.error("Error fetching jobs")
  }

  return { ...result, jobs: result.data || [] }
}
