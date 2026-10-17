import React from "react";

import Router from "./router/Router";
import ToastConfig from "./configs/ToastConfig";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Router />
        <ToastConfig />
      </UserProvider>
    </>
  );
}

export default App;
