import { RAPID_API_BASEURL, RAPID_API_KEY } from "@/utils/constants"
import { EmploymentTypes } from "@/utils/enums"
import { JobListing } from "@/utils/types"
import { cache } from "react"
import { toast } from "react-toastify"

type GetJobsResponse = {
  data: JobListing[]
}

export const getJobs = cache(
  async (
    options: {
      query?: string
      page?: string
      country?: string
      employment_types?: EmploymentTypes
    } = {}
  ) => {
    try {
      const query = new URLSearchParams()
      Object.keys(options).forEach((key) => {
        const value = options[key as keyof typeof options]
        if (value !== undefined) {
          query.set(key, value)
        }
      })
      const url = `${RAPID_API_BASEURL}search?${query}&num_pages=1&date_posted=all&fields=employer_logo,job_title,employer_name,job_city,job_state,job_country,job_employment_type,job_salary_currency,job_min_salary,job_posted_at_datetime_utc,job_salary_currency,job_max_salary,job_salary_period`
      console.log(url)
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": RAPID_API_KEY as string,
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
      })
      const data = (await response.json()) as GetJobsResponse
      console.log(data, response)
      return data.data
    } catch {
      toast.error("Error fetching jobs")
      return []
    }
  }
)
type GetJobDetailResponse = {
  data: JobListing[]
}

export const getJobDetails = cache(async (job_id: string) => {
  try {
    const url = `${RAPID_API_BASEURL}job-details?job_id=${job_id}&fields=employer_logo,job_title,employer_name,job_city,job_state,job_country,job_employment_type,job_salary_currency,job_min_salary,job_posted_at_datetime_utc,job_salary_currency,job_max_salary,job_salary_period,job_description,employer_website`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPID_API_KEY as string,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    })
    const data = (await response.json()) as GetJobDetailResponse
    return data.data
  } catch {
    toast.error("Error fetching job")
    return []
  }
})
