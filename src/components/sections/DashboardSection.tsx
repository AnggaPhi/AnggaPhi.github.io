import React from "react";
import { TELEMETRY_DATA } from "../../data/portfolioData";
import { Clock, Keyboard, Flame, GitFork, Star, ExternalLink, RefreshCw, Zap } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { useMonkeytype } from "../../hooks/useMonkeytype";
import { useGithub } from "../../hooks/useGithub";

export const DashboardSection: React.FC = () => {
  const { wakatime } = TELEMETRY_DATA;
  const { data: ghData, isRefreshing: isGhRefreshing, refetch: refetchGh } = useGithub();
  const { data: mtData, isRefreshing: isMtRefreshing, refetch: refetchMt } = useMonkeytype();

  const getHeatmapColor = (level: 0 | 1 | 2 | 3 | 4) => {
    switch (level) {
      case 0:
        return "bg-[var(--border)] opacity-40";
      case 1:
        return "bg-emerald-900/60 dark:bg-emerald-950";
      case 2:
        return "bg-emerald-700/80 dark:bg-emerald-800";
      case 3:
        return "bg-emerald-500";
      case 4:
        return "bg-emerald-400 font-bold";
    }
  };

  return (
    <section id="dashboard" className="py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border)] text-xs font-semibold text-[var(--badge-text)] font-mono">
            <span>05. TELEMETRY & PRODUCTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Developer & Maker Metrics Dashboard
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Transparent, real-time telemetry visualizing engineering contributions, 3D modeling & code editor time, and typing speed.
          </p>
        </div>

        {/* 1. GitHub Activity Widget */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <GithubIcon className="w-5 h-5 text-[var(--text-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  GitHub Contributions
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                  <a
                    href={`https://github.com/${ghData.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>@{ghData.username}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <span>52-Week Activity Heatmap</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{ghData.isLive ? "LIVE GITHUB" : "CACHED"}</span>
              </div>

              <button
                onClick={() => refetchGh()}
                disabled={isGhRefreshing}
                title="Sync live activity from GitHub"
                className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all disabled:opacity-50"
                aria-label="Refresh GitHub data"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGhRefreshing ? "animate-spin text-[var(--primary)]" : ""}`} />
              </button>

              <div className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                <span className="text-[var(--text-muted)]">Contributions: </span>
                <span className="font-bold text-[var(--primary)]">{ghData.totalContributions}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-bold text-[var(--text-primary)]">{ghData.activeStreakDays}d streak</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] hidden sm:block">
                <span className="text-[var(--text-muted)]">Repos: </span>
                <span className="font-bold text-[var(--text-primary)]">{ghData.repositoriesCount}</span>
              </div>
            </div>
          </div>

          {/* 52-Week Contribution Calendar Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-block min-w-[720px] w-full">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                {ghData.weeks.flatMap((w) =>
                  w.days.map((d, dIdx) => (
                    <div
                      key={`${w.weekNumber}-${dIdx}`}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-colors hover:scale-125 ${getHeatmapColor(
                        d.level
                      )}`}
                      title={`${d.date ? `${d.date}: ` : ""}${d.count} contribution${d.count === 1 ? "" : "s"}`}
                    />
                  ))
                )}
              </div>

              <div className="flex items-center justify-between pt-3 text-[10px] font-mono text-[var(--text-muted)]">
                <span>52 Weeks Ago</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[var(--border)] opacity-40"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-900/60"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700/80"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </div>
          </div>

          {/* Pinned Repositories Grid */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Featured Public Repositories
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ghData.pinnedRepos.slice(0, 6).map((repo, rIdx) => (
                <a
                  key={rIdx}
                  href={repo.url || `https://github.com/${ghData.username}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/50 hover:border-[var(--border-highlight)] transition-all hover:-translate-y-1 space-y-2 block group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--primary)]" />
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                    {repo.desc}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] pt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3 h-3" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer status */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Real-time GitHub Telemetry • github.com/{ghData.username}</span>
            </div>
            {ghData.lastUpdated && <span>Synced: {ghData.lastUpdated}</span>}
          </div>
        </div>

        {/* 2. WakaTime & Monkeytype Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* WakaTime Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <Clock className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    WakaTime Tooling Telemetry
                  </h3>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    Past 7 Days Time Allocation
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-base sm:text-lg font-mono font-bold text-[var(--primary)]">
                  {wakatime.past7DaysTotal}
                </div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">
                  ~{wakatime.dailyAverage} / day
                </div>
              </div>
            </div>

            {/* Language breakdown bars */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">
                Tool & Language Breakdown
              </div>
              <div className="space-y-2.5">
                {wakatime.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[var(--text-primary)] font-semibold">{lang.name}</span>
                      <span className="text-[var(--text-muted)]">{lang.percent}% ({lang.hours})</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--primary)]"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editor breakdown */}
            <div className="pt-2 border-t border-[var(--border)] flex flex-wrap gap-4 text-xs font-mono text-[var(--text-secondary)]">
              {wakatime.editors.map((ed, eIdx) => (
                <div key={eIdx} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)]"></span>
                  <span>{ed.name}: {ed.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monkeytype Card with Live API Telemetry */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-sm space-y-6 flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <Keyboard className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      Monkeytype Performance
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                    <a
                      href={`https://monkeytype.com/profile/${mtData.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>@{mtData.username}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>•</span>
                    <span>Live Typing Telemetry</span>
                  </div>
                </div>
              </div>

              {/* Status & Action Controls */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{mtData.isLive ? "LIVE API" : "CACHED"}</span>
                </div>

                <button
                  onClick={() => refetchMt()}
                  disabled={isMtRefreshing}
                  title="Sync live telemetry from Monkeytype API"
                  className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-highlight)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all disabled:opacity-50"
                  aria-label="Refresh Monkeytype data"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isMtRefreshing ? "animate-spin text-[var(--primary)]" : ""}`} />
                </button>

                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-xs font-bold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{mtData.streakDays}d Streak</span>
                </span>
              </div>
            </div>

            {/* Key stats callouts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[var(--primary)]">
                  {mtData.wpmBest}
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Peak WPM
                </div>
                <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                  10 Words (100% Acc)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-teal-500">
                  {mtData.accuracyBest}
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Accuracy
                </div>
                <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                  Clean Keypresses
                </div>
              </div>
            </div>

            {/* Personal Bests Breakdown Pills */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] font-bold uppercase tracking-wider">
                <span>Personal Bests</span>
                <span>Speed • Acc</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {mtData.personalBests.slice(0, 4).map((pb, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/40 text-center font-mono space-y-0.5"
                  >
                    <div className="text-[11px] text-[var(--text-muted)] font-semibold">
                      {pb.label}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">
                      {pb.wpm} <span className="text-[10px] text-[var(--text-muted)] font-normal">WPM</span>
                    </div>
                    <div className="text-[10px] text-teal-500 font-semibold">
                      {pb.acc}% acc
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
                <div className="text-[11px] text-[var(--text-muted)]">Completed Tests</div>
                <div className="font-bold text-[var(--text-primary)] pt-0.5">{mtData.testsCompleted.toLocaleString()}</div>
              </div>
              <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
                <div className="text-[11px] text-[var(--text-muted)]">Time Typing</div>
                <div className="font-bold text-[var(--text-primary)] pt-0.5">{mtData.timeTyping}</div>
              </div>
              <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] col-span-2 sm:col-span-1">
                <div className="text-[11px] text-[var(--text-muted)]">Experience XP</div>
                <div className="font-bold text-[var(--primary)] pt-0.5">{mtData.xp.toLocaleString()} XP</div>
              </div>
            </div>

            {/* Footer status */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Live Monkeytype API Connection</span>
              </div>
              {mtData.lastUpdated && (
                <span>Synced: {mtData.lastUpdated}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
