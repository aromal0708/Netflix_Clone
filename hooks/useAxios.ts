import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = process.env.API_BASE_URL;

export const useAxios = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { response, loading, error };
};
