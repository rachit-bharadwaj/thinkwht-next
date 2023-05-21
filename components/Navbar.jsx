"use client";

import Image from "next/image";
import Link from "next/link";

// import react modules
import { useEffect, useState } from "react";

// import icons
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

// import next-auth
import { getProviders, signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  // session management
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setupProviders();
  }, []);

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="bg-primary">
        <div className="flex items-center justify-evenly sm:justify-between sm:px-3 lg:px-24 lg:py-2">
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
              className="focus:outline-none text-lg w-[8rem]"
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
            </ul>
          </div>

          <div className="hidden lg:flex gap-10">
            <button className="px-10 py-3 rounded-full bg-secondary text-white font-bold text-xl">
              Login
            </button>
            <button className="px-10 py-3 rounded-full bg-white text-secondary font-bold text-xl">
              Signup
            </button>
          </div>

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

            {session?.user ? (
              <li className="text-center group">
                <Link href="/dashboard" onClick={closeMenu}>
                  Logout
                </Link>
                <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
              </li>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <>
                      <li className="text-center group">
                        <Link href="/login" onClick={closeMenu}>
                          <button
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                          >
                            Login
                          </button>
                        </Link>
                        <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
                      </li>
                      <li className="text-center group">
                        <Link href="/signup" onClick={closeMenu}>
                          <button
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                          >
                            Signup
                          </button>
                        </Link>
                        <div className="h-1 w-1 bg-secondary mx-auto rounded-full hidden animate-bounce group-hover:block" />
                      </li>
                    </>
                  ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
