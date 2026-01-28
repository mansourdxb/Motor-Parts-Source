/// <reference types="vite/client" />

import { createRoot } from "react-dom/client";
import { Router as WouterRouter } from "wouter";
import App from "./App";
import "./index.css";

// Vite will set BASE_URL to "/Motor-Parts-Source/" on GitHub Pages.
// Wouter wants no trailing slash, so we remove it.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <WouterRouter base={base}>
    <App />
  </WouterRouter>
);
