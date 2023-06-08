import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import {Provider} from "./context/email";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
