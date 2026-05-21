import { toast } from "react-hot-toast";

export const appAlert = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  info: (message) => toast(message),
};
