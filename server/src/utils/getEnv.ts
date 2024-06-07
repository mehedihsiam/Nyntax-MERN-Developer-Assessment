type TKey = "PORT" | "DB_URL" | "CAR_LIST_API_URL";
const getEnv = <T>(key: TKey, defaultValue?: unknown) => {
  return (process.env[key] || defaultValue) as T;
};

export default getEnv;
