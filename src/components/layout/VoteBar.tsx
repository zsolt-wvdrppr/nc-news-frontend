import { ThumbsUp } from "lucide-react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { useContent } from "../../lib/hooks/useContent";
import { useLimitVote } from "../../lib/hooks/useLimitVote";
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

  const { setTrigger } = useContent(fetchContent, options, "trigger");
  const { hasVote, storeVote } = useLimitVote();

  const articleId = Number(options.articleId);
  const hasVoted = hasVote(articleId);

  options.method = "PATCH";
  options.expectedType = "comment";

  const handleUpVote = () => {
    if (hasVoted === 1) {
      handleDownVote();
      storeVote({ vote: 0, articleId: articleId });
    } else {
      options.body = { inc_votes: 1 };
      storeVote({ vote: 1, articleId: articleId });
      setTrigger(true);
      setVotes(votes + 1);
    }
  };

  const handleDownVote = () => {
    if (hasVoted === -1) {
      handleUpVote();
      storeVote({ vote: 0, articleId: articleId });
    } else {
      options.body = { inc_votes: -1 };
      storeVote({ vote: -1, articleId: Number(options.articleId) });
      setTrigger(true);
      setVotes(votes - 1);
    }
  };

  return (
    <div {...props}>
      <button aria-label="down-vote" onClick={handleDownVote}>
        <ThumbsUp
          className={`translate-y-1 rotate-180 active:scale-150 active:opacity-50 hover:scale-125 hover:stroke-1.5 transition-all cursor-pointer ${hasVote(articleId) === -1 ? "fill-white/60" : ""}`}
        />
      </button>
      <span className=" font-bold w-3">{votes}</span>
      <button>
        <ThumbsUp
          aria-label="up-vote"
          className={`hover:scale-125 active:scale-150 active:opacity-50 transition-all hover:stroke-1.5 cursor-pointer  ${hasVote(articleId) === 1 ? "fill-white/60" : ""}`}
          onClick={handleUpVote}
        />
      </button>
    </div>
  );
}

export default VoteBar;
