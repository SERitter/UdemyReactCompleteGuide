import React from "react";

// don't change the Component name "App"
export default function App() {
  const [isValid, setIsValid] = React.useState(true);

  const toggleHandler = () => {
    if (isValid) setIsValid(false);
    else setIsValid(true);
  };

  return (
    <div>
      <p style={{ color: isValid ? "white" : "red" }}>Style me!</p>
      <button onClick={toggleHandler}>Toggle style</button>
    </div>
  );
}
