// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import HeroSectionCode from "./HeroSectionCode";

export default async function HeroSection() {
  const t = await getTranslations("hero");
  return (
    <section className="relative flex flex-col items-center justify-between pt-4 lg:py-12" itemScope itemType="https://schema.org/Person">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] z-1"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 z-10">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-4 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-foreground md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]" itemProp="name">
            {t("greeting")}
            <br />
            <span className="text-primary" itemProp="jobTitle">{t("designation")}</span>
          </h1>
          <meta itemProp="description" content="Soy Boris Leonel Desarrollador Full Stack especializado en React, Next.js, NestJS, Flutter y TypeScript" />
          <meta itemProp="knowsAbout" content="React, Next.js, TypeScript, Flutter, Dart, NestJS, Material UI" />

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-primary hover:scale-110 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-primary hover:scale-110 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-primary hover:scale-110 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              role="button"
              className="bg-gradient-to-r from-primary to-blue-400 p-[1px] rounded-full transition-all duration-300"
            >
              <button className="cursor-pointer px-3 text-xs md:px-8 py-3 md:py-4 bg-background rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-foreground no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>{t("buttons.contact")}</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-primary px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-primary-foreground no-underline transition-all duration-200 ease-out hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>{t("buttons.resume")}</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative rounded-lg border border-border bg-card shadow-subtle">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <HeroSectionCode />
        </div>
      </div>
    </section>
  );
}
