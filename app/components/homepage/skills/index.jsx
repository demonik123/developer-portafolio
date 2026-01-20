// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default async function Skills() {
  const t = await getTranslations("skills");
  return (
    <div
      id="skills"
      className="relative lg:my-8 sm:my-8 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="flex justify-center my-5 lg:py-4">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-primary/50"></span>
          <span className="bg-primary w-fit text-primary-foreground p-2 px-5 text-xl rounded-md shadow-subtle">
            {t("title")}
          </span>
          <span className="w-24 h-[2px] bg-primary/50"></span>
        </div>
      </div>

      <div className="w-full ">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-border bg-card shadow-subtle group-hover:border-primary transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-foreground text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
