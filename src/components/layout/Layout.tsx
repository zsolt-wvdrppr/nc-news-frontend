import { Route, Routes } from "react-router";
import ArticleList from "./article/ArticleList";
import SingleArticle from "./article/SingleArticle";
import NotFound from "./NotFound";
import ErrorDisplay from "../ErrorDisplay";
import { useContext } from "react";
import ErrorContext from "../../lib/contexts/ErrorContext";
import LogIn from "./user/LogIn";
import SignUp from "./user/SignUp";
import About from "./About";
import HomePage from "./HomePage";

export function Layout() {
  const { globalError, setGlobalError } = useContext(ErrorContext);

  return (
    <div className="max-w-screen min-h-screen">
      {globalError && (
        <ErrorDisplay error={globalError} setError={setGlobalError} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/archive/topics/:topic"
          element={<ArticleList enableListControls={true} />}
        />
        <Route
          path="/archive"
          element={<ArticleList enableListControls={true} />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Layout;
