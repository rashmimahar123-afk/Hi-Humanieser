import { useCallback, useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetMtjListQuery from "./useGetMtjListQuery";

// The backend has no "seen" flag for team rituals, so we remember (per user,
// per browser) which set of rituals the member last saw on My Team Journey.
const STORAGE_PREFIX = "mtj-seen-rituals:";

const readSeen = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeSeen = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // storage blocked (private mode etc.) — badge just won't persist
  }
};

function useNewTeamRitualBadge() {
  const { user } = useAuthValue();
  const { data: mtjListData } = useGetMtjListQuery();
  const [seenSignature, setSeenSignature] = useState<string | null>(null);

  // Only members get the badge — the champion is the one adding rituals
  const isMember = user?.user_type === 1;
  const storageKey = user?.user_id ? `${STORAGE_PREFIX}${user.user_id}` : "";

  const rituals = mtjListData?.data?.team_rituals || [];
  const signature =
    rituals.length > 0
      ? `${mtjListData?.data?.cycle_id ?? ""}:${rituals
          .map((ritual) => ritual.team_ritual_id)
          .sort()
          .join(",")}`
      : "";

  useEffect(() => {
    if (storageKey) setSeenSignature(readSeen(storageKey));
  }, [storageKey]);

  const hasNewRitual =
    isMember && !!signature && !!storageKey && signature !== seenSignature;

  const markSeen = useCallback(() => {
    if (!isMember || !signature || !storageKey) return;
    writeSeen(storageKey, signature);
    setSeenSignature(signature);
  }, [isMember, signature, storageKey]);

  return { hasNewRitual, markSeen };
}

export default useNewTeamRitualBadge;
