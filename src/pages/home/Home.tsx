import '../../styles/App.css'
import { Button } from 'flowbite-react';
import { ImageCta } from '../../shared/imageCTA';
import heroImg from "../../assets/hero.png"; // ← replace with your own image
import { RouterLink } from '../../shared/utils';

export default function MyApp(){

  
  return(
    <div className='flex min-h-screen flex-col'>
        <hr/>
      <main className='page-container flex-1 py-8'>
        <Hero/>
        <ImageCta
          title="Projects"
          text="From InSight data Analysis to a full mission study for the LGWA, check out my projects!"
          imageSrc={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"}
          imageAlt="Collage of my projects"
          href="/projects"
        />
        <ImageCta
          title="Activities"
          text="Whether in Switzerland or in Belgium, see where my path has led me thus far."
          imageSrc={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"}
          imageAlt="Collage of my projects"
          href="/activities"
          reverse
        />
        <ImageCta
          title="Get to know me a bit better"
          text="I am Pascal"
          imageSrc={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"}
          imageAlt="…"
          href="/about"
        />
        <ImageCta
          title="Applets"
          text="Ideas for Applets here"
          imageSrc={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"}
          imageAlt="…"
          href="/applets"
          reverse
        />
      </main>
      <div className='about-page'>
        <AboutPage/>
      </div>
    </div>
  );
}

function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>
        Hello there. <br/> How are you?
      </p>
    </>
  );
}

export function Hero() {
  return (
    <section className="grid py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="mb-4 max-w-2xl text-4xl leading-none font-bold tracking-tight text-foreground md:text-5xl xl:text-6xl">
          Hi, I'm Pascal
        </h1>
 
        <p className="mb-6 max-w-2xl text-foreground/75 md:text-lg lg:mb-8 lg:text-xl">
          Electrical Engineer, Space Enthusiast, RF Apprentice, LISA/LGWA/ET Fan
        </p>
 
        <div className="flex flex-wrap gap-3">
          {/* Primary CTA — themed Flowbite button (orange, dark text) */}
          <Button as={RouterLink} href="/projects" size="lg" className="inline-flex items-center">
            What should this button do?
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
 
          {/* Secondary CTA — outlined, in your palette */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-5 py-3 text-center text-base font-medium text-foreground hover:bg-foreground/5 focus:ring-4 focus:ring-primary-300 focus:outline-none"
          >
            Get in touch
          </a>
        </div>
      </div>
 
      <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
        <img src={heroImg} alt="Portrait of Pascal" className="w-full rounded-lg object-cover" />
      </div>
    </section>
  );
}
