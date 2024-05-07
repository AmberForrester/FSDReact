import React from "react";
import './Keyboard.css';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}) {
  return (
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
          gap: ".5rem",
        }
      },
      KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          React.createElement(
            "button",
            {
              onClick: () => addGuessedLetter(key),
              className: `${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`,
              disabled: isInactive || isActive || disabled,
              key: key
            },
            key
          )
        );
      })
    )
  );
}