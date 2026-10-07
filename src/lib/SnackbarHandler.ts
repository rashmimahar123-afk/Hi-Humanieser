import { toast } from "react-toastify";

const ERROR_TOAST_DURATION = 4000;
const SUCCESS_TOAST_DURATION = 3000;

class SnackbarHandler {
  errorToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: ERROR_TOAST_DURATION,
      type: "error",
    });
  };

  successToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: SUCCESS_TOAST_DURATION,
      type: "success",
    });
  };

  normalToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: SUCCESS_TOAST_DURATION,
      type: "default",
    });
  };
}

export default new SnackbarHandler();
