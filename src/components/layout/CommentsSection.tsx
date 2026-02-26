import { Loader } from "lucide-react";
import type { Comment } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import VoteBar from "./VoteBar";

export function CommentsSection({
  comments,
  loading,
}: {
  comments: Array<Comment>;
  loading: boolean;
}) {
  if (loading)
    return (
      <div className="flex flex-col items-center gap-3">
        <Loader className="animate-spin text-c-burntpeach size-10" />
        <p className="animate-pulse text-c-duskblue">
          {"Comments will show up soon..."}
        </p>
      </div>
    );

  return (
    <>
      <ul>
        {comments.map((comment) => {
          return (
            <li
              key={comment.comment_id}
              className="comment-card relative mb-6 pb-3 px-1 rounded-2xl bg-c-burntpeach/10 border border-c-burntpeach overflow-hidden"
            >
              <div className="flex flex-row justify-between mb-3">
                <button className="hover:scale-105 transition-all cursor-pointer bg-c-burntpeach px-2 pb-1 -ml-1 rounded-br-sm font-semibold text-white">
                  <span>@{comment.author}</span>
                </button>
                <span className="hidden sm:block bg-c-burntpeach px-2 pb-1 -mr-1 rounded-bl-sm text-white">
                  {formatDate(comment.created_at)}
                </span>
              </div>
              <p className="px-3">{comment.body}</p>
              <span className="sm:hidden absolute bottom-0.5 left-1 px-2 pb-1 -mr-1 rounded-bl-sm text-c-burntpeach">
                {formatDate(comment.created_at)}
              </span>
              <VoteBar
                votes={Number(comment.votes)}
                className="mt-3 text-c-burntpeach flex flex-row items-center justify-end gap-x-6"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
