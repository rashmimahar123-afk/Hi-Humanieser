export type MY_PROFILE_RESPONSE = {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  user_type: number;
  org_id: string;
  team_id: string | null;
};
export type TEAM_DATA = {
  id: string;
  team_name: string;
  champion_id: string;
  champion_email: string;
  member_count: number;
};
export type GET_TEAMS_RESPONSE = {
  message: string;
  teams: Array<TEAM_DATA>;
};
export type PARTNERS_DATA = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created: number;
  deactivated: boolean;
};
export type ORGANISATION_DATA = {
  org_id: string;
  company_name: string;
  created_by_user: {
    email: string;
    first_name: string;
    last_name: string;
  };
  date_created: number;
  team_count: number;
  combined_member_count: number | null;
  partners: Array<PARTNERS_DATA>;
  partners_overseers: Array<PARTNERS_DATA>;
  champions: Array<any>;
};
export type GET_ORGANISATION_DETAILS_RESPONSE = {
  message: string;
  organization: ORGANISATION_DATA;
};
