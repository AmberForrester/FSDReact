
import './Style.css';
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddItemList from "./AddItemList";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";


function App() {

  const API_URL = "http://localhost:3500/items";

  const [fetchError, setFetcherror] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  /*
  useEffect(() => {
    const fetchItem = async () => {};
  }, []);
*/
  /*
  useEffect(() => {
    const fetchItem = async () => {
try {

}
catch {

}
finally{

}


    };
  }, []);
*/
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw Error("Did not recieve data");
        const listItems = await response.json();
        setItems(listItems);
        setFetcherror(null);
      } catch (err) {
        setFetcherror(err.message);
      } finally {
        setIsloading(false);
      }
    };

    //(async () => await fetchItem())();
    //setTimeout(() => {}, 2000); //to  introduce the timeout of 2 sec

    setTimeout(() => {
      (async () => await fetchItem())();
    }, 2000);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };

    const listItems = [...items, myNewItem];

    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);

    if (result) setFetcherror(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);

    const myListItem = listItems.filter((item) => item.id === id);

    const reqURL = `${API_URL}/${id}`;

    const updateOtions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myListItem }),
    };
    const result = await apiRequest(reqURL, updateOtions);
    if (result) setFetcherror(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const reqURL = `${API_URL}/${id}`;

    const deleteOptions = { method: "DELETE" };
    const result = await apiRequest(reqURL, deleteOptions);

    if (result) setFetcherror(result);
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

      <main>
        {isLoading && <p style={{ color: "blue" }}>Loading Item List</p>}
        {fetchError && (
          <p style={{ color: "red" }}> {`Error : ${fetchError}`}</p>
        )}

        {!fetchError && !isLoading && (
          <Main
            items={items.filter(
              (item) =>
                item &&
                item.item.toLowerCase().includes(search && search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
