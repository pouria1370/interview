import Bounded from "@/Components/Bounded/Bounded";
import Button from "@/Components/Button/Button";
import Heading from "@/Components/Heading/Heading";
import Image from "@/Components/Image/Image";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
/**
 * Props for `ArtickeGist`.
 */
export type ArtickeGistProps = SliceComponentProps<Content.ArtickeGistSlice>;

/**
 * Component for "ArtickeGist" Slices.
 */
const ArtickeGist = ({ slice }: ArtickeGistProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid md:grid-cols-[2fr,1fr]">
        <div>
          <Heading size="lg" title={slice.primary.title} type="h1" />
          <div className="text-slate-700 prose prose-xl  col-start-1">
            <PrismicRichText field={slice.primary.articletext} />
          </div>
          <Button
            label={slice.primary.articlebuttontext}
            link={slice.primary.articlebuttonlink}
          />
        </div>
        <div className="row-start-1 md:row-end-2 max-w-sm md:col-start-2">
          <Image
            classnName="w-[75%] text-center"
            field={slice.primary.articleimage}
            alt="Pouria Kalantari (Frontend Developer)"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default ArtickeGist;
