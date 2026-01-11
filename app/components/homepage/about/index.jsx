// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-primary text-primary-foreground w-fit rotate-90 p-2 px-5 text-xl rounded-md shadow-subtle">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-primary/60"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-primary text-xl uppercase tracking-wide">
            Who I am?
          </p>
          <p className="text-muted-foreground text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;