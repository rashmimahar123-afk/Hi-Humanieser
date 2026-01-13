export type AUTH_STATE = {
  user?: { id: string; name: string; email: string } | null;
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
