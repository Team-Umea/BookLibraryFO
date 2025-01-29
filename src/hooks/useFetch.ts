import axios, { AxiosResponse } from "axios";
import { ApiStatus, Book } from "../types/types";

const useFetch = (url: string, setApiStatus: (apiStatus: ApiStatus) => void) => {
  const callApi = async (): Promise<AxiosResponse<Book[]> | null> => {
    try {
      setApiStatus("pending");
      const response = await axios.get<Book[]>(url);

      setApiStatus("success");

      return response;
    } catch (error: unknown) {
      setApiStatus("error");
      console.error(error);
      return null;
    }
  };

  return { callApi };
};

export default useFetch;
