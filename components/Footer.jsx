"use client";

import Link from "next/link";
import TNC from "./TNC";
import { useState } from "react";
import Privacy from "./Privacy";
import Help from "./Help";

const Footer = () => {
  const [tnc, setTnc] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <footer id="footer" className=" bg-footer text-white items-center p-14 space-y-5 md:space-y-8">
      <Link href="/">
        <div className="flex justify-center items-center lg:mr-[65px] mr-[20px]">
          <img
            src="/images/twnewlogo2.png"
            alt="logo"
            className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] mb-[15px] "
          />
          <p className="text-2xl sm:text-5xl font-extrabold">ThinkWh?t</p>
        </div>
      </Link>

      <ul className="flex sm:flex-row space-x-10 items-center sm:space-x-16 justify-center text-xs sm:text-lg font-bold ">
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li
          onClick={() => {
            setTnc(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hidden sm:flex cursor-pointer"
          id="opentermspopup"
        >
          Terms & Conditions
        </li>
        <li
          onClick={() => {
            setTnc(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="sm:hidden cursor-pointer"
        >
          T&C
        </li>
        <li
          onClick={() => {
            setPrivacy(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          id="openprivacypopup"
          className="cursor-pointer"
        >
          Privacy
        </li>
        <li
          onClick={() => {
            setHelp(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          id="openhelppopup"
          className="cursor-pointer"
        >
          Help
        </li>
      </ul>

      <ul className="flex space-x-10 justify-center">
        <li>
          <Link href="https://instagram.com/thin.kwhat?igshid=ZDdkNTZiNTM=">
            <img
              src="/images//insta-logo.png"
              className="h-10 w-10 footer-logo"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/thinkwhat/">
            <img
              src="/images/linkedin-logo.png"
              className="h-10 w-10 footer-logo"
            />
          </Link>
        </li>
      </ul>

      {/* TNC */}
      {tnc && <TNC />}

      {/* Privacy */}
      {privacy && <Privacy />}

      {/* Help */}
      {help && <Help />}
    </footer>
  );
};

export default Footer;
