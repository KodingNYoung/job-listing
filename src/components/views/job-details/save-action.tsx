"use client"

import Icon from "@/components/atoms/icon"
import { useStorage } from "@/hooks/storageHooks"
import { StorageKeys } from "@/utils/enums"
import { FC } from "@/utils/types"
import { Button } from "@heroui/react"
import React, { useMemo } from "react"
import { toast } from "react-toastify"

type Props = {
  id: string
}

const SaveAction: FC<Props> = ({ id }) => {
  const { data, set } = useStorage<string[]>(StorageKeys.SAVED_JOBS)

  const isSaved = useMemo(() => new Set(data).has(id), [data, id])

  const toggleJobSave = () => {
    const newSavedJobs = new Set(data ?? [])

    if (!isSaved) {
      newSavedJobs.add(id)
    } else {
      newSavedJobs.delete(id)
    }

    set([...newSavedJobs])
    toast.success(
      `You have successfully ${isSaved ? "unsaved" : "saved"} this job.`
    )
  }

  return (
    <Button
      color="primary"
      size="sm"
      variant="bordered"
      endContent={<Icon name={isSaved ? "icon-check" : "icon-heart"} />}
      className="border"
      onPress={toggleJobSave}
    >
      {isSaved ? "Saved" : "Save"}
    </Button>
  )
}

export default SaveAction
