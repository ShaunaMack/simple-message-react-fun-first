import React from "react";

function App() {
  // set the message that will be rendered on the page
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  // toggle colour of heading
  const [isColorToggled, setIsColorToggled] = React.useState(false);

  function handleClick() {
    setMessage((prevMessage) =>
      prevMessage === "JavaScript is so cool."
        ? "I love React"
        : "JavaScript is so cool."
    );
    setIsColorToggled(!isColorToggled);
  }

  // the return is what is rendered on the page
  return (
    // in React we have to have 1 wrapper element
    <>
      <h1 style={{ color: isColorToggled ? "pink" : "purple" }}>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </>
  );
}

export default App;
