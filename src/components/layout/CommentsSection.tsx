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
              className="comment-card mb-6 p-3 rounded-2xl bg-c-burntpeach/10 border border-c-burntpeach"
            >
              <div className="">
                <span>{comment.author}</span>
                <span>{formatDate(comment.created_at)}</span>
              </div>
              <p>{comment.body}</p>
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
