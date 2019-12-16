"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
function createHistory(type, basename) {
    return type === 'hash'
        ? history_1.createHashHistory({ basename: basename })
        : history_1.createBrowserHistory();
}
exports.default = createHistory;
