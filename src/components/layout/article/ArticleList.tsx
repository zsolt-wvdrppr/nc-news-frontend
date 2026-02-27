import ArticleCardItem from "./ArticleCardItem";
import { fetchContent } from "../../../lib/api";
import { useContent } from "../../../lib/hooks/useContent";
import { useScrollToTop } from "../../../lib/hooks/useScrollToTop";

export function ArticleList({}: {}) {
  const { content, loading } = useContent(fetchContent, {
    queryParams: { limit: 100 },
    url: ":baseUrl/articles",
    expectedType: "article-list",
  });

  useScrollToTop();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 max-w-400 items-end mx-auto pt-12 p-3">
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
    </>
  );
}

export default ArticleList;
