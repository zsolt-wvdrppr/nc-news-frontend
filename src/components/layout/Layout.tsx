import { Route, Routes } from "react-router";
import ArticleList from "./ArticleList";

export function Layout({}: {}) {
  return (
    <div className="max-w-screen">
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList presetFilters={[]} disableListControls={true} />
          }
        />
      </Routes>
    </div>
  );
}

export default Layout;
