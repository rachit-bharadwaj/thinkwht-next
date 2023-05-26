"use client";

import { useEffect, useState } from "react";
import Loadingexternal from "@/components/Loadingexternal";
import axios from "axios";

export default function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        document.getElementById("home").style.opacity = "0.5";
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

  return <Loadingexternal show={loading} />;
}
