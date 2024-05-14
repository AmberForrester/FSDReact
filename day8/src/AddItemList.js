import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItemList = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>Add Item </label>
      <input
        autoFocus
        id="addItem"
        placeholder="Add Item"
        required
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItemList;