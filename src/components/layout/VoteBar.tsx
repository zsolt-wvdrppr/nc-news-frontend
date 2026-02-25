import { ThumbsUp } from "lucide-react";
import type { Article } from "../../lib/types";
import type { ComponentPropsWithoutRef } from "react";

export function VoteBar({
  article,
  ...props
}: {
  article: Article;
} & ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <button aria-label="down-vote">
        <ThumbsUp className="rotate-180 hover:animate-bounce cursor-pointer" />
      </button>
      <span className=" font-bold">{article.votes}</span>
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
