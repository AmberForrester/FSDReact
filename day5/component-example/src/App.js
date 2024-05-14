//import './App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {

    const [emotion, SetEmotion] = useState("Happy");

      useEffect(() => {

        console.log(`My initial emotion is ${emotion}`);}, [emotion]
    );

    // const nameChange = () => {

    //   const name = ["Syed", "Suzanne", "Salah", "Suze"];

    //   const n = Math.floor(Math.random() * 4);

    //   return name[n];

    // };

  return (
    <div className="App">
      <h1>Your current emotion is {emotion}</h1>

      <button onClick={() => SetEmotion("Excited")}>Excited</button>

      <button onClick={() => SetEmotion("Eager")}>Eager</button>

          {/* <Header/>
          <Main/>
          <Footer/> */}

    </div>
  );
}

export default App;
