import { useState } from "react";
import { useContent } from "../../../lib/hooks/useContent";
import { fetchContent } from "../../../lib/api";
import type { QueryParams } from "../../../lib/types";
import { useNavigate, useLocation } from "react-router";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { formatQueryParams } from "../../../lib/utils";

export function FilterSelector({}: {}) {
  const { content } = useContent(fetchContent, {
    url: ":baseUrl/topics",
    expectedType: "topic-list",
  });

  const sortByList = ["Title", "Topic", "Author", "Crated_at", "Votes"];

  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownBtn = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const updateFilter = (filter: QueryParams) => {
    navigate(pathname + formatQueryParams(filter));
    setIsOpen(false);
  };

  const handleReset = () => {
    navigate(pathname);
    setIsOpen(false);
  };

  const handleSortBy = (
    sortBy: string = "created_at",
    order: string = "desc",
  ) => {
    console.log("handleSortBy");
    updateFilter({ sortBy: sortBy, order: order });
  };

  if (content?.type === "topic-list")
    return (
      <div className="topic-selector-container w-fit sm:min-w-60">
        <div
          id="topic-selector"
          className={`relative font-semibold text-lg outline-none rounded-xl flex flex-col`}
        >
          <button
            key="default-key"
            className={`${isOpen ? "rounded-t-xl" : "rounded-xl"} pl-4 min-w-35 z-20 bg-c-duskblue pb-2 transition-all duration-50 relative text-center text-white font-semibold flex flex-row items-center justify-center px-2`}
            onClick={handleDropDownBtn}
          >
            <ArrowUpDown className="hidden sm:block mt-2 mr-2" />
            <span className="pt-1 mt-1 pr-8 pl-2 text-left w-full flex">
              {"Sort by"}
            </span>
            {isOpen && (
              <Minus className="absolute right-0 stroke-white mt-2 mr-1" />
            )}
            {!isOpen && (
              <Plus className="absolute right-0 stroke-white mt-2 mr-1" />
            )}
          </button>
          <div
            className={`${isOpen ? "opacity-100 z-10" : "opacity-0 -translate-y-8 scale-x-50 translate-x-12 sm:scale-none sm:translate-x-0 -z-10"} rounded-tl-xl sm:rounded-tl-none absolute w-full min-w-52 right-0 top-10 transition-all duration-500 topic-list-wrapper pb-2 pt-3 flex flex-col gap-3 backdrop-blur-sm bg-c-duskblue/90`}
          >
            {sortByList.map((item) => {
              return (
                <div
                  key={item}
                  className="text-left hover:bg-c-jetblack/50 py-2 text-white flex flex-row pl-4 justify-between"
                >
                  <span className="">{item.replace("_", " ")}</span>
                  <div className="flex flex-row pr-4 gap-5">
                    <button
                      className="click-animation hover:scale-120 transition-all"
                      onClick={() => {
                        handleSortBy(item.toLocaleLowerCase(), "desc");
                      }}
                    >
                      <ArrowDownWideNarrow />
                    </button>
                    <button
                      className="click-animation hover:scale-120 transition-all"
                      onClick={() => {
                        handleSortBy(item.toLocaleLowerCase(), "asc");
                      }}
                    >
                      <ArrowUpNarrowWide />
                    </button>
                  </div>
                </div>
              );
            })}

            <button
              aria-label="Reset filters"
              title="Reset filters"
              key={"reset"}
              className="text-center click-animation hover:bg-c-burntpeach/50 py-2 text-white flex flex-row justify-center"
              onClick={handleReset}
            >
              <Trash2 className="size-6" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default FilterSelector;
