import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // اضافه شد
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // اضافه شد

import Layout from "./components/layout/Layout.jsx";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";
import { defaultOptions } from "./configs/reactQuery.js";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPHCMS,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient({
  defaultOptions,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} /> {/* اضافه شد */}
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </QueryClientProvider>
  </StrictMode>,
);