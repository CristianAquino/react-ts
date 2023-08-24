import { toast } from "react-hot-toast";

export const notifyError = (msg: string) => {
  toast.error(msg, {
    id: "error",
    position: "bottom-right",
    style: {
      backgroundColor: "#cf1020",
      color: "#fff",
    },
  });
};
