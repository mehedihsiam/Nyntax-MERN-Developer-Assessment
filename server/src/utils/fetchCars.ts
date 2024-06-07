import getEnv from "./getEnv";

const fetchCars = async () => {
  try {
    const url = getEnv("CAR_LIST_API_URL");
    const response = await fetch(url as string);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("REMOTE CAR FETCHING ERROR__", error);
    return null;
  }
};

export default fetchCars;
