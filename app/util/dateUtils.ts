// 2024-08-20
export function getDayOfWeek(date: string): string {
  return new Date(date).toLocaleDateString("en-US", { weekday: "short" });
}

export function dateFormat(
  date: string,
  options: Intl.DateTimeFormatOptions = {}
): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...options,
  });
}
