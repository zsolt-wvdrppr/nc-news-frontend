import { useEffect, useState } from "react";
import type { QueryParams } from "../types";
import { useNavigate, useLocation, useSearchParams } from "react-router";

import { formatQueryParams } from "../utils";

export const useFilterSelector = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<Array<string>>([]);

  useEffect(() => {
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");

    if (sortBy && order) {
      setActiveFilter([sortBy, order]);
    } else {
      setActiveFilter([]);
    }
    setIsOpen(false);
  }, [searchParams, pathname]);

  const handleDropDownBtn = () => {
    setIsOpen(!isOpen);
  };

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
    updateFilter({ sortBy, order });
  };

  return { handleDropDownBtn, handleReset, handleSortBy, activeFilter, isOpen };
};
