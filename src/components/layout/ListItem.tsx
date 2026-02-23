import type { Article } from "../../lib/types";
import { formatDate } from "../../lib/utils";

export function ListItem({ article }: { article: Article }) {
  return (
    <div className="article-card m-8 flex flex-col justify-between gap-3">
      <h3>{article?.title}</h3>
      <p className="topic px-6 py-2 rounded-2xl bg-amber-100 w-fit">
        {article?.topic}
      </p>
      <p className="flex justify-between">
        <span>{formatDate(article?.created_at)}</span>
        <span>{article?.author}</span>
      </p>
      <div className="p-3 bg-amber-100 text-right rounded-xl">
        <img className="self-end h-80 w-full" src={article?.article_img_url} />
        <span>{article?.votes}</span>
      </div>
    </div>
  );
}

export default ListItem;
