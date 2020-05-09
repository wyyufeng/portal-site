import axios, { AxiosInstance } from 'axios';
import CryptoJS from 'crypto-js';

export function createHttpClient(
    baseURL: string,
    appId: string,
    appKey: string
): AxiosInstance {
    const httpClient = axios.create({
        baseURL,
    });
    httpClient.interceptors.request.use(authInterceptor(appKey, appId));
    httpClient.interceptors.response.use(res => res, resErrorInterceptor);
    return httpClient;
}

export function encryptApiKey(key: string): string {
    const r = Math.random() + '';
    const randomSix = r.substr(-6, 6);
    const text = randomSix + +new Date();
    const encrypt = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypt.toString();
}

function authInterceptor(key: string, id: string) {
    return (req: any) => {
        req.headers.token = encryptApiKey(key);
        req.headers.appId = id;
        return req;
    };
}

function resErrorInterceptor(err: Error) {
    console.group('🚨🚨httpError');
    console.log('message:', err.message);
    console.log('stack', err.stack);
    console.groupEnd();
    Promise.reject(err);
    return err;
}
