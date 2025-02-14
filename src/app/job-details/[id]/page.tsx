import { PageFC } from "@/utils/types"
import React from "react"

const JobDetails: PageFC = async ({ params, searchParams }) => {
  console.log(await params, searchParams)
  return <div>JobDetails</div>
}

export default JobDetails
