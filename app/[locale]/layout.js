import { getLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { IntlProvider } from "../providers";
import Footer from "../components/footer";
import ScrollToTop from "../components/helper/scroll-to-top";
import Navbar from "../components/navbar";
import "../css/card.scss";
import "../css/globals.scss";

export default async function LocaleLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <IntlProvider messages={messages} locale={locale} timeZone="UTC">
      <script dangerouslySetInnerHTML={{__html: `document.documentElement.lang = '${locale}'`}} />
      <main className="min-h-screen relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 dark scroll-smooth">
        <Navbar locale={locale} />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </IntlProvider>
  );
}
