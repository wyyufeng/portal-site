import { useQueryOne } from "../hooks"
import { QueryOneEffectResult } from "../hooks/useQueryOne"

export interface ArticleControllerProps {
  /**
   * 资源id
   */
  resource: string;
  /**
   * 资源路径
   */
  path?: string;
}

export const useArticleController = ({ resource, path }: ArticleControllerProps): QueryOneEffectResult => {
  const data = useQueryOne(resource, path);
  return data
}

