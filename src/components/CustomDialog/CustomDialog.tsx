import { SubjectManager } from "@/models";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { Subscription } from "rxjs";

export type CustomDialogProps = {
  children: React.ReactNode;
};
export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog: React.FC<CustomDialogProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExit = () => {
    dialogCloseSubject$.setSubject = false;
  };
  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => {
      handleOpen();
    });
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => {
      handleClose();
    });
    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => handleExit()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-descriptio"
      fullWidth
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
