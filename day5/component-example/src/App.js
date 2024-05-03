//import './App.css';

import Header from "./Header";

function App() {

    const nameChange = () => {

      const name = ["Syed", "Suzanne", "Salah", "Suze"];

      const n = Math.floor(Math.random() * 4);

      return name[n];

    };

  return (
    <div className="App">

          <h1>Welcome {nameChange()}</h1>

    </div>
  );
}

export default App;
