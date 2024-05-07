import React from "react";

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }) {
  return (
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: ".25em",
          fontSize: "6rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }
      },
      wordToGuess.split("").map((letter, index) =>
        React.createElement(
          "span",
          {
            style: {
              borderBottom: ".1em solid black"
            },
            key: index
          },
          React.createElement(
            "span",
            {
              style: {
                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
              }
            },
            letter
          )
        )
      )
    )
  );
}