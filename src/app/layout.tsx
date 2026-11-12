import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "PerkVue | Verified Wellness Deals & Daily Longevity Perks",
  description: "Discover tested daily promo codes, wellness perks, and verified supplement savings on PerkVue.",
  openGraph: {
    title: "PerkVue | Verified Wellness Deals & Daily Longevity Perks",
    description: "Discover tested daily promo codes, wellness perks, and verified supplement savings on PerkVue.",
    url: "https://perkvue.com",
    siteName: "PerkVue",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="linkscircleverifycode" content="4dcc2529-30cf-4f04-b0a6-bc6819ed1d15" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "calc(100vh - 350px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
