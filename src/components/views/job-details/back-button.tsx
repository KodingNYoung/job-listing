"use client"

import Icon from "@/components/atoms/icon"
import { Button } from "@heroui/react"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton = () => {
  const { back } = useRouter()
  return (
    <Button
      variant="light"
      startContent={<Icon name="icon-arrow-narrow-left" size={20} />}
      onPress={() => back()}
    >
      Back
    </Button>
  )
}

export default BackButton
