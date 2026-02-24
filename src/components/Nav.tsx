import type { Page } from "../lib/types";
import { Link, useLocation } from "react-router";

export function Nav({ pages = [] }: { pages: Array<Page> }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <ul className="flex flex-row gap-3 justify-center items-center mr-6">
      {pages.map((page) => {
        return (
          <li key={page.path}>
            <Link
              to={page?.path}
              className={`shadow-md hover:brightness-90 hover:shadow-none transition-all px-3 pt-1 pb-1.5 text-white rounded-xl font-semibold ${path === page.path ? "bg-c-burntpeach" : "bg-c-duskblue"}`}
            >
              {page?.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
