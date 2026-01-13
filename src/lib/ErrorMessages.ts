import {
  EMAIL_ERROR_TYPES,
  PASSWORD_ERROR_TYPES,
} from "../components/Types/ErrorTypes";

export const passwordMessage: PASSWORD_ERROR_TYPES = {
  password_required: "Password is required",
  password_message:
    "Password must be 8-20 characters long, include uppercase and lowercase letters, a number, and a special character.",
};

export const emailMessage: EMAIL_ERROR_TYPES = {
  requiredMessage: "Email is required",
  invalidMessage: "Invalid Email",
};
