import chickenimg from "./chicky/chickychick.jpeg";
import { useState, useEffect, useRef } from "react";

function SimpleEffect() {
  

  const [n, setN] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [chickens, setChickens] = useState([1, 2, 3, 4, 5]);

  
  useEffect(() => {
    console.log("useEffect has run");
  }, []);

  return (
    <div>
      <h1>Simple Effect</h1>
      <div>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>

      <div>
        {chickens.map((chicken, index) => {
          return (
            <img
              src={chickenimg}
              key={index}
              style={{
                width: "50px",
                margin: "10px",
              }}
            />
          );
        })}
      </div>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      <MyForm showForm={showForm} />
    </div>
  );
}

function MyForm(props) {
  const { showForm } = props;

  if (showForm === false) {
    return null;
  }

  return (
    <div>
      <UnMountComponent />
    </div>
  );
}

function UnMountComponent() {
  const k = useRef(1);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("Mouse position");
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Show Form has been Mounted");

    //kill intrval ->
    const interval = setInterval(() => {
      console.log("K is", k.current);
      k.current = k.current + 1;
    }, 1000);

    //Clean UP Function<Clean up any memory main thread>
    return () => {
      console.log("Component Unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Unmount Component</h1>
      <div>
        <p>X Axis {position.x}</p>
        <p>Y Axis {position.y}</p>
      </div>
    </div>
  );
}

export default SimpleEffect;