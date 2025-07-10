import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AllData from "./DisplayData/AllData";
import ObjData from "./DisplayData/ObjData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ObjData />
  </StrictMode>
);
