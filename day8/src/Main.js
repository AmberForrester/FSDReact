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

        <p style={{ marginTop: "2rem", fontWeight: "bold" }}>You have completed your list! </p>
      )}

    </main>
  );
};

export default Main;