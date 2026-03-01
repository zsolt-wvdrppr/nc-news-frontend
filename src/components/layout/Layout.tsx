import { Route, Routes } from "react-router";
import ArticleList from "./article/ArticleList";
import SingleArticle from "./article/SingleArticle";
import NotFound from "./NotFound";
import ErrorDisplay from "../ErrorDisplay";
import { useContext } from "react";
import ErrorContext from "../../lib/contexts/ErrorContext";
import LogIn from "./user/LogIn";
import SignUp from "./user/SignUp";

export function Layout({}: {}) {
  const { globalError } = useContext(ErrorContext);

  return (
    <div className="max-w-screen min-h-screen">
      <ErrorDisplay error={globalError} />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Layout;
