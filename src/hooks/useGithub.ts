import { useState, useEffect, useCallback } from "react";
import {
  fetchGithubTelemetry,
  FALLBACK_GITHUB,
  type GithubTelemetry,
} from "../services/githubService";

export function useGithub() {
  const [data, setData] = useState<GithubTelemetry>(FALLBACK_GITHUB);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadData = useCallback(async (forceRefresh: boolean = false) => {
    if (forceRefresh) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const telemetry = await fetchGithubTelemetry(forceRefresh);
      setData(telemetry);
    } catch {
      setData(FALLBACK_GITHUB);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  const refetch = useCallback(() => {
    return loadData(true);
  }, [loadData]);

  return {
    data,
    loading,
    isRefreshing,
    refetch,
  };
}
