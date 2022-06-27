import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

const App = () => (
  <>
    <h1 className="heading_style">List of 5 Netflix Series In 2022</h1>
    {Sdata.map((val) => {
      return (
        <Cards
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          links={val.links}
        />
      );
    })}
  </>
);

export default App;
