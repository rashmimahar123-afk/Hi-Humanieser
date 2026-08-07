export type GET_PRESSURE_POINTS_RESPONSE = {
  message: string;
  count: number;
  pressure_points: Array<string>;
};
export type FOCUS_AREA_STEP_DATA = {
  step: number;
  title: string;
  body: string;
  examples: Array<any>;
};
export type MY_TEAM_RITUALS_DATA = {
  team_ritual_id: string;
  title: string;
  short_description: string;
  operational_impact: string;
  long_description: string;
  try_saying: Array<any>;
  common_traps: Array<any>;
};
export type FOCUS_AREA_DATA = {
  focus_area_id: string;
  slug: string;
  title: string;
  from_pillar: string;
  from_principles: Array<string>;
  description_long: string;
  description_short: string;
  why_it_matters: string;
  why_it_works: {
    body: string;
    summary: string;
  };
  what_to_expect: {
    intro: string;
    steps: Array<FOCUS_AREA_STEP_DATA>;
    designed_for_real_work: string;
  };
  common_traps: Array<any>;
  team_rituals: Array<MY_TEAM_RITUALS_DATA>;
};
export type HH_FRAMEWORK_MTJ_RESPONSE_TYPES = {
  focus_areas: Array<FOCUS_AREA_DATA>;
};
export type MTJ_TEAM_RITUALS_MY_REFLECTIONS = {
  id: string;
  user_id: string;
  reflection: string;
  created_at: string;
  shared_anonymously: boolean;
  team_ritual_id: string;
  edited: boolean;
  like_count: number;
};
export type MTJ_TEAM_RITUALS_REFLECTIONS_DATA = {
  my_reflections: Array<MTJ_TEAM_RITUALS_MY_REFLECTIONS>;
  my_reflection_count: number;
  completed_by_me: boolean;
  completed_count: number;
  member_count: number;
  completion_percentage: number;
};
export type MTJ_TEAM_RITUAL_DATA = {
  team_ritual_id: string;
  title: string;
  focus_area: string;
  short_description: string;
  activation_message?: string;
  reflections: MTJ_TEAM_RITUALS_REFLECTIONS_DATA;
};
export type GET_MTJ_LIST_RESPONSE = {
  message: string;
  active: boolean;
  team_id: string;
  cycle_id: string;
  cycle_stage: string;
  pressure_point: string;
  focus_areas: Array<any>;

  my_reflection_count: number;
  my_reflections: Array<any>;
  team_rituals: Array<MTJ_TEAM_RITUAL_DATA>;
  ritual_practice: {
    status: string;
    duration_weeks: number;
    started_at: number;
    scheduled_end_at: number;
    extended: boolean;
  };
};
