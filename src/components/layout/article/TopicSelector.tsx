import { useContent } from "../../../lib/hooks/useContent";
import { useTopicSelector } from "../../../lib/hooks/useTopicSelector";
import { fetchContent } from "../../../lib/api";
import { Loader, Minus, Newspaper, Plus, Trash2 } from "lucide-react";

export function TopicSelector({}: {}) {
  const { content, loading } = useContent(fetchContent, {
    url: ":baseUrl/topics",
    expectedType: "topic-list",
  });

  const { handleDropDownBtn, handleTopicUpdate, isOpen, params } =
    useTopicSelector();

  if (content?.type === "topic-list" && !loading)
    return (
      <div className="topic-selector-container w-fit sm:min-w-60">
        <div
          id="topic-selector"
          className={`relative font-semibold text-lg outline-none rounded-xl flex flex-col`}
        >
          <button
            key="default-key"
            className={`${isOpen ? "rounded-t-xl" : "rounded-xl"} pl-4 pr-9 z-20 bg-c-duskblue pb-2 transition-all duration-50 relative text-center text-white font-semibold flex flex-row items-center justify-center`}
            onClick={handleDropDownBtn}
          >
            <Newspaper className="hidden sm:block mt-2 mr-4" />
            <span className="pt-1 mt-1 text-left w-full">{"Select Topic"}</span>
            {isOpen && (
              <Minus className="absolute right-0 stroke-white mt-2 mr-1" />
            )}
            {!isOpen && (
              <Plus className="absolute right-0 stroke-white mt-2 mr-1" />
            )}
          </button>
          <div
            className={`${isOpen ? "opacity-100 z-10" : "opacity-0 -translate-y-8 -z-10"} absolute w-full top-7.5 transition-all duration-500 topic-list-wrapper pb-2 pt-3 flex flex-col gap-3 backdrop-blur-sm bg-c-duskblue/90`}
          >
            {content.type === "topic-list" &&
              content.topics.map((topic) => {
                return (
                  <button
                    key={topic.slug}
                    className={`${topic.slug === params.topic && "bg-c-jetblack"} text-center hover:bg-c-jetblack/50 py-2 text-white`}
                    onClick={() => {
                      handleTopicUpdate(topic.slug);
                    }}
                  >
                    {topic.slug.slice(0, 1).toUpperCase() + topic.slug.slice(1)}
                  </button>
                );
              })}
            <button
              aria-label="Reset topic filter"
              key={"reset"}
              title="Reset topic filter"
              className="text-center hover:bg-c-burntpeach/50 py-2 text-white flex flex-row justify-center"
              onClick={() => {
                handleTopicUpdate("");
              }}
            >
              <Trash2 className="size-6" />
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative topic-selector-container w-[148.5px] sm:min-w-60 h-11 bg-c-duskblue animate-pulse rounded-xl">
      <Loader className="absolute right-1/2 translate-x-1/2 stroke-white mt-2.5 mr-1 animate-spin" />
    </div>
  );
}

export default TopicSelector;
