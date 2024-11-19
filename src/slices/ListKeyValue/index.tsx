"use client";
import Bounded from "@/Components/Bounded/Bounded";
import Heading from "@/Components/Heading/Heading";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
/**
 * Props for `ListKeyValue`.
 */
export type ListKeyValueProps = SliceComponentProps<Content.ListKeyValueSlice>;

/**
 * Component for "ListKeyValue" Slices.
 */
const ListKeyValue = ({ slice }: ListKeyValueProps): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
      tl.fromTo(
        ".tech-row",
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400),
        },
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400),
          ease: "power3.inOut",
        }
      );
    }, component);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
      className="overflow-clip"
    >
      <Bounded>
        <Heading title={slice.primary.title} size="lg" type="h1" />
      </Bounded>

      {slice.primary.list.map((item, index) => (
        <div
          key={index}
          className="text-slate-200 justify-center items-center flex mb-8 gap-4 prose tracking-tighter tech-row font-bold text-8xl"
        >
          {Array.from({ length: 19 }, (_, index) =>
            index === 10 ? (
              <PrismicLink
                style={{ color: item.color as string }}
                key={index}
                field={item.link}
                className="teck-item no-underline font-bold"
              >
                {item.name}
              </PrismicLink>
            ) : (
              <div key={index} className="inline">
                <span className="teck-item">{item.name}</span>
                <span className="w-[20px] h-[20px] aspect-square rounded-full"></span>
              </div>
            )
          )}
        </div>
      ))}
    </section>
  );
};

export default ListKeyValue;
