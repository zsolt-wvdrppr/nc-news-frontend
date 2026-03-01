import { useParams } from "react-router";
import ArticleCardItem from "./ArticleCardItem";
import { fetchContent } from "../../../lib/api";
import { useContent } from "../../../lib/hooks/useContent";
import { useScrollToTop } from "../../../lib/hooks/useScrollToTop";
import { useRedirect404 } from "../../../lib/hooks/useRedirect404";

export function ArticleList({}: {}) {
  const filter = useParams();

  const { content, loading, error } = useContent(fetchContent, {
    queryParams: { limit: 100, ...filter },
    url: `:baseUrl/articles`,
    expectedType: "article-list",
  });

  useRedirect404(error);

  useScrollToTop();

  return (
    <div key={filter ? filter.toString() : "no-filter"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 max-w-400 items-end mx-auto p-3">
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
