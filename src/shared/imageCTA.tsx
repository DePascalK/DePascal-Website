import { Button } from "flowbite-react";

type ImageCtaProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  buttonLabel?: string;
  /** put the image on the right instead of the left (desktop only) */
  reverse?: boolean;
};

export function ImageCta({
  title,
  text,
  imageSrc,
  imageAlt,
  href,
  buttonLabel = "Explore",
  reverse = false,
}: ImageCtaProps) {
  return (
    <section className="items-center gap-8 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16">
      <img
        className={`w-full rounded-lg ${reverse ? "md:order-last" : ""}`}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="mb-6 text-foreground/75 md:text-lg">{text}</p>
        <Button href={href} className="inline-flex w-fit items-center">
          {buttonLabel}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}