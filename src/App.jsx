// import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "The Pepperoni Pizza",
//       description: "dope",
//     }),
//     React.createElement(Pizza, {
//       name: "Americano",
//       description: "Mozzarella Cheese, Pepperoni",
//     }),
//     React.createElement(Pizza),
//     React.createElement(Pizza),
//     React.createElement(Pizza),
//     React.createElement(Pizza),
//   ]);
// };

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
