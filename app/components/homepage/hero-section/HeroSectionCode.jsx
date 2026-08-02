// @flow strict

import { getTranslations } from "next-intl/server";

export default async function HeroSectionCode() {
  const t = await getTranslations("hero");

  return (
    <div className="overflow-hidden border-t border-border px-4 lg:px-8 py-4 lg:py-8">
      <code className="font-mono text-xs md:text-sm lg:text-base">
        <div className="blink">
          <span className="mr-2 text-primary">{t("code.const")}</span>
          <span className="mr-2 text-foreground">{t("code.coder")}</span>
          <span className="mr-2 text-primary">=</span>
          <span className="text-muted-foreground">{"{"}</span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-foreground">
            {t("code.name")}:
          </span>
          <span className="text-muted-foreground">'</span>
          <span className="skill-text">Boris Leonel</span>
          <span className="text-muted-foreground">',</span>
        </div>

        <div className="ml-4 lg:ml-8 mr-2">
          <span className="text-foreground">{t("code.skills")}: </span>
          <span className="text-muted-foreground">['</span>

          <span className="skill-text">{t("code.skillsList.0")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.1")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.2")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.3")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.4")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.5")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.6")}</span>
          <span className="text-muted-foreground">{"', '"}</span>

          <span className="skill-text">{t("code.skillsList.7")}</span>
          <span className="text-muted-foreground">{"'],"}</span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-foreground">
            {t("code.hardWorker")}:
          </span>
          <span className="text-orange-400">{t("code.true")}</span>
          <span className="text-muted-foreground">,</span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-foreground">
            {t("code.quickLearner")}:
          </span>
          <span className="text-orange-400">{t("code.true")}</span>
          <span className="text-muted-foreground">,</span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-foreground">
            {t("code.problemSolver")}:
          </span>
          <span className="text-orange-400">{t("code.true")}</span>
          <span className="text-muted-foreground">,</span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-green-600">
            {t("code.hireable")}:
          </span>
          <span className="text-orange-400">{t("code.function")}</span>
          <span className="text-muted-foreground">{"() {"}</span>
        </div>

        <div>
          <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
            {t("code.return")}
          </span>
          <span className="text-muted-foreground">(</span>
        </div>

        <div>
          <span className="ml-12 lg:ml-24 text-cyan-700">
            {t("code.this")}.
          </span>
          <span className="mr-2 text-foreground">{t("code.hardWorker")}</span>
          <span className="skill-text">&amp;&amp;</span>
        </div>

        <div>
          <span className="ml-12 lg:ml-24 text-cyan-700">
            {t("code.this")}.
          </span>
          <span className="mr-2 text-foreground">
            {t("code.problemSolver")}
          </span>
          <span className="skill-text">&amp;&amp;</span>
        </div>

        <div>
          <span className="ml-12 lg:ml-24 text-cyan-700">
            {t("code.this")}.
          </span>
          <span className="mr-2 text-foreground">
            {t("code.skills")}.{t("code.length")}
          </span>
          <span className="mr-2 skill-text">&gt;=</span>
          <span className="text-orange-400">5</span>
        </div>

        <div>
          <span className="ml-8 lg:ml-16 mr-2 text-muted-foreground">
            {")"}
          </span>
        </div>

        <div>
          <span className="ml-4 lg:ml-8 text-muted-foreground">{"}"}</span>
        </div>

        <div>
          <span className="text-muted-foreground">{"}"}</span>
        </div>
      </code>
    </div>
  );
}
