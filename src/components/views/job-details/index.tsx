import Typography from "@/components/atoms/typography"
import { FC, JobListing } from "@/utils/types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ApplyAction from "./apply-action"
import SaveAction from "./save-action"
import BackButton from "./back-button"
import fallbackLogo from "@/assets/images/logo-fallback.png"

dayjs.extend(relativeTime)

type Props = {
  job: JobListing
}

const JobDetails: FC<Props> = ({ job }) => {
  return (
    <div className="px-5 pb-10 flex flex-col">
      <header className="md:px-10 sticky top-[75px] z-1 bg-white border-b border-gray-100 py-5 md:pb-10 md:pt-5">
        <BackButton />
        <div className="flex justify-between items-center flex-wrap pt-5">
          <Link
            href={job.employer_website || ""}
            target="_blank"
            rel="noreferer"
            className="flex items-center gap-3"
          >
            <Image
              src={job.employer_logo || fallbackLogo}
              height={40}
              width={40}
              alt="company logo"
              className="rounded"
            />
            <Typography variants="body-lg" weight={600}>
              {job.employer_name}
            </Typography>
          </Link>
          <div className="flex items-center gap-2">
            <SaveAction id={job.job_id} />
            <ApplyAction />
          </div>
        </div>
        <Typography variants="headline-md" className="mt-3">
          {job.job_title}
        </Typography>
        <Typography
          variants="body-md"
          className="text-gray-800"
          overflowLines={1}
        >
          {job.job_city}, {job.job_state}, {job.job_country} • Posted{" "}
          {dayjs(job.job_posted_at_datetime_utc).fromNow()}
        </Typography>
        <Typography variants="body-md" className="text-gray-800">
          {" "}
          {job.job_employment_type}
        </Typography>
        <Typography variants="body-md" className="text-gray-800">
          {!!job.job_min_salary &&
            `• $${job.job_min_salary} - $${job.job_max_salary} per ${job.job_salary_period}`}
        </Typography>
      </header>
      <Typography className="whitespace-break-spaces py-5 md:px-10">
        {job.job_description}
      </Typography>
    </div>
  )
}

export default JobDetails
