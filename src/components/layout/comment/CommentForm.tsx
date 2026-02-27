import type { CommentData } from "../../../lib/types";
import { useState } from "react";
import { fetchContent } from "../../../lib/api";
import { useContent } from "../../../lib/hooks/useContent";
import { usePushComment } from "../../../lib/hooks/usePushComment";
import { Loader, Send } from "lucide-react";

export function CommentForm({
  articleId,
  comments,
  setComments,
}: {
  articleId: string;
  comments: Array<CommentData>;
  setComments: (comments: CommentData[]) => void;
}) {
  const [localUserInput, setLocalUserInput] = useState<string>("");
  const username = "jessjelly";

  const { content, loading, setTrigger, error } = useContent(
    fetchContent,
    {
      url: ":baseUrl/articles/:article_id/comment",
      body: { username: username, body: localUserInput }, // Hardcoded user for development
      method: "POST",
      articleId: articleId,
      expectedType: "comment",
    },
    "trigger",
  );

  const { commentPosted, setCommentPosted } = usePushComment(
    content,
    comments,
    setComments,
    localUserInput,
  );

  const handleSubmit = (formData: FormData) => {
    const userInput = formData.get("comment-input")?.toString();
    if (!userInput) return;
    setLocalUserInput(userInput);
    setTrigger(true);
  };

  return (
    <>
      <h2 className="text-2xl text-c-duskblue">{`Share your oppinion!`}</h2>
      {commentPosted && (
        <>
          <p>{`Comment successfully posted. Thank you @${username}!`}</p>
          <button
            onClick={() => setCommentPosted(false)}
            className="group flex flex-row items-center gap-3 border-2 font-semibold text-c-duskblue hover:bg-c-burntpeach hover:text-white transition-all cursor-pointer border-c-burntpeach w-fit p-2 rounded-2xl mx-auto"
          >
            {`Post another comment`}
          </button>
        </>
      )}
      {!commentPosted && (
        <form
          id="user-comment"
          className="flex flex-col gap-3"
          action={handleSubmit}
        >
          <label
            htmlFor="comment-input"
            className="text-c-duskblue"
          >{`Type your comment below`}</label>
          <textarea
            id="comment-input"
            name="comment-input"
            disabled={loading}
            placeholder="Start typing..."
            rows={4}
            cols={50}
            className="border-2 border-c-burntpeach rounded-2xl p-2"
          />
          <div className="flex flex-row justify-between">
            <div>{error && <p>{error.message}</p>}</div>
            <button
              aria-label="Post comment"
              title="Post your comment"
              disabled={loading}
              type="submit"
              className="group flex flex-row items-center gap-3 border-2 font-semibold text-c-duskblue hover:bg-c-burntpeach hover:text-white transition-all cursor-pointer border-c-burntpeach w-fit p-2 rounded-2xl"
            >
              <p className="">{`Submit`}</p>
              {loading && (
                <Loader className="animate-spin text-c-burntpeach size-5" />
              )}
              {!loading && (
                <Send className="group-hover:text-white group-hover:rotate-45 transition-all size-5 text-c-burntpeach" />
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default CommentForm;
