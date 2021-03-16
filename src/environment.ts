type Environment = {
  apiUrl: string;
  staticUrl: string;
};

export const environment: Environment = {
  apiUrl: process.env.REACT_APP_API_URL as string,
  staticUrl: process.env.REACT_APP_STATIC_URL as string,
};
