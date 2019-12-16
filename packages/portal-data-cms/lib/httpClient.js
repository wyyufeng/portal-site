"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var crypto_js_1 = __importDefault(require("crypto-js"));
function createHttpClient(baseURL, appId, appKey) {
    var httpClient = axios_1.default.create({
        baseURL: baseURL,
    });
    httpClient.interceptors.request.use(authInterceptor(appKey, appId));
    httpClient.interceptors.response.use(function (res) { return res; }, resErrorInterceptor);
    return httpClient;
}
exports.createHttpClient = createHttpClient;
function encryptApiKey(key) {
    var r = Math.random() + '';
    var randomSix = r.substr(-6, 6);
    var text = randomSix + +new Date();
    var encrypt = crypto_js_1.default.AES.encrypt(text, crypto_js_1.default.enc.Utf8.parse(key), {
        mode: crypto_js_1.default.mode.ECB,
        padding: crypto_js_1.default.pad.Pkcs7,
    });
    return encrypt.toString();
}
exports.encryptApiKey = encryptApiKey;
function authInterceptor(key, id) {
    return function (req) {
        req.headers.token = encryptApiKey(key);
        req.headers.appId = id;
        return req;
    };
}
function resErrorInterceptor(err) {
    console.group('🚨🚨httpError');
    console.log('message:', err.message);
    console.log('stack', err.stack);
    console.groupEnd();
    Promise.reject(err);
    return err;
}
