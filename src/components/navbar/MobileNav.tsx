import Link from "next/link";
import { navLinks } from "./Navbar";

interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ menuOpen, setMenuOpen }: MobileNavProps) {
  return (
    <div className=" md:hidden">
      {/* overlay for mobile nav */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* menu */}
      <ul
        className={` fixed top-18 right-0 z-50 h-[80vh] w-full flex flex-col gap-10 items-center justify-center bg-secondary-background/80 backdrop-blur-xl border-t border-white/10 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navLinks.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              className=" text-xl font-semibold tracking-wide text-gray-200 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
