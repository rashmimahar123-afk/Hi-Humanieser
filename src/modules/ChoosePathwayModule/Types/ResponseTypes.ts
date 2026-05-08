export type Scale = {
  min: number;
  max: number;
  labels: Array<any>;
};

export type OptionText = {
  a: string;
  b: string;
  c: string;
};

export type OptionScores = {
  a: number;
  b: number;
  c: number;
};

export type StrengthQuestion = {
  type: string;
  prompt: string;
  scale: Scale;
};

export type SituationalQuestion = {
  type: string;
  prompt: string;
  option_text: OptionText;
  option_scores: OptionScores;
};

export type PILLAR_DATA_QUESTIONS = StrengthQuestion | SituationalQuestion;

export type PRINCIPLE_TYPE = {
  display_name: string;
  description: string;
  why_this_strength: string;
  questions: PILLAR_DATA_QUESTIONS[];
};

export type PILLAR_DATA = {
  name: string;
  description: string;
  principles: {
    Principle_01: PRINCIPLE_TYPE;
    Principle_02: PRINCIPLE_TYPE;
    Principle_03: PRINCIPLE_TYPE;
    Principle_04: PRINCIPLE_TYPE;
  };
};

export type PROFILE_BAND = {
  id: string;
  label: string;
  summary_line: string;
  description: string;
};

export type QUIZ_QUESTIONS_RESPONSE = {
  pillars: {
    Pillar_01: PILLAR_DATA;
    Pillar_02: PILLAR_DATA;
    Pillar_03: PILLAR_DATA;
  };
  profile_bands: {
    "2.0": PROFILE_BAND;
    "3.0": PROFILE_BAND;
    "4.0": PROFILE_BAND;
    "5.0": PROFILE_BAND;
  };
};

export type SUBMIT_QUIZ_RESPONSE_TYPES = {
  message: string;
  submission_id: string;
  timestamp: number;
};

export type MY_QUIZ_RESULT_DATA = {
  pillar_01: {
    principle_01: {
      strength: number;
      situation: number;
    };
    principle_02: {
      strength: number;
      situation: number;
    };
    principle_03: {
      strength: number;
      situation: number;
    };
    principle_04: {
      strength: number;
      situation: number;
    };
  };
  pillar_02: {
    principle_05: {
      strength: number;
      situation: number;
    };
    principle_06: {
      strength: number;
      situation: number;
    };
    principle_07: {
      strength: number;
      situation: number;
    };
    principle_08: {
      strength: number;
      situation: number;
    };
  };
  pillar_03: {
    principle_09: {
      strength: number;
      situation: number;
    };
    principle_10: {
      strength: number;
      situation: number;
    };
    principle_11: {
      strength: number;
      situation: number;
    };
    principle_12: {
      strength: number;
      situation: number;
    };
  };
};
export type MY_QUIZ_RESULT_RESPONSE_TYPES = {
  message: string;
  quiz: [
    {
      email: string;
      results: MY_QUIZ_RESULT_DATA;
      timestamp: number;
      created_at: string;
    },
  ];
};

export type RESULT_MESSAGE_RESPONSE_TYPES = [
  {
    id: string;
    message: string;
  },
];

export type PULSE_CHECK_SCALE_TYPE = {
  value: number;
  label: string;
  face: string;
};

export type PULSE_CHECK_COMP_FEEDBACK_TYPE = {
  better: Array<any>;
  same: Array<any>;
  worse: Array<any>;
};
export type WHY_THIS_BEHAVIOUR_TYPE = {
  definition: string;
  domain_01: string;
  domain_02: string;
  domain_03: string;
  domain_04: string;
  summary: string;
};
export type CORE_ITEM_TYPE = {
  core_behaviour_number: number;
  text: string;
};
export type CORE_BEHAVIOUR_TYPE = {
  intro: string;
  items: Array<CORE_ITEM_TYPE>;
};
export type AMPLIFIER_ITEMS_TYPE = {
  amplifier_behaviour_number: number;
  text: string;
};
export type AMPLIFIER_BEHAVIOUR_TYPE = {
  intro: string;
  items: Array<AMPLIFIER_ITEMS_TYPE>;
};
export type COMMON_ITEM_TYPE = {
  common_trap_number: number;
  text: string;
};
export type COMMON_TRAPS_TYPE = {
  intro: string;
  items: Array<COMMON_ITEM_TYPE>;
};
export type MICRO_ACTIONS_TYPE = {
  micro_action_number: number;
  micro_action_id: string;
  title: string;
  description: string;
};
export type CONVERSATION_ITEM_TYPE = {
  text: string;
};
export type CONVERSATION_STARTER_TYPE = {
  intro: string;
  items: Array<CONVERSATION_ITEM_TYPE>;
};
export type PILLAR_PRINCIPLE_TYPE = {
  principle_name: string;
  principle_description: string;
  definition: string;
  pathway_number: number;
  pathway_title: string;
  pillar_id: string;
  pillar_name: string;
  principle_id: string;

  principle_number: number;
  why_this_works: WHY_THIS_BEHAVIOUR_TYPE;
  core_behaviours: CORE_BEHAVIOUR_TYPE;
  amplifier_behaviours: AMPLIFIER_BEHAVIOUR_TYPE;
  pulse_check: {
    question: string;
  };
  common_traps: COMMON_TRAPS_TYPE;
  micro_actions: Array<MICRO_ACTIONS_TYPE>;
  reflection_prompt: {
    prompt: string;
  };
  conversation_starters: CONVERSATION_STARTER_TYPE;
  pulse_check_question: string;
};
export type CHOOSE_MYSELF_PILLAR_TYPE = {
  pillar_id: string;
  pillar_number: number;
  pillar_name: string;
  principles: Array<PILLAR_PRINCIPLE_TYPE>;
};
export type CHOOSE_MYSELF_RESPONSE_TYPES = [
  {
    pulse_check_config: {
      scale: Array<PULSE_CHECK_SCALE_TYPE>;
      comparison_feedback: PULSE_CHECK_COMP_FEEDBACK_TYPE;
    };
  },

  {
    framework_name: string;
    pillars: CHOOSE_MYSELF_PILLAR_TYPE[];
  },
];

export type GET_LIST_MPP_RESPONSE_TYPES = {
  email: string;
  pathways: Array<any>;
};
