export type INDIVIDUAL_PERSONAL_PATHWAYS_DATA = {
  pathway: number;
  active_count: number;
};
export type TEAM_KPIS_POLL_RESULT_DATA = {
  option: string;
  vote_count: number;
  vote_percentage: number;
};
export type TEAM_KPIS_TEAM_RITUAL_DATA = {
  team_ritual_id: string;
  title: string;
  focus_area: string;
  short_description: string;
};
export type TEAM_KPIS_RESPONSE_TYPES = {
  message: string;
  team_id: string;
  team_name: string;
  quiz: {
    quadrimester: string;
    team_snapshot: {
      pillar_01_avg: number;
      pillar_02_avg: number;
      pillar_03_avg: number;
    };
    participation: {
      responded: number;
      total: number;
      percentage: number;
    };
  };
  individual_focus_areas: Array<INDIVIDUAL_PERSONAL_PATHWAYS_DATA>;
  cycle: {
    id: string;
    status: string;
    stage: string;
    champion_pp: string;
    recommended_focus_areas: Array<string>;
    active_focus_areas: Array<string>;
    chosen_team_rituals: Array<TEAM_KPIS_TEAM_RITUAL_DATA>;
    started_at: number;
    end_at: number;
    time_remaining_seconds: number;
  };
  poll: {
    id: string;
    status: string;
    results: Array<TEAM_KPIS_POLL_RESULT_DATA>;
    participation: {
      responded: number;
      total: number;
      percentage: number;
    };
  };
  engagement: {
    awareness: {
      viewer_count: number;
      total: number;
      percentage: number;
    };
    team_ritual_participation: {
      contributor_count: number;
      total: number;
      percentage: number;
    };
    momentum: {
      multi_contributor_count: number;
      total: number;
      percentage: number;
    };
    sharing: {
      shared_count: number;
    };
    shared_reflections: Array<any>;
  };
};
