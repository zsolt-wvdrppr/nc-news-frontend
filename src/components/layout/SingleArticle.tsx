import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatDate } from "../../lib/utils";
import { fetchArticleById, fetchCommentsByArticleId } from "../../lib/api";
import type { Article, Comment } from "../../lib/types";
import VoteBar from "./VoteBar";
import { CommentsSection } from "./CommentsSection";

export function SingleArticle({}) {
  const [article, setArticle] = useState<Article>();
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(Number(articleId), setArticle, setLoading);
    fetchCommentsByArticleId(
      Number(articleId),
      comments,
      setComments,
      setLoading,
      setTotalCount,
      {},
    );
  }, []);

  return (
    <div className="max-w-250 p-8 mx-auto flex flex-col gap-10">
      <h1>{article?.title}</h1>
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
