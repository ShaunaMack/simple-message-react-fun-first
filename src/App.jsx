import React from "react";

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
    setMessage((prevMessage) =>
      prevMessage === "JavaScript is so cool."
        ? "I love React"
        : "JavaScript is so cool."
    );
  }

  // the return is what is rendered on the page
  return (
    // in React we have to have 1 wrapper element
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </>
  );
}

export default App;
