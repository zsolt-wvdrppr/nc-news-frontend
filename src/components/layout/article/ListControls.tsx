import TopicSelector from "./TopicSelector";
import FilterSelector from "./FilterSelector";

export function ListControls({}: {}) {
  return (
    <div className="flex flex-wrap gap-5 mb-6 justify-between mr-3">
      <TopicSelector />
      <FilterSelector />
    </div>
  );
}

export default ListControls;
