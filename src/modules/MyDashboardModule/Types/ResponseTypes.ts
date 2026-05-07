export type PRACTICE_LIST_ITEM = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};
export type ENRICH_PROGRESS_LIST = {
  "": {
    m1: {
      behaviour_selection: Array<number>;
      pulse_check: number;
    };
    m2: {
      micro_action_1: [
        {
          reflection: string;
          share: boolean;
          title: string;
          description: string;
          id: string;
        },
      ];
    };
    m3: {
      reflection: {
        reflection: string;
        share: boolean;
      };
      pulse_check: number;
      pin_to_dash: boolean;
    };
  };
  created: number;
  uuid: string;
  active: boolean;
  completed: number;
};
export type GET_REFLECTIONS_DATA = {
  id: string;
  reflection: string;
  created_at: string;
  like_count: number;
  shared_anonymously: boolean;
  source: string;
};
export type GET_REFLECTION_WALLS_RESPONSE = {
  message: string;
  team_id: string;
  reflections: Array<GET_REFLECTIONS_DATA>;
};
export type TOGGLE_REFLECTION_RESPONSE_TYPES = {
  action: string;
  like_count: number;
  message: string;
  reflection_id: string;
};
