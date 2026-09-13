/**
 * Monkeytype Real-Time Telemetry Service
 * Fetches live typing statistics, personal bests, and streaks directly from api.monkeytype.com
 */

export interface MonkeytypePersonalBest {
  mode: string;
  label: string;
  wpm: number;
  acc: number;
  raw: number;
  consistency?: number;
  language?: string;
}

export interface MonkeytypeTelemetry {
  username: string;
  uid: string;
  wpmBest: number;
  accuracyBest: string;
  testsCompleted: number;
  testsStarted: number;
  timeTypingSeconds: number;
  timeTyping: string;
  streakDays: number;
  maxStreakDays: number;
  xp: number;
  personalBests: MonkeytypePersonalBest[];
  isLive: boolean;
  lastUpdated?: string;
  error?: string;
}

const DEFAULT_API_KEY = "NmFhNmNhZDhiNWE3OGQ4NDE4YzE3ZDcwLkstMjZ3TE1CMV9LeDdyWHJhQTFWelA4a2xYSHRFUHBB";
const CACHE_KEY = "monkeytype_telemetry_cache";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

export const FALLBACK_MONKEYTYPE: MonkeytypeTelemetry = {
  username: "anggaphi",
  uid: "oBumbS88D7O3LnWgXA2vMJ143UN2",
  wpmBest: 96.8,
  accuracyBest: "100%",
  testsCompleted: 1218,
  testsStarted: 6382,
  timeTypingSeconds: 71144,
  timeTyping: "19 hrs 45 mins",
  streakDays: 1,
  maxStreakDays: 14,
  xp: 210264,
  personalBests: [
    { mode: "words-10", label: "10 Words", wpm: 96.84, acc: 100, raw: 96.84, consistency: 74.18, language: "indonesian" },
    { mode: "time-30", label: "30 Seconds", wpm: 85.99, acc: 99.09, raw: 85.99, consistency: 80.58, language: "indonesian" },
    { mode: "words-25", label: "25 Words", wpm: 84.04, acc: 98.13, raw: 84.04, consistency: 76.6, language: "indonesian" },
    { mode: "time-60", label: "60 Seconds", wpm: 83.59, acc: 93.18, raw: 89.39, consistency: 51.35, language: "indonesian" },
    { mode: "time-15", label: "15 Seconds", wpm: 78.95, acc: 97.06, raw: 78.95, consistency: 78.39, language: "indonesian" },
    { mode: "words-50", label: "50 Words", wpm: 69.29, acc: 95.13, raw: 69.29, consistency: 67.71, language: "indonesian" },
  ],
  isLive: false,
};

function formatTypingTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) {
    return `${hrs} hrs ${mins} mins`;
  }
  return `${mins} mins`;
}

export async function fetchMonkeytypeTelemetry(forceRefresh: boolean = false): Promise<MonkeytypeTelemetry> {
  // Check local cache if not forced
  if (!forceRefresh && typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data) {
          return {
            ...parsed.data,
            isLive: true,
            lastUpdated: new Date(parsed.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          };
        }
      }
    } catch {
      // Ignore cache read errors
    }
  }

  const apiKey = (import.meta as any).env?.VITE_MONKEYTYPE_API_KEY || DEFAULT_API_KEY;
  const headers = {
    Authorization: `ApeKey ${apiKey}`,
  };

  try {
    const [statsRes, pbTimeRes, pbWordsRes, streakRes] = await Promise.all([
      fetch("https://api.monkeytype.com/users/stats", { headers }),
      fetch("https://api.monkeytype.com/users/personalBests?mode=time", { headers }),
      fetch("https://api.monkeytype.com/users/personalBests?mode=words", { headers }),
      fetch("https://api.monkeytype.com/users/streak", { headers }),
    ]);

    if (!statsRes.ok) {
      throw new Error(`Monkeytype stats API returned status ${statsRes.status}`);
    }

    const statsData = (await statsRes.json()).data;
    const pbTimeData = (await pbTimeRes.json()).data || {};
    const pbWordsData = (await pbWordsRes.json()).data || {};
    const streakData = (await streakRes.json()).data || {};

    const testsCompleted = statsData?.completedTests ?? FALLBACK_MONKEYTYPE.testsCompleted;
    const testsStarted = statsData?.startedTests ?? FALLBACK_MONKEYTYPE.testsStarted;
    const timeTypingSeconds = Math.round(statsData?.timeTyping ?? FALLBACK_MONKEYTYPE.timeTypingSeconds);
    const timeTyping = formatTypingTime(timeTypingSeconds);

    const streakDays = streakData?.length ?? FALLBACK_MONKEYTYPE.streakDays;
    const maxStreakDays = streakData?.maxLength ?? FALLBACK_MONKEYTYPE.maxStreakDays;

    // Parse Personal Bests
    const pbs: MonkeytypePersonalBest[] = [];

    // Words 10
    const w10 = pbWordsData["10"]?.[0];
    if (w10) {
      pbs.push({
        mode: "words-10",
        label: "10 Words",
        wpm: Number(w10.wpm.toFixed(1)),
        acc: Number(w10.acc.toFixed(1)),
        raw: Number(w10.raw.toFixed(1)),
        consistency: w10.consistency ? Number(w10.consistency.toFixed(1)) : undefined,
        language: w10.language,
      });
    }

    // Time 30
    const t30 = pbTimeData["30"]?.[0];
    if (t30) {
      pbs.push({
        mode: "time-30",
        label: "30 Seconds",
        wpm: Number(t30.wpm.toFixed(1)),
        acc: Number(t30.acc.toFixed(1)),
        raw: Number(t30.raw.toFixed(1)),
        consistency: t30.consistency ? Number(t30.consistency.toFixed(1)) : undefined,
        language: t30.language,
      });
    }

    // Words 25
    const w25 = pbWordsData["25"]?.[0];
    if (w25) {
      pbs.push({
        mode: "words-25",
        label: "25 Words",
        wpm: Number(w25.wpm.toFixed(1)),
        acc: Number(w25.acc.toFixed(1)),
        raw: Number(w25.raw.toFixed(1)),
        consistency: w25.consistency ? Number(w25.consistency.toFixed(1)) : undefined,
        language: w25.language,
      });
    }

    // Time 60
    const t60 = pbTimeData["60"]?.[0];
    if (t60) {
      pbs.push({
        mode: "time-60",
        label: "60 Seconds",
        wpm: Number(t60.wpm.toFixed(1)),
        acc: Number(t60.acc.toFixed(1)),
        raw: Number(t60.raw.toFixed(1)),
        consistency: t60.consistency ? Number(t60.consistency.toFixed(1)) : undefined,
        language: t60.language,
      });
    }

    // Time 15
    const t15 = pbTimeData["15"]?.[0];
    if (t15) {
      pbs.push({
        mode: "time-15",
        label: "15 Seconds",
        wpm: Number(t15.wpm.toFixed(1)),
        acc: Number(t15.acc.toFixed(1)),
        raw: Number(t15.raw.toFixed(1)),
        consistency: t15.consistency ? Number(t15.consistency.toFixed(1)) : undefined,
        language: t15.language,
      });
    }

    // If pbs is empty, use fallback
    const finalPbs = pbs.length > 0 ? pbs : FALLBACK_MONKEYTYPE.personalBests;

    // Highest WPM
    const topWpm = Math.max(...finalPbs.map((p) => p.wpm), FALLBACK_MONKEYTYPE.wpmBest);
    // Highest accuracy on top records
    const topAcc = finalPbs.find((p) => p.wpm === topWpm)?.acc ?? 100;

    const result: MonkeytypeTelemetry = {
      username: "anggaphi",
      uid: statsData?._id || FALLBACK_MONKEYTYPE.uid,
      wpmBest: topWpm,
      accuracyBest: `${topAcc}%`,
      testsCompleted,
      testsStarted,
      timeTypingSeconds,
      timeTyping,
      streakDays,
      maxStreakDays,
      xp: 210264,
      personalBests: finalPbs,
      isLive: true,
      lastUpdated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Save to localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: result,
          })
        );
      } catch {
        // Ignore storage errors
      }
    }

    return result;
  } catch (err: any) {
    console.warn("Monkeytype live fetch failed, using fallback/cached data:", err.message);
    return {
      ...FALLBACK_MONKEYTYPE,
      isLive: false,
      error: err.message,
    };
  }
}
