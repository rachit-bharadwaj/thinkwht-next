"use client";

import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import icons
import { HiEye, HiEyeOff } from "react-icons/hi";

// popup
import swal from "sweetalert";

const page = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const signupSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    const res = await fetch("/api/addUser", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result.message == "User Already Exist") {
      swal("User Already Exist");
    }
    console.log(result);

    if (result.message == "User Added Successfully")
      swal("A Verification Mail Has been sent to Your Mail ID");
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
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              className="mb-5 border-2 rounded-lg w-full p-3 text-lg focus:outline-none"
              name="name"
              type="text"
              placeholder="Enter your name"
              id="name"
              onChange={handleInput}
              required
            />
            <label htmlFor="email" className="text-lg">
              Email ID
            </label>
            <input
              className="mb-5 border-2 rounded-lg w-full p-3 text-lg focus:outline-none"
              name="email"
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleInput}
              required
            />

            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <div className="flex items-center rounded-lg border-2 px-1 mb-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 focus:outline-none text-lg"
                name="password"
                id="password"
                onChange={handleInput}
                required
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
                type="password"
                placeholder="Password"
                className="w-full p-2 focus:outline-none text-lg"
                required
              />
            </div>
          </div>
          <div>
            <button
              onClick={signupSubmit}
              className="bg-secondary text-white py-3 w-full rounded space-x-3 text-lg"
            >
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
