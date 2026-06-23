export type INDIVIDUAL_PERSONAL_PATHWAYS_DATA = {
  pathway: number;
  active_count: number;
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
  cycle: null;
  poll: null;
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
