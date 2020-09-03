export type Config = Readonly<{
  graphUri?: string;
  authToken?: string;
  isDevelopment: boolean;
}>;

export const CONFIG: Config = Object.freeze({
  graphUri: process.env.REACT_APP_GRAPH_URI,
  authToken: process.env.REACT_APP_AUTH_TOKEN,
  isDevelopment: process.env.NODE_ENV !== 'production',
});
