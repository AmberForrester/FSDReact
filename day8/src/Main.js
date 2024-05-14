import React from "react";
import ItemList from "./ItemList";

const Main = ({ items, handleDelete, handleCheck }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Main;