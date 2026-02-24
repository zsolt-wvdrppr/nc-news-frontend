import { LazyLoadImage } from "react-lazy-load-image-component";
import { preload } from "react-dom";
import { Link } from "react-router";
import type { Article } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { ThumbsUp, Eye } from "lucide-react";
import "react-lazy-load-image-component/src/effects/blur.css";
import VoteBar from "./VoteBar";

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
        <Link
          className="group relative block"
          to={"/articles/" + article?.article_id}
        >
          <h3 className="font-bold text-xl h-full text-c-jetblack">
            {article?.title}
          </h3>
        </Link>
      : <div className="flex flex-col gap-1">
          <div className="h-6.5 bg-c-powderblue rounded-2xl animate-pulse" />
          <div className="h-6.5 bg-c-powderblue rounded-2xl animate-pulse" />
        </div>
      }

      <p className="flex justify-between"></p>
      {!loading ?
        <div className={`relative pb-2 bg-c-burntpeach text-right rounded-xl`}>
          <Link
            className="group relative block"
            to={"/articles/" + article?.article_id}
          >
            <LazyLoadImage
              className="self-end h-52 w-full rounded-t-xl mb-1 group-hover:brightness-120 transition-all"
              src={article?.article_img_url}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
            <Eye className="opacity-0 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-32 text-c-burntpeach/80  bg-c-jetblack/40 backdrop-blur-sm rounded-full" />
          </Link>
          <div className="flex justify-between px-3">
            <span className="text-white font-semibold">
              {formatDate(article?.created_at)}
            </span>
            <VoteBar article={article} />
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
