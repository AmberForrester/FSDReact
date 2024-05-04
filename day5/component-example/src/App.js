//import './App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

    const nameChange = () => {

      const name = ["Syed", "Suzanne", "Salah", "Suze"];

      const n = Math.floor(Math.random() * 4);

      return name[n];

    };

  return (
    <div className="App">

          <Header/>
          <Main/>
          <Footer/>

    </div>
  );
}

export default App;
