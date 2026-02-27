import { ThumbsUp } from "lucide-react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { useContent } from "../../lib/hooks/useContent";
import { patchVote } from "../../lib/api";
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

  const { setTrigger } = useContent(patchVote, options, "trigger");

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
        <ThumbsUp className="rotate-180 hover:animate-bounce cursor-pointer" />
      </button>
      <span className=" font-bold">{votes}</span>
      <button>
        <ThumbsUp
          aria-label="up-vote"
          className="hover:animate-bounce  cursor-pointer"
          onClick={handleUpVote}
        />
      </button>
    </div>
  );
}

export default VoteBar;
