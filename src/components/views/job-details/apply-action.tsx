"use client"

import Icon from "@/components/atoms/icon"
import { FC } from "@/utils/types"
import { Button } from "@heroui/react"
import React, { useState } from "react"
import ApplyModal from "./apply-modal"

const ApplyAction: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        size="sm"
        color="primary"
        endContent={<Icon name="icon-link-external-02" />}
        onPress={() => setIsOpen(true)}
      >
        Apply
      </Button>
      <ApplyModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  )
}

export default ApplyAction
