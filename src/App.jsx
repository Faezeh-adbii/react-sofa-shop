import React from "react";

import Router from "./router/Router";
import ToastConfig from "./configs/ToastConfig";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  useScrollToTop()
  return (
    <>
      <Router />
      <ToastConfig />
    </>
  );
}

export default App;
