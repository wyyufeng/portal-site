import axios from 'axios';
import CryptoJS from 'crypto-js';
export function createHttpClient(baseURL, appId, appKey) {
    var httpClient = axios.create({
        baseURL: baseURL,
    });
    httpClient.interceptors.request.use(authInterceptor(appKey, appId));
    httpClient.interceptors.response.use(function (res) { return res; }, resErrorInterceptor);
    return httpClient;
}
export function encryptApiKey(key) {
    var r = Math.random() + '';
    var randomSix = r.substr(-6, 6);
    var text = randomSix + +new Date();
    var encrypt = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypt.toString();
}
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
