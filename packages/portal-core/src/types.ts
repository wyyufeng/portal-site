export type DataProvider = {
  queryRoutes: (params: any) => Promise<any>;
};
