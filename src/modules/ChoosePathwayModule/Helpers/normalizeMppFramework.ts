import {
  CHOOSE_MYSELF_PILLAR_TYPE,
  MPP_RAW_PILLAR_WRAPPER,
  MPP_RAW_PRINCIPLE_TYPE,
  PILLAR_PRINCIPLE_TYPE,
} from "../Types/ResponseTypes";

const numberFromKey = (key: string): number => {
  const match = key.match(/(\d+)$/);
  return match ? parseInt(match[1], 10) : 0;
};

const sortedEntriesByPrefix = <T>(
  source: Record<string, T> | undefined,
  prefix: string,
): Array<[string, T]> =>
  Object.entries(source ?? {})
    .filter(([key]) => key.startsWith(prefix))
    .sort(([a], [b]) => numberFromKey(a) - numberFromKey(b));

const normalizeCoreBehaviours = (source: Record<string, string> | undefined) => ({
  intro: source?.definition ?? "",
  items: sortedEntriesByPrefix(source, "behaviour_").map(([key, text]) => ({
    core_behaviour_number: numberFromKey(key),
    text,
  })),
});

const normalizeAmplifierBehaviours = (
  source: Record<string, string> | undefined,
) => ({
  intro: source?.definition ?? "",
  items: sortedEntriesByPrefix(source, "behaviour_").map(([key, text]) => ({
    amplifier_behaviour_number: numberFromKey(key),
    text,
  })),
});

const normalizeCommonTraps = (
  source: Record<string, string> | undefined,
) => ({
  intro: source?.definition ?? "",
  items: sortedEntriesByPrefix(source, "trap_").map(([key, text]) => ({
    common_trap_number: numberFromKey(key),
    text,
  })),
});

const normalizeConversationStarters = (
  source: Record<string, string> | undefined,
) => ({
  intro: source?.definition ?? "",
  items: sortedEntriesByPrefix(source, "starter_").map(([, text]) => ({
    text,
  })),
});

const normalizeMicroActions = (
  source: MPP_RAW_PRINCIPLE_TYPE["micro_actions"] | undefined,
) =>
  sortedEntriesByPrefix(source, "action_").map(([key, action]) => ({
    micro_action_number: numberFromKey(key),
    micro_action_id: key,
    title: action.title,
    description: action.description,
  }));

const normalizePrinciple = (
  principleKey: string,
  raw: MPP_RAW_PRINCIPLE_TYPE,
  pillarId: string,
  pillarName: string,
): PILLAR_PRINCIPLE_TYPE => {
  const principleNumber = numberFromKey(principleKey);

  return {
    principle_name: raw.principle_name,
    principle_description: raw.principle_description?.short_description ?? "",
    definition: raw.principle_description?.definition ?? "",
    pathway_number: principleNumber,
    pathway_title: raw.principle_name,
    pillar_id: pillarId,
    pillar_name: pillarName,
    principle_id: principleKey,
    principle_number: principleNumber,
    why_this_works: raw.why_this_works,
    core_behaviours: normalizeCoreBehaviours(raw.core_behaviours),
    amplifier_behaviours: normalizeAmplifierBehaviours(
      raw.amplifier_behaviours,
    ),
    pulse_check: raw.pulse_check,
    common_traps: normalizeCommonTraps(raw.common_traps),
    micro_actions: normalizeMicroActions(raw.micro_actions),
    reflection_prompt: raw.reflection_prompt,
    conversation_starters: normalizeConversationStarters(
      raw.conversation_starters,
    ),
    pulse_check_question: raw.pulse_check?.question ?? "",
  };
};

const normalizePillar = (
  pillarKey: string,
  raw: Record<string, unknown>,
): CHOOSE_MYSELF_PILLAR_TYPE => {
  const pillarNumber = numberFromKey(pillarKey);
  const pillarName = (raw.pillar_name as string) ?? "";

  const principles = sortedEntriesByPrefix(
    raw as Record<string, MPP_RAW_PRINCIPLE_TYPE>,
    "principle_",
  ).map(([principleKey, principleRaw]) =>
    normalizePrinciple(principleKey, principleRaw, pillarKey, pillarName),
  );

  return {
    pillar_id: pillarKey,
    pillar_number: pillarNumber,
    pillar_name: pillarName,
    principles,
  };
};

export const normalizeMppFramework = (
  raw: MPP_RAW_PILLAR_WRAPPER[] | undefined,
): CHOOSE_MYSELF_PILLAR_TYPE[] =>
  (raw ?? []).flatMap((wrapper) =>
    Object.entries(wrapper)
      .filter(([key]) => key.startsWith("pillar_"))
      .map(([pillarKey, pillarRaw]) =>
        normalizePillar(pillarKey, pillarRaw as Record<string, unknown>),
      ),
  );
