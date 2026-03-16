export type USER_INFO_TYPE = {
  company_name: string;
  exp: number;
  iat: number;
  jti: string;
  org_id: string;
  sub: string;
  team_name: string;
  type: string;
  user_type: number;
};
export type AUTH_STATE = {
  user: USER_INFO_TYPE | undefined;
  loggedIn: boolean;
  token: string;
  accountType: string;
  latitude: number | undefined;
  longitude: number | undefined;
  location: string | undefined;
  language: string | "en" | "ar";
  isCompleteProfile: boolean;
};
export type REMEMBER_ME = {
  email: string;
  password: string;
  checkRemember: boolean;
};
