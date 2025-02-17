"use client"
import Typography from "@/components/atoms/typography"
import AppCheckboxGroup from "@/components/molecules/app-checkbox-group"
import AppInput from "@/components/molecules/app-input"
import AppSelect from "@/components/molecules/app-select"
import { EMPLOYMENT_TYPES } from "@/utils/constants"
import { FC } from "@/utils/types"
import React, { ChangeEvent } from "react"
import { INIT_PARAMS, LISTINGS_QUERY_KEYS } from "./utils"
import { useQueryParams } from "@/hooks/utilityHooks"
import { useDebouncedCallback } from "use-debounce"

const ListingsActions: FC = () => {
  const { batchSet } = useQueryParams()

  const handleSearch = useDebouncedCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      batchSet([
        {
          key: LISTINGS_QUERY_KEYS.SEARCH,
          value: (evt.target.value as string) || null,
        },
        INIT_PARAMS.PAGE,
      ])
    },
    300
  )

  return (
    <div className="min-w-[350px] flex-1 md:border border-gray-100 md:p-3 py-4 sticky top-[75px] md:top-[191px] grid gap-4 rounded bg-white">
      <section className="grid gap-1">
        <Typography element="header" className="text-body-lg text-gray-500">
          Search:
        </Typography>
        <AppInput
          placeholder="Describe the job you want..."
          onChange={handleSearch}
        />
      </section>
      <section className="grid gap-4">
        <Typography
          element="header"
          className="text-body-lg text-gray-500 !leading-none"
        >
          Filters:
        </Typography>
        <AppCheckboxGroup
          label="Employment Type"
          items={EMPLOYMENT_TYPES.map((type) => ({
            label: type.label,
            value: type.query,
          }))}
          onChange={(value) => {
            batchSet([
              {
                key: LISTINGS_QUERY_KEYS.EMPLOYMENT_TYPE,
                value: value && value.length ? value.toString() : null,
              },
              INIT_PARAMS.PAGE,
            ])
          }}
        />
        <AppSelect
          label="Country"
          placeholder="Select country where you want to work"
          items={[{ value: "us", label: "USA" }]}
          onChange={(evt) =>
            batchSet([
              {
                key: LISTINGS_QUERY_KEYS.COUNTRY,
                value: evt.target.value || null,
              },
              INIT_PARAMS.PAGE,
            ])
          }
        />
      </section>
    </div>
  )
}

export default ListingsActions
