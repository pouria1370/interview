"use client";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface Iprops {
  field?: ImageField;
  classnName?: string;
  alt: string;
}

const Image = ({ classnName, field, alt }: Iprops) => {
  const component = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        { opacity: 0, scale: 1.4 },
        { opacity: 1, scale: 1, ease: "power3.inOut", duration: 1.3 }
      );
    });
    // windows onmouseMove

    window.onmousemove = (e) => {
      if (!component) return;
      const componentCoordination = component.current?.getBoundingClientRect();
      const componentCenterX =
        componentCoordination?.left ?? 0 + componentCoordination?.width / 2;
      const distanceToCenter = e.x - componentCenterX;
      const distanceToCenterPercentage =
        1 - Math.abs(distanceToCenter / componentCoordination?.width / 2);
      gsap
        .timeline({
          defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
        })
        .to(
          ".avatar",
          {
            rotation: gsap.utils.clamp(-2, 2, 5 * distanceToCenterPercentage),
            duration: 0.5,
          },
          0
        )
        .to(
          ".highlight",
          {
            opacity: -distanceToCenter + 0.7,
            x: -10 + 20 * distanceToCenterPercentage,
          },
          0
        );
    };

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <div
        ref={component}
        className={clsx("relative avatar opacity-0 ", classnName)}
      >
        <PrismicNextImage
          field={field}
          alt={alt}
          imgixParams={{ q: 90 }}
          className={clsx("border-slate-300  border-[1px] rounded-lg ")}
        />
        <div className="highlight  border-slate-300  border-[1px] rounded-lg  inset-0 absolute z-0 bg-gradient-to-tr from-transparent to-black opacity-40 " />
      </div>
    </div>
  );
};

export default Image;
