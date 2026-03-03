import type { QueryParams } from "../../../lib/types";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router";
import ArticleCardItem from "./ArticleCardItem";
import { fetchContent } from "../../../lib/api";
import { useContent } from "../../../lib/hooks/useContent";
import { useScrollToTop } from "../../../lib/hooks/useScrollToTop";
import { useRedirect404 } from "../../../lib/hooks/useRedirect404";
import ListControls from "./ListControls";

export function ArticleList({
  enableListControls,
}: {
  enableListControls: boolean;
}) {
  const params = useParams();

  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  const order = searchParams.get("order") || "";

  const filter = useMemo<QueryParams>(() => {
    const output: QueryParams = {};
    if (params.topic) output.topic = params.topic;
    if (sortBy) output.sortBy = sortBy;
    if (order) output.order = order;
    return output;
  }, [params.topic, sortBy, order]);

  const { content, loading, error, doTrigger } = useContent(fetchContent, {
    queryParams: { limit: 100, ...filter },
    url: `:baseUrl/articles`,
    expectedType: "article-list",
  });

  useRedirect404(error);

  useScrollToTop();

  useEffect(() => {
    doTrigger();
  }, [filter, searchParams]);

  return (
    <div className="max-w-400 mx-auto p-3">
      {enableListControls && <ListControls />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 max-w-400 items-end mx-auto">
        {!loading &&
          content?.type === "article-list" &&
          content.articles.map((article) => {
            return (
              <ArticleCardItem
                key={article.article_id}
                article={article}
                loading={loading}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ArticleList;
