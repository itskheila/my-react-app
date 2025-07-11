import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimitiveData />
  </StrictMode>
);
