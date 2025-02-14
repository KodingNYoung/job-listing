"use client"
import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/icon-names"
import { FC, TWClassNames } from "@/utils/types"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
  ModalSlots,
} from "@heroui/react"
import React from "react"
import Icon from "../atoms/icon"
import Typography from "../atoms/typography"

export type AppModalProps = ModalProps & {
  classNames?: { [slot in ModalSlots]?: TWClassNames }
  header?: {
    title?: string
    subtitle?: string
    closeIcon?: IconNames | false
  }
}

const AppModal: FC<AppModalProps> = ({
  children,
  classNames,
  header,
  onClose,
  ...props
}) => {
  return (
    <Modal
      placement="center"
      onClose={onClose}
      classNames={{
        backdrop: cls(classNames?.backdrop),
        base: cls("shadow-none", classNames?.base),
        closeButton: cls(
          "mt-5 mr-5 top-0 end-0 border-0",
          classNames?.closeButton
        ),
        header: cls(
          "flex items-center justify-between p-5 border-b border-gray-100",
          classNames?.backdrop
        ),
        body: cls("p-0", classNames?.body),
      }}
      closeButton={
        <Button
          variant="bordered"
          className="w-10 h-10 flex items-center border-0"
          onPress={onClose}
          isIconOnly
        >
          <Icon name={header?.closeIcon || "icon-x-close"} size={20} />
        </Button>
      }
      {...props}
    >
      <ModalContent>
        {header && (
          <ModalHeader>
            <header className="">
              {(header?.title || header.subtitle) && (
                <div className="grid gap-1.5">
                  {header.title && (
                    <Typography
                      as="h2"
                      variants="title-lg"
                      className="text-gray-900"
                    >
                      {header.title}
                    </Typography>
                  )}
                  {header.subtitle && (
                    <Typography
                      as="span"
                      variants="label-sm"
                      className="text-gray-500"
                    >
                      {header.subtitle}
                    </Typography>
                  )}
                </div>
              )}
            </header>
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AppModal
