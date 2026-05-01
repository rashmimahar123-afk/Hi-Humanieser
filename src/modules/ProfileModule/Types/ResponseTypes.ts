export type MY_PROFILE_RESPONSE = {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  user_type: number;
  org_id: string;
  team_id: string | null;
  has_profile_picture: boolean;
  profile_picture_path: string;
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

export type ALL_USERS_DATA = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  team_id: string | null;
  user_type: number;
  email_verified: boolean;
  deactivated: boolean;
  created: number;
  has_profile_picture: boolean;
  profile_picture_path: string;
};
export type GET_ALL_USERS_RESPONSE = {
  message: string;
  users: Array<ALL_USERS_DATA>;
};
export type ALL_USERS_COUNTS_DATA = {
  partners: number;
  champions: number;
  members: number;
};
export type ALL_USERS_PARTNERS_DATA = {
  id: string;
  name: string;
  email: string;
  has_profile_picture: boolean;
  profile_picture_path: string;
};
export type ALL_USERS_CHAMPIONS_DATA = {
  id: string;
  name: string;
  email: string;
  has_profile_picture: boolean;
  profile_picture_path: string;
};
export type ALL_USERS_MEMBERS_DATA = {
  id: string;
  name: string;
  email: string;
  has_profile_picture: boolean;
  profile_picture_path: string;
};
export type GET_ALL_USERS_BY_ROLE_RESPONSE = {
  message: string;
  counts: ALL_USERS_COUNTS_DATA;
  partners: Array<ALL_USERS_PARTNERS_DATA>;
  champions: Array<ALL_USERS_CHAMPIONS_DATA>;
  members: Array<ALL_USERS_MEMBERS_DATA>;
};
export type USER_PROFILE_DATA = {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  user_type: number;
  team_id: string;
  deactivated: boolean;
  created: number;
  has_profile_picture: boolean;
  profile_picture_path: string;
};
export type GET_FIND_USERS_RESPONSE = {
  message: string;
  profile: USER_PROFILE_DATA;
};
