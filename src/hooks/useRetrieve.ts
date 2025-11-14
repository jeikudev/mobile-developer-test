import { useEffect, useState } from "react";
import { retrieveSubmissions } from "../api";
import { RetrieveItem } from "../types";

export function useRetrieve() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RetrieveItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await retrieveSubmissions();
      if (res.status === "success") {
        setData(res.data);
      } else {
        setError(res.message || "Unexpected server response");
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { loading, data, error, load };
}
