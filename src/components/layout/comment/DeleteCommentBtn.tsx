import { useContext, useEffect, useState } from "react";
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
  const [idToDeletedMsg, setIdToDeletedMsg] = useState<number>(NaN);

  useEffect(() => {
    if (isDone) {
      setIdToDeletedMsg(commentId);
      const newListofComments = comments.filter(
        (comment) => comment.comment_id !== commentId,
      );

      setTimeout(() => {
        setComments(newListofComments);
      }, 3000);
    }
  }, [isDone]);

  if (user?.username === author)
    return (
      <>
        <button
          className="cursor-pointer text-c-jetblack absolute right-1.5 sm:right-1/2 sm:translate-x-1/2 top-1 hover:scale-125 active:scale-150 active:opacity-50 transition-all hover:stroke-1.5"
          onClick={() => {
            deleteContent(commentId);
          }}
        >
          <Trash2 className="size-6" />
        </button>
        {idToDeletedMsg === commentId && (
          <div className="msg-container absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm p-3 border border-c-burntpeach bg-white/50 rounded-2xl font-semibold text-lg flex flex-col items-center justify-center z-10 text-center gap-3 w-full h-full">
            <Trash2 className="min-w-6" />
            <p>Comment is successfully deleted!</p>
          </div>
        )}
      </>
    );
}

export default DeleteCommentBtn;
