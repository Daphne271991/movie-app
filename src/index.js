import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client"; // Correct import for createRoot
import App from "./App";
import { store } from "./features/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
