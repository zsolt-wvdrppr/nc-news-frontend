import { useMemo, useState } from "react";
import type { QueryParams } from "../types";
import { useNavigate, useLocation, useSearchParams } from "react-router";

import { formatQueryParams } from "../utils";

export const useFilterSelector = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");

  const filter = useMemo<QueryParams>(() => {
    const output: QueryParams = {};
    if (sortBy) output.sortBy = sortBy;
    if (order) output.order = order;
    return output;
  }, [sortBy, order]);

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

  return { handleDropDownBtn, handleReset, handleSortBy, filter, isOpen };
};
