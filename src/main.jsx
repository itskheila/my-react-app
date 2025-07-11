import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ArrayData />
  </StrictMode>
);
