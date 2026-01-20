import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import Footer from "../components/footer";
import ScrollToTop from "../components/helper/scroll-to-top";
import Navbar from "../components/navbar";
import "../css/card.scss";
import "../css/globals.scss";

export default async function LocaleLayout({ children, params }) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <main className="min-h-screen relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 dark scroll-smooth">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
