import { useState } from "react";
import { useContent } from "../../../lib/hooks/useContent";
import { fetchContent } from "../../../lib/api";
import type { FilterType } from "../../../lib/types";
import { useNavigate } from "react-router";
import { Minus, Plus, Trash2 } from "lucide-react";

export function ListControls({}: {}) {
  const { content } = useContent(fetchContent, {
    url: ":baseUrl/topics",
    expectedType: "topic-list",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownBtn = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  console.log(content);

  const updateFilter = (filter: FilterType) => {
    console.log("update filter");
    if (filter?.topic) {
      navigate("/archive/topics/" + filter.topic);
    } else {
      navigate("/archive/");
    }
  };

  const handleTopicUpdate = (value: string) => {
    updateFilter({ topic: value });
  };

  if (content?.type === "topic-list")
    return (
      <div className="topic-selector-container w-fit min-w-60 mb-12">
        <div
          id="topic-selector"
          className={`relative font-semibold text-lg outline-none rounded-xl flex flex-col`}
        >
          <button
            key="default-key"
            className={`${isOpen ? "rounded-t-xl" : "rounded-xl"} z-20 bg-c-duskblue pb-2 transition-all duration-50 relative text-center text-white font-semibold flex flex-row items-center justify-center px-2`}
            onClick={handleDropDownBtn}
          >
            <span className="pt-1">{"- Select Topic -"}</span>
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
                    className="text-center hover:bg-c-jetblack/50 py-2 text-white"
                    onClick={() => {
                      handleTopicUpdate(topic.slug);
                    }}
                  >
                    {topic.slug.slice(0, 1).toUpperCase() + topic.slug.slice(1)}
                  </button>
                );
              })}
            <button
              key={"reset"}
              className="text-center hover:bg-c-burntpeach/50 py-2 text-white flex flex-row justify-center"
              onClick={() => {
                handleTopicUpdate("");
              }}
            >
              <Trash2 className="absolute left-5 bottom-4" /> {"- Reset -"}
            </button>
          </div>
        </div>
      </div>
    );
}

export default ListControls;
