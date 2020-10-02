export interface RequestServiceInterface {
  get: (URL: string) => object;
  post: (URL: string, headers: object) => object;
}
