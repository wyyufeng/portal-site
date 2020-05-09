import { AxiosInstance } from 'axios';
export declare function createHttpClient(baseURL: string, appId: string, appKey: string): AxiosInstance;
export declare function encryptApiKey(key: string): string;
