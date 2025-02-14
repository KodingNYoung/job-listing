import { FC } from "@/utils/types"
import React from "react"
import Icon from "@/components/atoms/icon"
import Typography from "@/components/atoms/typography"
import { Button } from "@heroui/react"

const ResumeUploadContent: FC = () => {
  return (
    <div className="grid gap-1 justify-items-center px-5 py-3">
      <div className="size-14 flex items-center justify-center bg-primary-50 rounded-full ">
        <Icon name="icon-upload-cloud-02" size={28} className="text-primary" />
      </div>
      <div className="flex flex-col gap-0.5 items-center">
        <Typography variants="body-md" className="text-gray-600">
          <span className="text-gradient text-semibold-sm">
            Click to upload
          </span>{" "}
          or drag and drop
        </Typography>
        <Typography variants="body-xs" className="text-gray-400">
          PDF or DOC
        </Typography>
      </div>
      <Typography
        as="div"
        variants="body-xs"
        weight={600}
        className="after:flex-1 after:h-px after:bg-gray-100 before:flex-1 before:h-px before:bg-gray-100 text-gray-300 w-full flex items-center gap-2"
      >
        OR
      </Typography>
      <Button className="px-5 py-3" type="button">
        Browse Files
      </Button>
    </div>
  )
}

export default ResumeUploadContent
