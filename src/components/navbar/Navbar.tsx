"use client";
import Logo from "./Logo";
import { LuMenu, LuNotebookPen, LuSearch, LuX } from "react-icons/lu";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useModalStore } from "@/store/useModalStore";
import { authClient } from "@/lib/auth-client";

export const navLinks = [
  { url: "/", label: "Home" },
  { url: "/articles", label: "Articles" },
  { url: "/about", label: "About" },
];

export default function Navbar() {
  const { openSignIn, openSearch } = useModalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className=" h-18 fixed top-0 left-0 z-50 backdrop-blur-md backdrop-saturate-50 w-full">
      <div className=" flex items-center justify-between h-full w-[90%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* Links */}

        <ul className=" flex items-center gap-4 md:gap-8 text-gray-400 font-semibold">
          <li className=" cursor-pointer flex items-center gap-1">
            <LuSearch size={25} />
            <span className=" hidden md:block" onClick={openSearch}>
              Search
            </span>
          </li>
          {session && (
            <li>
              <Link
                href="/write"
                className=" cursor-pointer flex items-center gap-1"
              >
                <LuNotebookPen size={20} />
                <span className=" hidden md:block">Write</span>
              </Link>
            </li>
          )}

          {navLinks.map((link) => (
            <li key={link.url} className=" hidden hover:text-gray-200 md:block">
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
          <>
            {!isPending && (
              <>
                {session ? (
                  <li
                    className=" bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                ) : (
                  <li
                    className=" bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer"
                    onClick={openSignIn}
                  >
                    Login
                  </li>
                )}
              </>
            )}
          </>
          <li
            className=" cursor-pointer md:hidden z-80"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
          </li>
        </ul>
      </div>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}
