
import './App.css';
import Content from './Content';
import {useState} from "react";
import SearchJob from './SearchJob';



function App() {

  const [search, setSearch] = useState("");


  return (
    <div className="App">
      <SearchJob search={search} setSearch={setSearch} />
      <Content/>
      
    </div>
  );
};

export default App;
