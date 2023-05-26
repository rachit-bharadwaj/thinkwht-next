"use client";

import Image from "next/image";
import Link from "next/link";

// import react modules
import { Suspense, useEffect, useState } from "react";

// import icons
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiCloseLine,
} from "react-icons/ri";
import { TiTick } from "react-icons/ti";

// import components
import Loader from "./Loader";
import axios from "axios";
import swal from "sweetalert";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    const name = sessionStorage.getItem("uName");
    const sessionToken = sessionStorage.getItem("token");
    setUserName(name);
    setToken(sessionToken);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uName");
    sessionStorage.removeItem("emailID");
    setMenu(false);
    window.location.reload();
  };

  // for campus ambassador
  const [campusAmbassador, setCampusAmbassador] = useState(true);
  const closeCampusAmbassador = () => {
    setCampusAmbassador(false);
    setMenu(false);
  };

  // for campus ambassador form
  const [campusAmbassadorForm, setCampusAmbassadorForm] = useState(false);
  const openCampusAmbassadorForm = () => {
    setCampusAmbassadorForm(true);
    document.getElementById("exceptNav").style.opacity = "0.5";
    document.getElementById("nav-div").style.opacity = "0.5";
    closeCampusAmbassador();
  };
  const closeCampusAmbassadorForm = () => {
    setCampusAmbassadorForm(false);
    document.getElementById("exceptNav").style.opacity = "1";
    document.getElementById("nav-div").style.opacity = "1";
  };
  // successMessage
  const [successMessage, setSuccessMessage] = useState(false);
  const openSuccessMessage = () => {
    setSuccessMessage(true);
  };
  const closeSuccessMessage = () => {
    setSuccessMessage(false);
  };

  // sending campus ambassador form data to backend
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [branch, setBranch] = useState("");

  const handleData = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "collegeName") {
      setCollegeName(e.target.value);
    } else if (e.target.name === "year") {
      setYear(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "branch") {
      setBranch(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      mobile === "" ||
      email === "" ||
      collegeName === "" ||
      year === "" ||
      location === "" ||
      branch === ""
    ) {
      swal("Please fill all the fields");
      return;
    }
    closeCampusAmbassadorForm();
    const res = await axios.post("/api/addcampusAmbassador", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mobile,
        email,
        collegeName,
        year,
        location,
        branch,
      }),
    });
    const result = await res.data;
    if (result.message === "campus ambassador added") openSuccessMessage();
    console.log(result.message);
  };

  return (
    <nav id="nav" className="bg-primary sticky top-0 z-50">
      <div id="nav-div" className="bg-primary">
        <div className="flex items-center justify-evenly sm:justify-between sm:px-3 lg:px-16 lg:py-2">
          <Link href="/">
            <Image
              src="/images/twnewlogo2.png"
              alt="ThinkWht Logo"
              width={500}
              height={500}
              className="h-[5rem] w-fit lg:h-24"
            />
          </Link>

          <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
            <BsSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none text-lg w-[8rem] lg:w-40"
            />
          </div>

          <div className="hidden lg:flex">
            <ul className="flex gap-10 text-xl">
              <li className="text-center group">
                <Link href="/">Home</Link>
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
              <li className="text-center group">
                <Link href="/about">About</Link>
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
              <li className="text-center group">
                <Link href="/contact">Contact</Link>
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
              <li
                className="text-center group cursor-pointer"
                onClick={openCampusAmbassadorForm}
              >
                Campus Ambassador
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
            </ul>
          </div>

          {token ? (
            <div className="hidden lg:block">
              <div
                className="flex items-center cursor-pointer justify-center select-none text-yellow"
                onClick={toggleDropdown}
              >
                <p className="text-lg font-bold capitalize">{userName}</p>

                {!dropdown ? (
                  <RiArrowDropDownLine className="text-4xl" />
                ) : (
                  <RiArrowDropUpLine className="text-4xl" />
                )}
              </div>

              {/* dropdown menu */}
              <div
                className={
                  dropdown
                    ? `rounded-lg z-50 text-center absolute bg-secondary text-white px-2.5 py-1 w-40 my-2`
                    : `hidden`
                }
              >
                <ul className="w-full p-2">
                  <li className="text-center group">
                    <Link href="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex gap-10">
              <Link href="/login">
                <button className="px-10 py-3 rounded-full bg-secondary text-white font-bold text-xl">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-10 py-3 rounded-full bg-white text-secondary font-bold text-xl">
                  Signup
                </button>
              </Link>
            </div>
          )}

          {/* for smaller screens */}

          <div className="lg:hidden">
            <HiMenu
              className={
                !menu ? `text-4xl text-secondary cursor-pointer` : `hidden`
              }
              onClick={openMenu}
            />
            <RxCross1
              className={
                menu ? `text-4xl text-secondary cursor-pointer` : `hidden`
              }
              onClick={closeMenu}
            />
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={
            menu
              ? `flex justify-center w-full bg-primary h-fit translate-y-0 duration-500 transition ease-in-out shadow py-5`
              : `h-0`
          }
        >
          <ul className={menu ? `flex flex-col gap-3` : `hidden`}>
            <li className="text-center group">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
            </li>
            <li className="text-center group">
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
            </li>
            <li className="text-center group">
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
              <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
            </li>

            <li
              className="text-center group cursor-pointer"
              onClick={openCampusAmbassadorForm}
            >
              Campus Ambassador
              <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
            </li>

            {token ? (
              <li className="text-center group">
                <Link href="/" onClick={handleLogout}>
                  Log out
                </Link>
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
            ) : (
              <>
                <li className="text-center group">
                  <Link href="/login" onClick={closeMenu}>
                    Login
                  </Link>
                  <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
                </li>

                <li className="text-center group">
                  <Link href="/signup" onClick={closeMenu}>
                    Sign up
                  </Link>
                  <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* campus ambassador */}
      {campusAmbassador && (
        <div className="w-full flex justify-center">
          <div className="bg-secondary bg-opacity-95 text-white absolute p-5 rounded-lg">
            <RiCloseLine
              onClick={closeCampusAmbassador}
              className="absolute right-3 top-3 text-4xl cursor-pointer"
            />
            <div className="mt-12 space-y-5 text-center">
              <p className="text-lg font-bold">
                Join Our Campus Ambassador Internship Program
              </p>
              <p>Apply now and earn 5k-10k Upto per month</p>
              <button
                onClick={openCampusAmbassadorForm}
                className="bg-white text-black py-2 px-5 rounded-full font-bold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* campus ambassador form */}
      {campusAmbassadorForm && (
        <div
          id="capopup"
          className="absolute w-full justify-center flex top-16 z-50 max-h-screen overflow-y-scroll p-5 scrollbar scrollbar-none"
        >
          <form
            method="POST"
            className="flex flex-col  p-5 rounded-lg bg-white border text-black"
          >
            <div className="w-full flex justify-end">
              <RiCloseLine
                onClick={closeCampusAmbassadorForm}
                className="text-4xl cursor-pointer"
              />
            </div>
            <p className="font-bold mt-7">
              Please fill in below form fields and send us your Enquiry
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Phone*</label>
                <div className="w-full flex gap-3">
                  <input
                    type="number"
                    name="phonecode"
                    id="phonecode"
                    reuired
                    className="border rounded p-1 w-1/6"
                    defaultValue="91"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    required
                    className="border rounded p-1 w-full"
                    onChange={handleData}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="location">College Name*</label>
                <input
                  type="text"
                  name="collegeName"
                  id="collegeName"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="location">Branch*</label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="location">Year*</label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="location">Location*</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  required
                  className="border rounded p-1"
                  onChange={handleData}
                />
              </div>

              <button
                className="text-left bg-secondary text-white w-fit py-2 px-5 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {successMessage && (
        <div className="w-full flex justify-center absolute top-24">
          <div className="bg-white bg-opacity-95 absolute p-10 rounded-lg w-fit mx-10 md:mx-auto">
            <div className="space-y-5 text-center">
              <p className="text-lg font-bold">
                Your Enquiry has been sent Successfully!
              </p>
              <TiTick className="text-5xl mx-auto bg-green-500 text-white rounded-full p-1" />

              <p className="my-5">
                Thank you for contacting ThinkWht! We will get back to you
                within 48 hours!
              </p>
              <Link href="/">
                <button
                  onClick={closeSuccessMessage}
                  className="bg-secondary py-2 px-5 text-white rounded-lg font-bold"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
