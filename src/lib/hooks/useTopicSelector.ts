import { useState } from "react";
import type { QueryParams } from "../types";
import { useNavigate, useParams } from "react-router";

export const useTopicSelector = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownBtn = () => {
    setIsOpen(!isOpen);
  };

  const updateFilter = (filter: QueryParams) => {
    if (filter?.topic) {
      navigate("/archive/topics/" + filter.topic);
    } else {
      navigate("/archive/");
    }
    setIsOpen(false);
  };

  const handleTopicUpdate = (value: string) => {
    updateFilter({ topic: value });
  };

  return { handleDropDownBtn, handleTopicUpdate, isOpen, params };
};
