import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

export function Layout({}: {}) {
  return (
    <>
      <h1>Layout</h1>
      <ArticleList presetFilters={[]} disableListControls={true} />
    </>
  );
}

export default Layout;
