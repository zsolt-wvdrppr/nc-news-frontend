import { ThumbsUp } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

export function VoteBar({
  votes,
  ...props
}: {
  votes: number;
} & ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <button aria-label="down-vote">
        <ThumbsUp className="rotate-180 hover:animate-bounce cursor-pointer" />
      </button>
      <span className=" font-bold">{votes}</span>
      <button>
        <ThumbsUp
          aria-label="up-vote"
          className="hover:animate-bounce  cursor-pointer"
        />
      </button>
    </div>
  );
}

export default VoteBar;
