import { toast } from "react-hot-toast";

export const notifySuccess = (msg: string) =>
  toast.success(msg, {
    id: "success",
    position: "bottom-right",
    style: {
      background: "green",
      color: "#fff",
    },
  });

export const notifyError = (msg: string) =>
  toast.error(msg, {
    id: "error",
    position: "bottom-right",
    style: {
      background: "red",
      color: "#fff",
    },
  });
