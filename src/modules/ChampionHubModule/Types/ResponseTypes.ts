export type MTJ_POLL_OPTIONS_RESPONSE_DATA = {
  user_id: string;
  submitted_at: string;
};
export type MTJ_POLL_OPTIONS_DATA = {
  option: string;
  responses: Array<MTJ_POLL_OPTIONS_RESPONSE_DATA>;
  vote_count: number;
  vote_percentage: number;
};
export type GET_MTJ_POLL_RESPONSE = {
  ready: boolean;
  cycle_started: boolean;
  poll_open: boolean;
  message: string;
  team_id: string;
  cycle_id: string;
  poll_id: string;
  pressure_point: string;
  total_votes: number;
  team_member_count: number;
  team_members_responded: number;
  team_response_percentage: number;
  team_members_left_to_respond: number;
  options: Array<MTJ_POLL_OPTIONS_DATA>;
};
export type FOCUS_AREA_SCORES_DATA = {
  option: string;
  member_vote_count: number;
  member_score: number;
  champion_bonus: number;
  total_score: number;
};
export type RECOMMEND_FOCUS_AREA_DATA = {
  rank: number;
  option: string;
  total_score: number;
  member_vote_count: number;
  member_score: number;
  champion_bonus: number;
};
export type TEAM_RITUALS_DATA = {
  team_ritual_id: string;
  title: string;
  short_description: string;
};
export type RECOMMEND_TEAM_RITUALS_DATA = {
  focus_area: string;
  team_rituals: Array<TEAM_RITUALS_DATA>;
};
export type RECOMMEND_FOCUS_AREA_RESPONSE = {
  message: string;
  team_id: string;
  team_name: string;
  cycle_id: string;
  poll_id: string;
  pressure_point: string;
  weights: {
    member_vote_weight: number;
    champion_primary_focus_weight: number;
    champion_secondary_focus_weight: number;
  };
  team_voting_power: number;
  pressure_point_mapping: {
    primary_focus_area: string;
    secondary_focus_area: string;
    primary_option: string;
    secondary_option: string;
    primary_bonus_points: number;
    secondary_bonus_points: number;
  };
  scores: Array<FOCUS_AREA_SCORES_DATA>;
  recommended_focus_areas: Array<RECOMMEND_FOCUS_AREA_DATA>;
  recommended_team_rituals: Array<RECOMMEND_TEAM_RITUALS_DATA>;
};

export type EXTEND_PRACTICE_RESPONSE_TYPES = {
  message: string;
  team_id: string;
  cycle_id: string;
  new_scheduled_end_at: number;
  duration_weeks: number;
  extended_at: string;
};
export type FINISH_CYCLE_RESPONSE_TYPES = {
  message: string;
  team_id: string;
  cycle_id: string;
  completed_at: string;
  close_reason: string;
};
