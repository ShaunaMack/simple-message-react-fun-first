import React from "react";

function App() {
  // set the message that will be rendered on the page
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  // toggle colour of heading
  const [isColorToggled, setIsColorToggled] = React.useState(false);

  //  random quote generator
  const [quote, setQuote] = React.useState("Click to get inspired!");
  const quotes = [
    "The best way to get started is to stop talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "You learn more from failure than from success.",
    "It’s not whether you get knocked down, it’s whether you get up.",
  ];

  function handleClick() {
    setMessage((prevMessage) =>
      prevMessage === "JavaScript is so cool."
        ? "I love React"
        : "JavaScript is so cool."
    );
    setIsColorToggled(!isColorToggled);
  }

  function handleClickQuoteButton() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  // the return is what is rendered on the page
  return (
    // in React we have to have 1 wrapper element
    <>
      <h1 style={{ color: isColorToggled ? "pink" : "purple" }}>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
      <div>
        <h1>{quote}</h1>
        <button onClick={handleClickQuoteButton}>Get a new quote!</button>
      </div>
    </>
  );
}

export default App;
