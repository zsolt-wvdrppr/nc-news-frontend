import { LazyLoadImage } from "react-lazy-load-image-component";
import { preload } from "react-dom";
import type { Article } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { ThumbsUp } from "lucide-react";
import "react-lazy-load-image-component/src/effects/blur.css";

export function ListItem({
  article,
  loading = true,
}: {
  article: Article;
  loading: boolean;
}) {
  preload(article?.article_img_url, {
    as: "image",
    imageSizes: "(max-width: 512px) 512px, 1024px",
  });

  return (
    <div
      key={article.article_id}
      className="article-card m-6 flex flex-col justify-between gap-1"
    >
      {!loading ?
        <h3 className="font-bold text-xl h-full text-c-jetblack">
          {article?.title}
        </h3>
      : <div className="flex flex-col gap-1">
          <div className="h-6.5 bg-c-powderblue rounded-2xl animate-pulse" />
          <div className="h-6.5 bg-c-powderblue rounded-2xl animate-pulse" />
        </div>
      }

      <p className="flex justify-between"></p>
      {!loading ?
        <div className={`pb-2 bg-c-burntpeach text-right rounded-xl`}>
          <LazyLoadImage
            className="self-end h-52 w-full rounded-t-xl mb-1"
            src={article?.article_img_url}
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
          <div className="flex justify-between px-3">
            <span className="text-white font-semibold">
              {formatDate(article?.created_at)}
            </span>
            <div className="flex flex-row gap-3 text-white">
              <button aria-label="down-vote">
                <ThumbsUp className="rotate-180 hover:animate-bounce cursor-pointer" />
              </button>
              <span className=" font-bold">{article?.votes}</span>
              <button>
                <ThumbsUp
                  aria-label="up-vote"
                  className="hover:animate-bounce  cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      : <div className="h-61 bg-c-powderblue rounded-2xl animate-pulse" />}
      {!loading ?
        <div className="flex justify-between items-center">
          <span className="topic px-3 pt-1 pb-1.5 rounded-2xl bg-c-duskblue text-white w-fit">
            {article?.topic}
          </span>
          <span>@{article?.author}</span>
        </div>
      : <div className="h-9 bg-c-powderblue rounded-2xl animate-pulse" />}
    </div>
  );
}

export default ListItem;
