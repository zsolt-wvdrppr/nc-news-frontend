import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatDate } from "../../lib/utils";
import { fetchArticleById, fetchCommentsByArticleId } from "../../lib/api";
import { useGetContent } from "../../lib/hooks/useArticles";
import type { Article, Comment } from "../../lib/types";
import VoteBar from "./VoteBar";
import { CommentsSection } from "./CommentsSection";

export function SingleArticle({}) {
  const [comments, setComments] = useState<Array<Comment>>([]);

  const { articleId } = useParams();
  const numArticleId = Number(articleId);

  const { content, error, loading } = useGetContent(fetchArticleById, {
    articleId: numArticleId,
  });

  if (!content?.article || loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  const { article } = content;

  return (
    <div className="max-w-250 p-8 mx-auto flex flex-col gap-10">
      <h1 className="text-c-jetblack">{article?.title}</h1>
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
      <CommentsSection comments={comments} />
    </div>
  );
}

export default SingleArticle;
