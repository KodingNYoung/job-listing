import { RAPID_API_BASEURL, RAPID_API_KEY } from "@/utils/constants"

export const getJobs = async () =>
  //   options: {
  //     query?: string
  //     page?: number
  //     country?: string
  //     employment_types?: EmploymentTypes
  //   } = {}
  {
    try {
      const response = await fetch(
        `${RAPID_API_BASEURL}search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": RAPID_API_KEY as string,
            "x-rapidapi-host": "jsearch.p.rapidapi.com",
          },
        }
      )
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }
