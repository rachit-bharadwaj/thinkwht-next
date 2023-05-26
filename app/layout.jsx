"use client";

import "./globals.css";

// context
import { ApplyProvider } from "@/context/ApplyContext";
import { useState } from "react";
import Loadingexternal from "@/components/Loadingexternal";
import { useEffect } from "react";
import axios from "axios";

// components
import { Footer, Navbar, Provider } from "@/components";

export const metadata = {
  title: "ThinkWht",
  description: "an e-learning platform for everyone",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        document.getElementById("home").style.opacity = "0.5"
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (config) => {
        setLoading(false);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

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
      <body className="overflow-x-hidden">
        <Loadingexternal show={loading} />
        <div id="home">
          <ApplyProvider>
            <Provider>
              <Navbar />
              <div id="exceptNav">
                {children}
                <Footer />
              </div>
            </Provider>
          </ApplyProvider>
        </div>
      </body>
    </html>
  );
}
