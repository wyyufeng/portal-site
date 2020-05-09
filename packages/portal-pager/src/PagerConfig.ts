import * as React from 'react';
export interface PagerConfigInterface {
  prevLabel?: string;
  nextLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
  showFirst?: boolean;
  showLast?: boolean;
  pagerClassName?: string;
  pageClassName?: string;
  containerClassName?: string;
  showTotal?: boolean;
  showJump?: boolean;
  pageRange?: number;
  autoHide?: boolean;
}
const PagerConfig = React.createContext<PagerConfigInterface>({});
export default PagerConfig;
