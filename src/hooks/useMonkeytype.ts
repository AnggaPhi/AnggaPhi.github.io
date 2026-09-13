import { useState, useEffect, useCallback } from "react";
import {
  fetchMonkeytypeTelemetry,
  FALLBACK_MONKEYTYPE,
  type MonkeytypeTelemetry,
} from "../services/monkeytypeService";

export function useMonkeytype() {
  const [data, setData] = useState<MonkeytypeTelemetry>(FALLBACK_MONKEYTYPE);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadData = useCallback(async (forceRefresh: boolean = false) => {
    if (forceRefresh) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const telemetry = await fetchMonkeytypeTelemetry(forceRefresh);
      setData(telemetry);
    } catch {
      setData(FALLBACK_MONKEYTYPE);
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
