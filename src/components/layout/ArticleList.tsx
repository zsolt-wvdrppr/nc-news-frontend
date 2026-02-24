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

  useEffect(() => {
    fetchArticles(setArticles, setLoading);
  }, []);

  console.log(presetFilters);
  console.log(disableListControls);

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
