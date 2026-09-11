import { Concerts } from "../sections/home/Concerts";
import { Contacts } from "../sections/home/Contacts";
import { Faq } from "../sections/home/Faq";
import { Hero } from "../sections/home/Hero";
import { Marquee } from "../sections/home/Marquee";
import { Pricing } from "../sections/home/Pricing";
import { Stereotypes } from "../sections/home/Stereotypes";
import { Students } from "../sections/home/Students";
import { Teachers } from "../sections/home/Teachers";
import { TrialSteps } from "../sections/home/TrialSteps";
import { Why } from "../sections/home/Why";

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stereotypes />
      <Why />
      <Pricing />
      <TrialSteps />
      <Teachers />
      <Students />
      <Concerts />
      <Faq />
      <Contacts />
    </>
  );
}
