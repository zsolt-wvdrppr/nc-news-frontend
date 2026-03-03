import ArticleList from "./article/ArticleList";

export function HomePage() {
  return (
    <>
      <ArticleList enableListControls={false} />
    </>
  );
}

export default HomePage;
