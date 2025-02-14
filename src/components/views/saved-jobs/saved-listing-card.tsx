"use client"
import Icon from "@/components/atoms/icon"
import ListingCard from "@/components/organism/listing-card"
import { Button } from "@heroui/react"
import React from "react"

const SavedListingCard = () => {
  return (
    <ListingCard
      actions={
        <Button
          isIconOnly
          color="danger"
          variant="light"
          size="sm"
          onClickCapture={(e) => e.stopPropagation()}
        >
          <Icon name="icon-trash-01" size={16} />
        </Button>
      }
    />
  )
}

export default SavedListingCard
