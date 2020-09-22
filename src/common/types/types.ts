export interface User {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface Messages {
  en: {
    [key: string]: string;
  };
  ru: {
    [key: string]: string;
  };
}
