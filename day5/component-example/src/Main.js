import React from 'react'

function Main() {
    
    const myName = () => {
        
        const name = ["Amber", "Sadeed", "Salah", "Suzanne", "Syed"];

        const n = Math.floor(Math.random * 4);

        return name[n];
    };

    return (
        <section>
            <h4> {myName()} is learning to code.</h4>

            <img
              width={300}
              height={300}
              src="/Day3/images/codingJS_1.jpg"
              alt=""
            />

            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            </ul>

          </section>
    );
}

export default Main