import { Alert, Snackbar } from "@mui/material";
import type { ReactNode } from "react";

interface FeedbackAlertProps {
  open?: boolean;
  onClose?: () => void;
  severity?: "success" | "error";
  children: ReactNode;
}

function FeedbackAlert({
  open = false,
  onClose = () => {},
  severity = "success",
  children,
}: FeedbackAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={severity} sx={{ width: "100%" }} onClose={onClose}>
        {children}
      </Alert>
    </Snackbar>
  );
}

export default FeedbackAlert;
