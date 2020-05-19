import { useQueryList } from "../hooks"
import { useHistory, useLocation } from "react-router"
import { useState } from "react";
import { noop } from "../util";
import { QueryListEffectResult } from "../hooks/useQueryList";


export interface ListControllerProps {
  /**
   * 列表id
   */
  resource: string;
  /**
    * 每页条数
    */
  size?: number;
  /**
   * 当列表数据改变时的回调函数
   */
  onListChange?: () => any;
  /**
   * 当前页
   */
  currentPage?: number;
}
export interface ListControllerResult extends QueryListEffectResult {
}
export const useListController = ({ resource, size = 3, onListChange = noop, currentPage = 1 }: ListControllerProps) => {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const pageParam = params.get('page') || currentPage;
  const [page, setPage] = useState(+pageParam);
  const data = useQueryList(resource, page, size);
  const onPageChange = (page: number) => {
    setPage(page);
    onListChange();
    params.set('page', page + '');
    history.push({
      pathname: location.pathname,
      search: '?' + params.toString()
    });
  };
  return {
    onPageChange, ...data
  }
}

