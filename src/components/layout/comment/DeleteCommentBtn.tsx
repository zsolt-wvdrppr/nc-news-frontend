import { useContext, useEffect } from "react";
import type { CommentData } from "../../../lib/types";
import { Trash2 } from "lucide-react";
import { useDeleteContent } from "../../../lib/hooks/useDeleteContent";
import UserContext from "../../../lib/contexts/UserContext";

export function DeleteCommentBtn({
  commentId,
  author,
  setComments,
  comments,
}: {
  commentId: number;
  author: string;
  setComments: (comments: CommentData[]) => void;
  comments: CommentData[];
}) {
  const { user } = useContext(UserContext);
  const { deleteContent, isDone } = useDeleteContent();

  useEffect(() => {
    if (isDone) {
      const newListofComments = comments.filter(
        (comment) => comment.comment_id !== commentId,
      );

      setComments(newListofComments);
    }
  }, [isDone]);

  if (user?.username === author)
    return (
      <button
        className="cursor-pointer text-c-jetblack absolute right-1.5 sm:right-1/2 sm:translate-x-1/2 top-1 hover:scale-125 active:scale-150 active:opacity-50 transition-all hover:stroke-1.5"
        onClick={() => {
          deleteContent(commentId);
        }}
      >
        <Trash2 className="size-6" />
      </button>
    );
}

export default DeleteCommentBtn;
