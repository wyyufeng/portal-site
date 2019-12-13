import { createBrowserHistory, createHashHistory, History } from 'history';





function createHistory(type: 'hash' | 'browser', basename: string | undefined): History {
    return type === 'hash' ? createHashHistory({ basename }) : createBrowserHistory()
}

export default createHistory