import clsx from "clsx";
import React, { forwardRef, ReactNode } from "react";

interface BoundedProps {
  as?: React.ElementType;
  className?: string;
  children: ReactNode;
}
const Bounded = forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", children, className, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        {...props}
        className={clsx("px-4 py-4 md:py-8 xl:py-12 xl:px-10", className)}
      >
        {children}
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";
export default Bounded;
