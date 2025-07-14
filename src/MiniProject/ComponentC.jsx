import ComponentE from "./ComponentE";
import ComponetD from "./ComponentD";

function ComponentC() {
  return (
    <div className="border-container">
      <ComponetD />
      <ComponentE />
    </div>
  );
}

export default ComponentC;
