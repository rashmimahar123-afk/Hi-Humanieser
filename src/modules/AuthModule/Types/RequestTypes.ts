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
