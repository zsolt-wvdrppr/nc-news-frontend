import { useContent } from "../../../lib/hooks/useContent";
import { fetchContent } from "../../../lib/api";
import type { FilterType } from "../../../lib/types";
import { useNavigate } from "react-router";

export function ListControls({}: {}) {
  const { content } = useContent(fetchContent, {
    url: ":baseUrl/topics",
    expectedType: "topic-list",
  });

  const navigate = useNavigate();

  console.log(content);

  const updateFilter = (filter: FilterType) => {
    console.log("update filter");
    if (filter?.topic) navigate("/archive/topics/" + filter.topic);
  };

  const handleTopicUpdate = (value: string) => {
    console.log(value);
    updateFilter({ topic: value });
  };

  if (content?.type === "topic-list")
    return (
      <div className="w-fit min-w-96 mx-auto mb-12">
        <select
          className="border-3 border-c-burntpeach w-full h-10 font-semibold text-lg outline-none rounded-2xl"
          onChange={(e) => {
            handleTopicUpdate(e.target.value);
          }}
        >
          <option key="default-key" className="text-center" defaultChecked>
            Select Topic
          </option>
          {content.type === "topic-list" &&
            content.topics.map((topic) => {
              return (
                <option key={topic.slug} className="" value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
        </select>
      </div>
    );
}

export default ListControls;
