import { History } from 'history';
declare function createHistory(type: 'hash' | 'browser', basename: string | undefined): History;
export default createHistory;
