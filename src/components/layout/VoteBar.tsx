import { ThumbsUp } from "lucide-react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { useContent } from "../../lib/hooks/useContent";
import { fetchContent } from "../../lib/api";
import type { Options } from "../../lib/types";

export function VoteBar({
  votes: initialVotes,
  options = {},
  ...props
}: {
  votes: number;
  options?: Options;
} & ComponentPropsWithoutRef<"div">) {
  const [votes, setVotes] = useState(initialVotes);

  const { setTrigger } = useContent(fetchContent, options, "trigger");

  options.method = "PATCH";
  options.expectedType = "comment";

  const handleUpVote = () => {
    options.body = { inc_votes: 1 };

    setTrigger(true);
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    options.body = { inc_votes: -1 };
    setTrigger(true);
    setVotes(votes - 1);
  };

  return (
    <div {...props}>
      <button aria-label="down-vote" onClick={handleDownVote}>
        <ThumbsUp className="rotate-180 active:scale-150 active:opacity-50 hover:scale-125 hover:stroke-1.5 transition-all cursor-pointer" />
      </button>
      <span className=" font-bold">{votes}</span>
      <button>
        <ThumbsUp
          aria-label="up-vote"
          className="hover:scale-125 active:scale-150 active:opacity-50 transition-all hover:stroke-1.5 cursor-pointer"
          onClick={handleUpVote}
        />
      </button>
    </div>
  );
}

export default VoteBar;
