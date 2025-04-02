export function cache({ cache, swr }: { cache?: number; swr?: number }) {
  return `max-age=${cache ?? 0}, stale-while-revalidate=${swr ?? 0}`;
}
