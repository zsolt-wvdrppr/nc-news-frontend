import ListItem from "./ListItem";
import { fetchContent } from "../../../lib/api";
import { useContent } from "../../../lib/hooks/useContent";

export function ArticleList({
  presetFilters = [], // reserved for future feature
  disableListControls = false, // reserved for future feature
}: {
  presetFilters: Array<Object>;
  disableListControls: boolean;
}) {
  const { content, loading } = useContent(fetchContent, {
    queryParams: { limit: 100 },
    url: ":baseUrl/articles",
  });

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
