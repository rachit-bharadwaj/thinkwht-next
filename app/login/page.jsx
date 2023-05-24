"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import icons
import { HiEye, HiEyeOff } from "react-icons/hi";
import swal from "sweetalert";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    // console.log(data);

    const res = await fetch("/api/loginUser", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result.message == "User Logged In") {
      swal("User Logged In");
      sessionStorage.setItem("token", result.token);
      sessionStorage.setItem("uName", result.userName);
      sessionStorage.setItem("emailID", result.emailID);
    }
    if (result.message == "Invalid Password") {
      swal("Invalid Password");
    }
    if (result.message == "Invalid Credentials") {
      const notify = () =>
        toast.error("Invalid Credentials!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      ("Invalid Credentials");
      notify();
    }

    // window.location.href = "/";
  };
  return (
    <div>
      <form method="POST">
        <div className="rounded-lg border-2 p-5 w-[80vw] mt-5 md:mt-10 md:w-fit h-fit my-20 mx-auto space-y-7 shadow-lg hover:shadow-2xl">
          <p className="text-2xl">Login to your account</p>
          <a href="/auth/google">
            <div className="rounded border-2 flex items-center justify-center md:px-28 py-3 space-x-3 cursor-pointer">
              <Image
                width={500}
                height={500}
                alt="google logo"
                className="h-7 w-fit"
                src="https://img.icons8.com/color/48/null/google-logo.png"
              />
              <p onClick={signIn}>Login with Google</p>
            </div>
          </a>
          <div>
            <ToastContainer />
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <p className="text-gray-500">OR</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>

          <div className="mt-16">
            <p className="text-lg">Email ID</p>
            <input
              className="mb-5 border-2 rounded-lg w-full p-3 text-lg focus:outline-none"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleInput}
              required
            />

            <p className="text-lg">Password</p>
            <div className="flex items-center rounded-lg border-2 px-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 focus:outline-none text-lg"
                onChange={handleInput}
                name="password"
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

            <div className="flex justify-end">
              <a
                href="/forgotpassword"
                className="text-right pt-5 text-secondary"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={loginSubmit}
              className="bg-secondary text-white py-3 w-full rounded space-x-3 text-lg"
            >
              Login
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <p>Not yet registered? </p>
            <Link href="/signup">
              <p className="text-secondary">Sign Up</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
