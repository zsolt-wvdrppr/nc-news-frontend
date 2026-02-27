import { useState } from "react";
import { useParams } from "react-router";
import { formatDate } from "../../lib/utils";
import { fetchArticleById, fetchCommentsByArticleId } from "../../lib/api";
import { useGetContent } from "../../lib/hooks/useGetContent";
import VoteBar from "./VoteBar";
import { CommentsSection } from "./CommentsSection";

export function SingleArticle({}) {
  const { articleId } = useParams();
  const numArticleId = Number(articleId);

  const [imgLoading, setImgLoading] = useState<boolean>(true);

  const { content, error, loading } = useGetContent(fetchArticleById, {
    articleId: numArticleId,
  });

  const { content: commentsContent, loading: commentsLoading } = useGetContent(
    fetchCommentsByArticleId,
    {
      articleId: numArticleId,
    },
  );

  console.log(commentsContent);

  if (!content?.article) return;
  if (error) return <p>{error.message}</p>;

  const { article } = content;

  return (
    <div className="max-w-250 p-8 mx-auto flex flex-col gap-10">
      <h1 className="text-c-jetblack">{article?.title}</h1>
      {(loading || imgLoading) && (
        <div className="h-52 md:h-102 bg-c-powderblue/90 rounded-2xl animate-pulse" />
      )}
      <div
        className={`${(loading || imgLoading) && "hidden"} relative pb-2 ${!imgLoading && "bg-c-burntpeach"} text-right rounded-2xl`}
      >
        <img
          className="h-50 md:h-100 w-full object-cover rounded-2xl"
          src={article?.article_img_url}
          onLoad={() => {
            setImgLoading(false);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <span>{formatDate(article?.created_at || "")}</span>
        <span>@{article?.author || ""}</span>
      </div>
      <p>{article?.body}</p>
      {article && (
        <VoteBar
          votes={Number(article.votes)}
          className="flex flex-wrap gap-6"
        />
      )}
      <div className="border-b border-c-jetblack/50" />
      {commentsContent?.comments && (
        <CommentsSection
          comments={commentsContent.comments}
          loading={commentsLoading}
        />
      )}
    </div>
  );
}

export default SingleArticle;
