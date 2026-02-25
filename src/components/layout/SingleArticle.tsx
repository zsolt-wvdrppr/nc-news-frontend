import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatDate } from "../../lib/utils";
import { fetchArticleById } from "../../lib/api";
import type { Article } from "../../lib/types";
import VoteBar from "./VoteBar";

export function SingleArticle({}) {
  const [article, setArticle] = useState<Article>();
  const [loading, setLoading] = useState<boolean>(false);

  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(Number(articleId), setArticle, setLoading);
  }, []);

  return (
    <div className="max-w-300 p-8 mx-auto flex flex-col gap-10">
      <h1>{article?.title}</h1>
      <div className="flex flex-row justify-between">
        <span>{formatDate(article?.created_at || "")}</span>
        <span>Author: {article?.author || ""}</span>
      </div>
      <p>{article?.body}</p>
      {article && <VoteBar article={article} />}
    </div>
  );
}

export default SingleArticle;
