import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AllData from "./DisplayData/AllData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllData />
  </StrictMode>
);
