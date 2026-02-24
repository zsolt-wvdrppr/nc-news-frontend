import { ThumbsUp } from "lucide-react";
import type { Article } from "../../lib/types";

export function VoteBar({ article }: { article: Article }) {
  return (
    <div className="flex flex-row gap-3 text-white">
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
