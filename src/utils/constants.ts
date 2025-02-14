import { EmploymentTypes } from "./enums"

export const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY

// ROUTES
export const ROUTES = {
  JOB_LISTINGS: "/",
  SAVED_JOBS: "/saved-jobs",
  JOB_DETAILS: "/job-details",
  LOGIN: "/login",
  REGISTER: "/register",
} as const

export const RAPID_API_BASEURL = "https://jsearch.p.rapidapi.com/"

export const EMPLOYMENT_TYPES = [
  { label: "Full Time", query: EmploymentTypes.FULLTIME },
  { label: "Contractor", query: EmploymentTypes.CONTRACTOR },
  { label: "Part Time", query: EmploymentTypes.PARTTIME },
  { label: "Intern", query: EmploymentTypes.INTERN },
]
