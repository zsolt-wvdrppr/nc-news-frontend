import ListItem from "./ListItem";
import { fetchArticles } from "../../lib/api";
import { useGetContent } from "../../lib/hooks/useArticles";

export function ArticleList({
  presetFilters = [],
  disableListControls = false,
}: {
  presetFilters: Array<Object>;
  disableListControls: boolean;
}) {
  const { content, error, loading } = useGetContent(fetchArticles, {
    queryParams: { limit: 100 },
  });

  const tempvar = disableListControls && presetFilters;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 max-w-400 items-end mx-auto pt-12 p-3">
        {!loading &&
          content?.articles &&
          content.articles.map((article) => {
            return (
              <ListItem
                key={article.article_id}
                article={article}
                loading={loading}
              />
            );
          })}
      </div>
    </>
  );
}

export default ArticleList;
