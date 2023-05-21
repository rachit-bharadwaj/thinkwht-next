"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import icons
import { HiEye, HiEyeOff } from "react-icons/hi";

const page = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <form method="POST">
        <div className="rounded-lg border-2 p-5 w-[80vw] mt-5 md:mt-10 md:w-fit h-fit my-20 mx-auto space-y-5 shadow-lg hover:shadow-2xl">
          <p className="text-2xl">Create new account</p>
          <Link href="/auth/google">
            <div className="rounded border-2 flex items-center justify-center md:px-28 py-3 space-x-3 cursor-pointer">
              <Image
                width={500}
                height={500}
                alt="google logo"
                className="h-7 w-fit"
                src="https://img.icons8.com/color/48/null/google-logo.png"
              />
              <p>Login with Google</p>
            </div>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <p className="text-gray-500">OR</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div>
            <p className="text-lg">Name</p>
            <input
              className="mb-5 border-2 rounded-lg w-full p-3 text-lg focus:outline-none"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-lg">Email ID</p>
            <input
              className="mb-5 border-2 rounded-lg w-full p-3 text-lg focus:outline-none"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            <p className="text-lg">Password</p>
            <div className="flex items-center rounded-lg border-2 px-1 mb-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 focus:outline-none text-lg"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="text-xl"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            <p className="text-lg">Confirm Password</p>
            <div className="flex items-center rounded-lg border-2 px-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 focus:outline-none text-lg"
              />
            </div>
          </div>
          <div>
            <button className="bg-secondary text-white py-3 w-full rounded space-x-3 text-lg">
              Signup
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <p>Already registered? </p>
            <Link href="/login">
              <p className="text-secondary">Login</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
