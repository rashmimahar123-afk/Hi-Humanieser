import { useCallback, useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetMtjListQuery from "./useGetMtjListQuery";
import useGetMtjPollQuery from "@/src/modules/ChampionHubModule/Hooks/useGetMtjPollQuery";

// The backend has no "seen" flag for team rituals, so we remember (per user,
// per browser) which set of rituals the member last saw on My Team Journey.
const STORAGE_PREFIX = "mtj-seen-rituals:";
// Same idea for the team poll that opens when the champion starts a cycle.
const POLL_STORAGE_PREFIX = "mtj-seen-poll:";

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

// Logout wipes localStorage; keep the "seen" markers so a member who already
// opened the new poll/ritual doesn't get the badge again on their next login.
export const clearLocalStorageKeepingSeenBadges = () => {
  try {
    const kept: [string, string][] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (
        key &&
        (key.startsWith(STORAGE_PREFIX) || key.startsWith(POLL_STORAGE_PREFIX))
      ) {
        kept.push([key, window.localStorage.getItem(key) ?? ""]);
      }
    }
    window.localStorage.clear();
    kept.forEach(([key, value]) => window.localStorage.setItem(key, value));
  } catch {
    // storage blocked — nothing to clear
  }
};

function useNewTeamRitualBadge() {
  const { user } = useAuthValue();
  const { data: mtjListData } = useGetMtjListQuery();
  const { data: pollResponse } = useGetMtjPollQuery();
  // undefined = storage not read yet, so the badge doesn't flash before we know
  const [seenSignature, setSeenSignature] = useState<string | null>();
  const [seenPollSignature, setSeenPollSignature] = useState<
    string | null
  >();

  // Only members get the badge — the champion is the one adding rituals
  const isMember = user?.user_type === 1;
  const storageKey = user?.user_id ? `${STORAGE_PREFIX}${user.user_id}` : "";
  const pollStorageKey = user?.user_id
    ? `${POLL_STORAGE_PREFIX}${user.user_id}`
    : "";

  const rituals = mtjListData?.data?.team_rituals || [];
  const signature =
    rituals.length > 0
      ? `${mtjListData?.data?.cycle_id ?? ""}:${rituals
          .map((ritual) => ritual.team_ritual_id)
          .sort()
          .join(",")}`
      : "";

  // A poll is "new" while it is open in a started cycle and the member
  // hasn't voted on it yet
  const pollData = pollResponse?.data;
  const hasVoted =
    pollData?.options?.some((option) =>
      option.responses?.some((response) => response.user_id === user?.user_id),
    ) ?? false;
  const pollSignature =
    pollData?.cycle_started && pollData?.poll_open && !hasVoted
      ? `${pollData.cycle_id ?? ""}:${pollData.poll_id ?? ""}`
      : "";

  useEffect(() => {
    if (storageKey) setSeenSignature(readSeen(storageKey));
  }, [storageKey]);

  useEffect(() => {
    if (pollStorageKey) setSeenPollSignature(readSeen(pollStorageKey));
  }, [pollStorageKey]);

  const hasNewRitual =
    isMember &&
    !!signature &&
    !!storageKey &&
    seenSignature !== undefined &&
    signature !== seenSignature;

  const hasNewPoll =
    isMember &&
    !!pollSignature &&
    !!pollStorageKey &&
    seenPollSignature !== undefined &&
    pollSignature !== seenPollSignature;

  const markSeen = useCallback(() => {
    if (!isMember) return;
    if (signature && storageKey) {
      writeSeen(storageKey, signature);
      setSeenSignature(signature);
    }
    if (pollSignature && pollStorageKey) {
      writeSeen(pollStorageKey, pollSignature);
      setSeenPollSignature(pollSignature);
    }
  }, [isMember, signature, storageKey, pollSignature, pollStorageKey]);

  return { hasNewRitual, hasNewPoll, markSeen };
}

export default useNewTeamRitualBadge;
