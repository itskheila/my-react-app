import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CatsAndDogs from "./Exports/MyFile";

// {}->NAME IS REQUIRED
// Destructure
import { Component3, Component2 } from "./Exports/NamedExports";

import MainComponent, { C1, C2 } from "./Exports/CombinedExport";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainComponent />
    <C1 />
    <C2 />
  </StrictMode>
);
