import { useState } from "react";
import { preload } from "react-dom";
import { Link } from "react-router";
import type { ArticleData } from "../../../lib/types";
import { formatDate } from "../../../lib/utils";
import { Eye } from "lucide-react";
import VoteBar from "../VoteBar";

export function ArticleCardItem({
  article,
  loading = true,
  index = 0,
}: {
  article: ArticleData;
  loading: boolean;
  index: number;
}) {
  preload(article.article_img_url, {
    as: "image",
    imageSizes: "(max-width: 512px) 512px, 1024px",
  });

  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const isAllLoaded = !loading && !imgLoading;

  return (
    <div
      key={article.article_id}
      className="article-card flex flex-col justify-between gap-1 h-full"
    >
      {isAllLoaded ?
        <Link
          className="group relative block"
          to={"/articles/" + article.article_id}
        >
          <h2 className="font-bold text-xl h-full text-c-jetblack">
            {article.title}
          </h2>
        </Link>
      : <div className="flex flex-col gap-1">
          <div className="h-6.5 bg-c-powderblue/90 rounded-2xl animate-pulse" />
          <div className="h-6.5 bg-c-powderblue/90 rounded-2xl animate-pulse" />
        </div>
      }

      <div className="flex flex-col gap-3">
        <div className="p-0.5 overflow-hidden relative rounded-xl">
          {isAllLoaded && (
            <>
              <div
                className={`move-along-edge ${
                  index % 3 === 0 ? "animate-move-clock-wise"
                  : index % 2 === 0 ? "animate-move-anti-clock-wise"
                  : "animate-move-clock-wise-fast"
                } size-20 bg-c-burntpeach/90 border-spinner blur-[3px] rounded-full`}
              />
              <div
                className={`move-along-edge ${
                  index % 3 === 0 ? "animate-move-anti-clock-wise-fast"
                  : index % 2 === 0 ? "animate-move-clock-wise-fast"
                  : "animate-move-anti-clock-wise"
                } size-20 rounded-full bg-c-duskblue/90 blur-[3px] border-spinner`}
              />
            </>
          )}
          <div
            className={`${!isAllLoaded && "hidden"} relative bg-c-burntpeach text-right rounded-xl`}
          >
            <Link
              className="group relative block"
              to={`/articles/${article.article_id}#`}
            >
              <img
                className="self-end h-52 w-full object-cover rounded-t-xl mb-1 group-hover:brightness-120 transition-all"
                fetchPriority="high"
                src={article.article_img_url}
                onLoad={() => {
                  setImgLoading(false);
                }}
              />
              <Eye className="opacity-0 hover:scale-105 hover:rotate-180 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-32 text-c-burntpeach/70  bg-c-jetblack/40 backdrop-blur-sm rounded-full" />
            </Link>
            <div className="flex justify-between px-3">
              <span className="text-white font-semibold">
                {formatDate(article.created_at)}
              </span>
              <VoteBar
                votes={Number(article.votes)}
                className="flex flex-row gap-3 text-white pb-2"
                options={{
                  url: ":baseUrl/articles/:article_id",
                  articleId: article.article_id.toString(),
                }}
              />
            </div>
          </div>
        </div>
        {!isAllLoaded && (
          <div className="h-61 bg-c-powderblue/90 rounded-2xl animate-pulse" />
        )}
        {isAllLoaded ?
          <div className="flex justify-between items-center bg-white">
            <span className="topic px-3 pt-1 pb-1.5 rounded-2xl bg-c-duskblue text-white w-fit">
              {article?.topic}
            </span>
            <span>@{article.author}</span>
          </div>
        : <div className="h-9 bg-c-powderblue/90 rounded-2xl animate-pulse" />}
      </div>
    </div>
  );
}

export default ArticleCardItem;
