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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchArticles(setArticles, setLoading);
  }, []);

  console.log(presetFilters);
  console.log(disableListControls);

  return (
    <>
      <h1>ArticleList</h1>
      <div className="grid grid-cols-2">
        {articles.map((article) => {
          return <ListItem article={article} />;
        })}
      </div>
    </>
  );
}

export default ArticleList;
