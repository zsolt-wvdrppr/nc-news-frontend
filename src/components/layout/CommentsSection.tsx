import type { Comment } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import VoteBar from "./VoteBar";

export function CommentsSection({ comments }: { comments: Array<Comment> }) {
  return (
    <>
      <ul>
        {comments.map((comment) => {
          return (
            <li
              key={comment.comment_id}
              className="comment-card mb-6 pb-3 px-1 rounded-2xl bg-c-burntpeach/10 border border-c-burntpeach overflow-hidden"
            >
              <div className="flex flex-row justify-between mb-3">
                <button className="hover:scale-105 transition-all cursor-pointer bg-c-burntpeach px-2 pb-1 -ml-1 rounded-br-sm font-semibold text-white">
                  <span>@{comment.author}</span>
                </button>
                <span className="bg-c-burntpeach px-2 pb-1 -mr-1 rounded-bl-sm text-white">
                  {formatDate(comment.created_at)}
                </span>
              </div>
              <p className="px-3">{comment.body}</p>
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
