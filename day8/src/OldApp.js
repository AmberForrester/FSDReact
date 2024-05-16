//Old App.js with no JSON implementation 

import "./App.css";
import { useEffect, useState } from "react";
import AddItemList from "./AddItemList";
import SearchItem from "./SearchItem";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
    
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("grocerylist")) || []);  

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("grocerylist", JSON.stringify(items));}, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };

    const listItems = [...items, myNewItem];

    setItems(listItems);
    setNewItem("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    console.log(newItem);
    
    addItem(newItem);
    
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Shopping List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItemList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Main
        items={items.filter((item) => item.item.includes(search))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;