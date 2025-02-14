// import { getJobs } from "@/lib/data";
import JobListings from "@/components/views/jobs"
import { PageFC } from "@/utils/types"

const HomePage: PageFC = async () => {
  //   const jobs = await getJobs();
  //   console.log(jobs)
  return <JobListings />
}

export default HomePage
