// @flow strict
import Image from "next/image";
import { getMessages, getTranslations } from "next-intl/server";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "../../../assets/lottie/study.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

export default async function Education() {
  const t = await getTranslations("education");
  const messages = await getMessages();
  const items = messages?.education?.items ?? [];
  return (
    <div
      id="education"
      className="relative my-12 lg:my-24 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-hidden"
    >
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[160px] z-1"
      />

      <div className="flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-primary/50"></span>
          <span className="bg-primary w-fit text-primary-foreground p-2 px-5 text-xl rounded-md shadow-subtle">
            {t("title")}
          </span>
          <span className="w-24 h-[2px] bg-primary/50"></span>
        </div>
      </div>

      <div className="pb-2 px-2 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-auto">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {items.map((education, idx) => (
                <GlowCard
                  key={education.id ?? idx}
                  identifier={`education-${education.id ?? idx}`}
                >
                  <div className="p-4 relative text-foreground">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-primary">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-6 px-3 py-4">
                      <div className="text-primary transition-transform duration-300 hover:scale-110">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-1 font-semibold uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {education.institution}
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
