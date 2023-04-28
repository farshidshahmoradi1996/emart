export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      ENV: 'test' | 'dev' | 'prod';
      APP_PORT: string;
      DATABASE_HOST: string;
      DATABASE_USER: string;
      DATABASE_PORT: string;
      DATABASE_PASSWORD: string;
    }
  }
}
