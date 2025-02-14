import Icon from "@/components/atoms/icon"
import AppPopover from "@/components/molecules/app-popover"
import Item from "@/components/molecules/item"
import { ROUTES } from "@/utils/constants"
import { FC } from "@/utils/types"
import { Avatar, Divider } from "@heroui/react"
import Link from "next/link"
import React from "react"

const UserDropdown: FC = () => {
  return (
    <AppPopover
      placement="bottom-end"
      classNames={{
        content:
          "min-w-[230px] grid items-stretch justify-normal p-0 rounded-md",
        trigger: "cursor-pointer",
      }}
      trigger={
        <Avatar
          fallback={<Icon name="icon-user-01" size={20} />}
          className="h-[50px] w-[50px]"
          isBordered
        />
      }
    >
      <Link href={ROUTES.JOB_LISTINGS}>
        <Item
          startContent={
            <Icon
              name="icon-list"
              size={20}
              className="group-hover/item:text-primary-used"
            />
          }
          label="Job Listings"
          titleProps={{ variants: "body-md" }}
        />
      </Link>
      <Link href={ROUTES.SAVED_JOBS}>
        <Item
          startContent={
            <Icon
              name="icon-heart"
              size={20}
              className="group-hover/item:text-primary-used"
            />
          }
          label="Saved Jobs"
          titleProps={{ variants: "body-md" }}
        />
      </Link>
      <Divider className="bg-divider" />
      <Link href={ROUTES.LOGIN}>
        <Item
          startContent={
            <Icon
              name="icon-log-in-01"
              size={20}
              className="group-hover/item:text-primary-used"
            />
          }
          label="Sign in"
          titleProps={{ variants: "body-md" }}
        />
      </Link>
    </AppPopover>
  )
}

export default UserDropdown
