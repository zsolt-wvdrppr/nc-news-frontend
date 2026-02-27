import { useState, useEffect } from "react";
import type { ContentResponse, CommentData } from "../types";

export const usePushComment = (
  content: ContentResponse | undefined,
  comments: CommentData[],
  setComments: (comments: CommentData[]) => void,
) => {
  const [commentPosted, setCommentPosted] = useState<boolean>(false);

  // Add comment to comments once returned by api
  useEffect(() => {
    if (content?.type !== "comment") return;
    const newCommentId = content?.comment?.comment_id;
    if (newCommentId) {
      let hasComment =
        comments.filter(
          (comment: CommentData) => comment.comment_id === newCommentId,
        ).length > 0;
      if (!hasComment && content.comment) {
        setComments(comments.concat([content.comment]));
        setCommentPosted(true);
      }
    }
  }, [content]);

  return { commentPosted, setCommentPosted };
};
