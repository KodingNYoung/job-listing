import { FC } from "@/utils/types";
import { IconNames } from "@/utils/icon-names";
import { HTMLProps } from "react";
import { cls } from "@/utils/helpers";

type Props = HTMLProps<HTMLSpanElement> & {
  name: IconNames;
  size?: number | string;
};

const Icon: FC<Props> = ({ className, name, size, ...props }) => {
  return (
    <span
      style={{ fontSize: size }}
      className={cls(
        "text-inherit text-sm !leading-none",
        name,
        className
      )}
      {...props}
    />
  );
};

export default Icon;
