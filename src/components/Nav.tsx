import { Menu } from "lucide-react";
import type { Page } from "../lib/types";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import UserDisplay from "./layout/user/UserDisplay";

export function Nav({ pages }: { pages: Array<Page> }) {
  const location = useLocation();
  const path = location.pathname;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenuButton = () => setIsOpen(false);

  const handleMenuButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul className="hidden sm:flex flex-row gap-3 justify-center items-center mr-6">
        {pages.map((page) => {
          return (
            <li key={page.path}>
              <Link
                to={page?.path}
                className={`shadow-md text-lg hover:brightness-90 hover:shadow-none transition-all px-3 pt-1 pb-1.5 text-white rounded-xl font-semibold ${path === page.path ? "bg-c-burntpeach" : "bg-c-duskblue"}`}
              >
                {page?.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Mobile Menu*/}
      <div className="mobile-menu sm:hidden flex flex-col items-center justify-center">
        <button className="mr-5" onClick={handleMenuButton}>
          <Menu className="size-10" />
        </button>

        <div
          className={`${isOpen ? "opacity-100 z-50" : "opacity-0 -z-50 -translate-y-12"} absolute border-b border-c-burntpeach transition-all top-20 left-0 w-full bg-linear-to-t from-white to-transparent backdrop-blur-sm p-3 rounded-2xl`}
        >
          <ul className="flex flex-col gap-8 p-5">
            {pages.map((page) => {
              return (
                <li key={page.path} className="w-full">
                  <Link
                    to={page?.path}
                    className={`block text-lg text-center shadow-md w-full hover:brightness-90 hover:shadow-none transition-all duration-1000 px-3 pt-1 pb-1.5 text-white rounded-xl font-semibold ${path === page.path ? "bg-c-burntpeach" : "bg-c-duskblue"}`}
                    onClick={closeMenuButton}
                  >
                    {page?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="rounded-2xl mt-10 w-fit mx-auto">
            <UserDisplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
