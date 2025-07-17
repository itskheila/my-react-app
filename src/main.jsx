import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

import "./css.css";

import "./mycss/main.css";

import Buttons from "./Events/Btns";
import Form from "./Events/Form";

import SimpleState from "./Hooks/State/SimlpeState";
import SimpleState2 from "./Hooks/State/SimpleState2";

import FormState from "./Hooks/State/FormState";

import SimpleEffect from "./Hooks/Effect/SimpleEffect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleEffect/>
   
  </StrictMode>
);
