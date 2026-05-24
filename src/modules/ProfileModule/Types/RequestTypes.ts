export type CREATE_TEAM_REQUEST = {
  team_name: string;
};
export type EDIT_USER_REQUEST = {
  target_email: string;
  first_name?: string;
  last_name?: string;
  team_id?: string;
  user_type?: number;
  deactivated?: boolean;
  profile_picture_base64?: string;
};
export type DELETE_USER_REQUEST = {
  email: string;
};
export type DELETE_TEAM_REQUEST = {
  team_id: string;
};
export type CREATE_USER_TYPE_REQUEST = {
  email_address: string;
  first_name: string;
  last_name: string;
  team_id?: string;
  profile_picture_base64?: string;
};
export type Edit_TEAM_REQUEST = {
  team_id: string;
  new_team_name: string;
};
export type TOGGLE_ROLE_PAYLOAD = {
  team_id?: string;
};