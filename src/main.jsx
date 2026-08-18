import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import Layout from "./components/layout/Layout.jsx";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPHCMS,
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
