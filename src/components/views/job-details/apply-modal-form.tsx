import AppInput from "@/components/molecules/app-input"
import FileDragAndDrop from "@/components/molecules/file-input"
import { FC, FormState } from "@/utils/types"
import { Button, Textarea } from "@heroui/react"
import React, { useActionState, useEffect, useRef, useState } from "react"
import ResumeUploadContent from "./resume-upload-content"
import { toast } from "react-toastify"
import { useValidation } from "@/hooks/formHooks"
import { applyPayloadSchema } from "@/lib/schemas"
import { applyToJob } from "@/app/job-details/[id]/actions"
import { ACCEPTABLE_RESUME_EXTENSIONS } from "@/utils/constants"

type Props = {
  close: () => void
}

const ApplyModalForm: FC<Props> = ({ close }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [files, setFiles] = useState<File[]>([])

  const { errors, touched, hasErrors, markFieldTouched } = useValidation(
    applyPayloadSchema,
    formRef
  )
  const [state, action, loading] = useActionState<FormState, FormData>(
    applyToJob,
    {}
  )

  const onFileChange = (files: FileList) => {
    if (files.length > 1) {
      return toast.error(
        "This field takes just one file. Please, upload only one file."
      )
    }
    const ext = files[0].name.split(".").pop() as string
    const isValid = ACCEPTABLE_RESUME_EXTENSIONS.has(ext)
    if (!isValid) {
      toast.error(
        "The file you tried to upload does not match the requested format, so it was not saved."
      )
    } else {
      setFiles([...files])
      toast.success("File validation successful")
    }
  }

  useEffect(() => {
    if ("success" in state) {
      toast.success(state.success.message)
      close()
    }
  }, [state])

  return (
    <form action={action} className="max-h-[500px] overflow-auto" ref={formRef}>
      <main className="p-5 grid gap-5">
        <AppInput
          name="fullname"
          label="Full name"
          placeholder="John Doe"
          isInvalid={touched.fullname && !!errors.fullname}
          errorMessage={touched.fullname ? errors.fullname : ""}
          onChange={(e) => markFieldTouched(e.currentTarget.name)}
        />
        <AppInput
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          isInvalid={touched.email && !!errors.email}
          errorMessage={touched.email ? errors.email : ""}
          onChange={(e) => markFieldTouched(e.currentTarget.name)}
        />
        <FileDragAndDrop
          accept="application/pdf, .doc, .docx"
          name="resume"
          onFileChange={onFileChange}
          files={files}
          label="Resume"
        >
          <ResumeUploadContent />
        </FileDragAndDrop>
        <Textarea
          name="coverLetter"
          variant="bordered"
          color="primary"
          label="Cover letter"
          labelPlacement="outside"
          classNames={{
            inputWrapper: "border-1 border-gray-200 rounded shadow-none",
            input:
              "placeholder:text-gray-700 placeholder:opacity-50 text-body-sm",
            label: "text-gray text-[13px] font-[500px]",
          }}
          isInvalid={touched.coverLetter && !!errors.coverLetter}
          errorMessage={touched.coverLetter ? errors.coverLetter : ""}
          onChange={(e) => markFieldTouched(e.currentTarget.name)}
        />
      </main>
      <footer className="flex items-center justify-end p-5 gap-5 border-t border-gray-50 sticky bottom-0 bg-white z-[11]">
        <Button
          variant="bordered"
          radius="sm"
          className="border px-4.5 py-4"
          size="md"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          color="primary"
          radius="sm"
          size="md"
          className="px-4.5 py-4 disabled:cursor-not-allowed disabled:bg-neutral-400"
          disabled={!files.length || hasErrors}
          isLoading={loading}
        >
          Apply
        </Button>
      </footer>
    </form>
  )
}

export default ApplyModalForm
