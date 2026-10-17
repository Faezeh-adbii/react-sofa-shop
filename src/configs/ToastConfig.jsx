import React from "react";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  duration: 4000,
  style: {
    fontFamily: "inherit",
    direction: "rtl",
    borderRadius: "16px",
    padding: "14px 18px",
    fontSize: "14px",
    fontWeight: "600",
    maxWidth: "420px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
  },
  success: {
    duration: 4000,
    style: {
      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      color: "#ffffff",
      border: "1px solid rgba(16, 185, 129, 0.3)",
    },
    iconTheme: {
      primary: "#ffffff",
      secondary: "#047857",
    },
  },
  error: {
    duration: 5000,
    style: {
      background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      color: "#ffffff",
      border: "1px solid rgba(239, 68, 68, 0.3)",
    },
    iconTheme: {
      primary: "#ffffff",
      secondary: "#b91c1c",
    },
  },
  loading: {
    style: {
      background: "linear-gradient(135deg, #831843 0%, #500724 100%)",
      color: "#ffffff",
      border: "1px solid rgba(236, 72, 153, 0.3)",
    },
    iconTheme: {
      primary: "#ffffff",
      secondary: "#831843",
    },
  },
  blank: {
    style: {
      background: "#1f2937",
      color: "#ffffff",
    },
  },
};

function ToastConfig() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      toastOptions={toastOptions}
    />
  );
}

export default ToastConfig;