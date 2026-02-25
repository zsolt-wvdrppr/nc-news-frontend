import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { fetchArticles } from "../../lib/api";
import type { Article } from "../../lib/types";

export function ArticleList({
  presetFilters = [],
  disableListControls = false,
}: {
  presetFilters: Array<Object>;
  disableListControls: boolean;
}) {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [queryParams, setQueryParams] = useState<Object>({});
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    fetchArticles(
      articles,
      setArticles,
      setLoading,
      setTotalCount,
      queryParams,
    );
  }, [queryParams]);

  const tempvar = disableListControls && presetFilters;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-400 items-end mx-auto">
      {articles.map((article) => {
        return (
          <ListItem
            key={article.article_id}
            article={article}
            loading={loading}
          />
        );
      })}
    </div>
  );
}

export default ArticleList;
