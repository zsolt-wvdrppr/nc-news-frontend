import { Newspaper } from "lucide-react";

export function Branding() {
  return (
    <div className="flex flex-col items-center">
      <Newspaper className="size-22" />
      <p className="font-mono">
        <span className="text-white bg-c-jetblack rounded-xs px-2">
          NC_NEWS
        </span>
      </p>
    </div>
  );
}

export default Branding;
