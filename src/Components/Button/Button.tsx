import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface IProps {
  className?: string;
  label: KeyTextField;
  link?: LinkField;
  icon?: ReactNode;
}

const Button = ({ label, className, icon, link }: IProps) => {
  return (
    <PrismicNextLink field={link}>
      <div
        className={clsx(
          "flex group items-center relative overflow-hidden justify-between border w-fit hover:scale-105 hover:text-red-600 bg-slate-100 text-slate-400 p-2 border-slate-300 rounded-md ",
          className
        )}
      >
        {label}
        <span>{icon}</span>
        <div className="z-0 absolute transition-transform ease-out translate-y-9 group-hover:-translate-y-9 duration-300 bg-red-700 inset-0"></div>
      </div>
    </PrismicNextLink>
  );
};

export default Button;
