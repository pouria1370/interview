import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";
interface IProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  title: KeyTextField;
  size?: "lg" | "sm" | "md";
}
const Heading = ({
  title,
  size = "md",
  type: Comp = "h1",
  className,
}: IProps) => {
  return (
    <Comp
      className={clsx(
        "text-slate-300 ",
        size === "md" && "text-2xl",
        size === "sm" && "text-xl",
        size === "lg" && "text-4xl",
        className
      )}
    >
      {title}
    </Comp>
  );
};

export default Heading;
