import { EmploymentTypes } from "@/utils/enums"

export const LISTINGS_QUERY_KEYS = {
  COUNTRY: "country",
  PAGE: "page",
  SEARCH: "q",
  EMPLOYMENT_TYPE: "employment_type",
} as const

export const INIT_PARAMS = {
  PAGE: { key: LISTINGS_QUERY_KEYS.PAGE, value: "1" },
  SEARCH: { key: LISTINGS_QUERY_KEYS.SEARCH, value: null },
  COUNTRY: { key: LISTINGS_QUERY_KEYS.COUNTRY, value: null },
  EMPLOYMENT_TYPE: {
    key: LISTINGS_QUERY_KEYS.EMPLOYMENT_TYPE,
    value: `${EmploymentTypes.CONTRACTOR},${EmploymentTypes.FULLTIME},${EmploymentTypes.INTERN},${EmploymentTypes.PARTTIME}`,
  },
} as const
