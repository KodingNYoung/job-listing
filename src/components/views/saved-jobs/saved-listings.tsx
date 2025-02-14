import React from "react"
import SavedListingCard from "./saved-listing-card"

const SavedListings = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 ">
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
      <SavedListingCard />
    </div>
  )
}

export default SavedListings
