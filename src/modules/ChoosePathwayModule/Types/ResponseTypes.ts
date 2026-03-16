export type Scale = {
  min: number;
  max: number;
  labels: string[];
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
