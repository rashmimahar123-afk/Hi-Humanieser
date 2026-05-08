export type PERSONAL_PATHWAY_RESPONSE_TYPES = {
  email: string;
  pathways: Array<any>;
};
export type MICRO_ACTION_DATA = {
  reflection: string;
  share: boolean;
};

export type MILESTONE_TWO_DATA = {
  micro_action_1?: MICRO_ACTION_DATA[];
  micro_action_2?: MICRO_ACTION_DATA[];
};
export type MILESTONE_ONE_DATA = {
  behaviour_selection: Array<number>;
  pulse_check: number;
};
export type MILESTONE_THREE_DATA = {
  reflection: {
    reflection: string;
    share: boolean;
  };
  pulse_check: number;
  pin_to_dash: boolean;
};
