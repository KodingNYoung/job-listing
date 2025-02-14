import AppModal from "@/components/organism/app-modal"
import { FC } from "@/utils/types"
import React from "react"
import ApplyModalForm from "./apply-modal-form"

type Props = {
  close: () => void
  isOpen: boolean
}

const ApplyModal: FC<Props> = ({ close, isOpen }) => {
  return (
    <AppModal
      isOpen={isOpen}
      onClose={close}
      classNames={{ wrapper: "px-2", base: "w-full max-w-[460px] rounded-x20" }}
      header={{ title: "Apply" }}
    >
      <ApplyModalForm close={close} />
    </AppModal>
  )
}

export default ApplyModal
