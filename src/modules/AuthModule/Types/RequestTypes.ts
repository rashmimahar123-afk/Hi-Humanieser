export type REGISTER_ORGANISATION_REQUEST_TYPE = {
  company_name: string;
  email_address: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type LOGIN_REQUEST_TYPE = {
  email_address: string;
  password: string;
};

export type CHANGE_PASSWORD_REQUEST_TYPE = {
  current_password: string;
  new_password: string;
};
export type RESET_PASSWORD_REQUEST_TYPE = {
  email: string;
  token: string;
  new_password: string;
};
export type VERIFY_EMAIL_REQUEST_TYPE = {
  email: string;
  token: string;
};
