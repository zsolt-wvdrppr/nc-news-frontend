import { Route, Routes } from "react-router";
import ArticleList from "./ArticleList";
import SingleArticle from "./SingleArticle";
import NotFound from "./NotFound";
import ErrorDisplay from "../ErrorDisplay";
import { useContext } from "react";
import ErrorContext from "../../lib/contexts/ErrorContext";

export function Layout({}: {}) {
  const { globalError } = useContext(ErrorContext);

  return (
    <div className="max-w-screen min-h-screen">
      <ErrorDisplay error={globalError} />
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
