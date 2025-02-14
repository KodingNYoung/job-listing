import Typography from "@/components/atoms/typography"
import { ROUTES } from "@/utils/constants"
import { dummyJobs } from "@/utils/dummy"
import { FC } from "@/utils/types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Image from "next/image"
import Link from "next/link"
import React from "react"

dayjs.extend(relativeTime)

type Props = {
  actions?: []
}

const ListingCard: FC<Props> = ({ actions }) => {
  const job = dummyJobs[0]
  return (
    <Link
      href={`${ROUTES.JOB_DETAILS}/1`}
      className="border border-gray-100 rounded hover:shadow-sm transition-shadow duration-200 flex gap-4 items-start p-3 group/listing-card"
    >
      <Image
        src={job.employer_logo}
        height={56}
        width={56}
        alt="company logo"
        className="rounded"
      />
      <section className="grid flex-1">
        <Typography
          variants="body-lg"
          weight={700}
          className="text-primary-700 transition-colors group-hover/listing-card:text-primary"
          overflowLines={1}
        >
          {job.job_title}
        </Typography>
        <Typography
          variants="body-md"
          className="text-gray-800"
          overflowLines={1}
        >
          {job.employer_name} •{" "}
          <span className="text-gray-500">
            {job.job_city}, {job.job_state}, {job.job_country}
          </span>
        </Typography>
        <Typography
          variants="body-sm"
          className="text-gray-400"
          overflowLines={2}
        >
          {job.job_employment_type}{" "}
          {!!job.job_salary && `• ${job.job_salary} ${job.job_salary_period}`} •
          Posted {dayjs(job.job_posted_at_datetime_utc).fromNow()}
        </Typography>
      </section>
      {actions && actions.length ? "actions" : null}
    </Link>
  )
}

export default ListingCard
