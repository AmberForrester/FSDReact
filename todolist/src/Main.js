import React from 'react'
import ItemList from './ItemList';

const Main = ({ items, handleDelete, handleCheck }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default Main;