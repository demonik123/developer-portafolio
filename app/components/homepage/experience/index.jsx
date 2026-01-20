// @flow strict

import Image from "next/image";
import { getMessages, getTranslations } from "next-intl/server";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

export default async function Experience() {
  const t = await getTranslations("experience");
  const messages = await getMessages();
  const items = messages?.experience?.items ?? [];

  return (
    <div id="experience" className="relative overflow-hidden px-3 py-0">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] z-1"
      />

      <div className="flex justify-center my-5 lg:py-4">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-primary/50"></span>
          <span className="bg-primary w-fit text-primary-foreground p-2 px-5 text-xl rounded-md shadow-subtle">
            {t("title")}
          </span>
          <span className="w-24 h-[2px] bg-primary/50"></span>
        </div>
      </div>

      <div className="py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {items.slice(0,4).map((experience, idx) => (
                <GlowCard
                  key={experience.id ?? idx}
                  identifier={`experience-${experience.id ?? idx}`}
                >
                  <div className="p-4 relative">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-primary">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-6 px-3 py-4">
                      <div className="text-primary transition-transform duration-300 hover:scale-110">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-1 font-semibold text-foreground">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
