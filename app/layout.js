import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boris Leonel - Desarrollador Full Stack | Portfolio",
  description:
    "Soy Boris Leonel, Desarrollador Full Stack especializado en React, Next.js, NestJS, Flutter y TypeScript. Portfolio con proyectos de desarrollo web y móvil.",
  keywords: [
    "Boris Leonel",
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "NestJS",
    "Flutter",
    "TypeScript",
    "Desarrollo Web",
    "Desarrollo Móvil",
    "Portfolio",
    "La Paz Bolivia"
  ],
  authors: [{ name: "Boris Leonel" }],
  creator: "Boris Leonel",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "pt_BR"],
    title: "Boris Leonel - Desarrollador Full Stack",
    description: "Soy Boris Leonel, Desarrollador Full Stack especializado en React, Next.js, NestJS, Flutter y TypeScript.",
    siteName: "Boris Leonel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boris Leonel - Desarrollador Full Stack",
    description: "Soy Boris Leonel, Desarrollador Full Stack especializado en React, Next.js, NestJS, Flutter y TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        {children}
      </body>
    </html>
  );
}

