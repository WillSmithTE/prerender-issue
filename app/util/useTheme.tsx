import { useHints } from "~/util/client-hints";
import { useRequestInfo } from "~/util/request-info";

export function useTheme() {
  const hints = useHints();
  const requestInfo = useRequestInfo();
  return hints.theme;
}
