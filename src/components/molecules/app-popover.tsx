import { FC } from "@/utils/types";
import {
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from "@heroui/react";
import React, { ReactNode } from "react";

type Props = Omit<PopoverProps, "children"> & {
  trigger: ReactNode;
};

const AppPopover: FC<Props> = ({ trigger, children, ...props }) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default AppPopover;
