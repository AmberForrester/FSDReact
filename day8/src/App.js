
import "./App.css";
import { useEffect, useState } from "react";
import AddItemList from "./AddItemList";
import SearchItem from "./SearchItem";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);  

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchItem = async () => {
// try {

// }
// catch {

// }
// finally{

// }


//     };
//   }, []);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      } finally {
      }
    };
    (async () => await fetchItem())();
  }, []);

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
        items={items.filter(
          (item) =>
            item &&
            item.item.toLowerCase().includes(search && search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;