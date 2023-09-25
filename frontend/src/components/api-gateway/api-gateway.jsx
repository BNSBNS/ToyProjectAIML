import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const getData = async (signal) => {
  try {
    const response = await api.get("/ping", { signal });
    // console.log("response ", response);
    return response.data.message;
  } catch (error) {
    // console.log('api error ',error.message);
    throw Error(error.message);
  }
};
