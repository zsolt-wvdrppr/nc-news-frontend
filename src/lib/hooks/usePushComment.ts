import { useState, useEffect } from "react";
import type { Content, Comment } from "../types";

export const usePushComment = (
  content: Content | undefined,
  comments: Comment[],
  setComments: (comments: Comment[]) => void,
  comment: string,
  setComment: (comment: string) => void,
) => {
  const [commentPosted, setCommentPosted] = useState<boolean>(false);

  // Add comment to comments once returned by api
  useEffect(() => {
    const newCommentId = content?.comment?.comment_id;
    if (newCommentId) {
      let hasComment =
        comments.filter((comment) => comment.comment_id === newCommentId)
          .length > 0;
      if (!hasComment && content.comment) {
        setComments(comments.concat([content.comment]));
        setCommentPosted(true);
      }
    }
  }, [content]);

  return { comment, setComment, commentPosted, setCommentPosted };
};
