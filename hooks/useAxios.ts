import axios from "axios";
import { useEffect, useState } from "react";

interface urlType {
  url: string;
  apiType: "image" | "data";
}

export const useAxios = ({ url, apiType }: urlType) => {
  //use the default url based on the type of data to be fetched
  axios.defaults.baseURL =
    apiType === "data" ? process.env.API_BASE_URL : process.env.API_IMAGE_URL;

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (error: any) {
        setError(error.message || "An Unexpected Error Occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { response, loading, error };
};
