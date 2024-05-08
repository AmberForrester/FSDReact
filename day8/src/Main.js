import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Bread",
    },
    {
      id: 2,
      checked: false,
      item: "Eggs",
    },
    {
      id: 3,
      checked: false,
      item: "Milk",
    },
    {
      id: 4,
      checked: false,
      item: "Bananas",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;