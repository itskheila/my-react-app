import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CatsAndDogs from "./Exports/MyFile";

// {}->NAME IS REQUIRED
import { Component3, Component2 } from "./Exports/NamedExports";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatsAndDogs></CatsAndDogs>
    <CatsAndDogs />
    <Component2 />
    <Component3 />
  </StrictMode>
);
