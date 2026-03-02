import { Link } from "react-router";
import { Newspaper } from "lucide-react";

export function Branding() {
  return (
    <Link to="/" className="p-3 flex flex-col items-center">
      <Newspaper className="size-12 sm:size-16 md:size-22" />
      <p className="font-mono">
        <span className="text-white bg-c-jetblack rounded-xs px-2">
          NC_NEWS
        </span>
      </p>
    </Link>
  );
}

export default Branding;
