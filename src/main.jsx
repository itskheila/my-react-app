import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Default
// Import js or jsx
import CatsAndDogs from "./MyFile";

// VUE Bandler : VITE
// FAST

import "./css.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatsAndDogs></CatsAndDogs>
    <CatsAndDogs />
  </StrictMode>
);
