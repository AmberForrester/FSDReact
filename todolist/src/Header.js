import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  );
};

export default Header;

/*
//Default props
import React from "react";

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "SimpleList",
};

export default Header;

*/

/*
//Default Props using Props
import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "SimpleList",
};

export default Header;

*/

/*
//Props using Props
import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};



export default Header;

*/