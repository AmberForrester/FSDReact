import React from 'react'

const Main = () => {
    
        const myName = () => {
          const name = ["Sadeed", "Amber", "Suzanne", "Salah"];
          const n = Math.floor(Math.random() * 4);
          return name[n];
        };

const myClick = () => {
    console.log("Amber pressed the button");
};

const myClick2 = (newName) => {
    console.log(`${newName} pressed the button`);
};

const myClick3 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
};


  return (
    <main>
        <p>Hello {myName()} </p>
        <button onClick={myClick}>Click Me!</button>

        <button onClick={() => myClick2("Syed")}>2nd Click</button>
        
        <button onClick={(e) => myClick3(e)}>3rd Click</button>

    </main>
  );
};

export default Main;