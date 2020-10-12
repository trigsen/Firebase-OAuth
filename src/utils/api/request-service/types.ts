export interface RequestServiceInterface {
  get: (URL: string) => Promise<unknown>;
  post: (URL: string, headers: object) => Promise<unknown>;
}
