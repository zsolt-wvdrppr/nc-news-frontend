import { Route, Routes } from "react-router";
import ArticleList from "./ArticleList";
import SingleArticle from "./SingleArticle";
import NotFound from "./NotFound";

export function Layout({}: {}) {
  return (
    <div className="max-w-screen min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList presetFilters={[]} disableListControls={true} />
          }
        />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Layout;
