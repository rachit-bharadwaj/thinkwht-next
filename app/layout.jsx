"use client";

import "./globals.css";

// context
import { ApplyProvider } from "@/context/ApplyContext";

// components
import { Footer, Navbar, Provider } from "@/components";

export const metadata = {
  title: "ThinkWht",
  description: "an e-learning platform for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ApplyProvider>
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </ApplyProvider>
      </body>
    </html>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
