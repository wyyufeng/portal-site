export type DataProvider = {
    [method: string]: () => Promise<any>,
}