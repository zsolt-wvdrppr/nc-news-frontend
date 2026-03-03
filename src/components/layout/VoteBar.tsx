import { ThumbsUp } from "lucide-react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { useContent } from "../../lib/hooks/useContent";
import { fetchContent } from "../../lib/api";
import type { Options } from "../../lib/types";

export function VoteBar({
  votes: initialVotes,
  options,
  ...props
}: {
  votes: number;
  options: Options;
} & ComponentPropsWithoutRef<"div">) {
  const [votes, setVotes] = useState(initialVotes);
  const componentSpecificInfo: Options = {
    method: "PATCH",
    expectedType: "comment",
  };
  const [localOptions, setLocalOptions] = useState<Options>({
    ...options,
    ...componentSpecificInfo,
  });

  const handleUpVote = () => {
    setLocalOptions({ body: { inc_votes: 1 }, ...localOptions });
    doTrigger();
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    setLocalOptions({ body: { inc_votes: -1 }, ...localOptions });
    doTrigger();
    setVotes(votes - 1);
  };

  const { doTrigger } = useContent(fetchContent, localOptions);

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
