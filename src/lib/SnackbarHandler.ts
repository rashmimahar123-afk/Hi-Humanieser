import { toast } from "react-toastify";

class SnackbarHandler {
  errorToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: 500,
      type: "error",
    });
  };

  successToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: 500,
      type: "success",
    });
  };

  normalToast = (text: string) => {
    toast(text, {
      position: "bottom-center",
      autoClose: 500,
      type: "default",
    });
  };
}

export default new SnackbarHandler();
