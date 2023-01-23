import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";
import InsertCode from "./InsertCode";
import "../App.css";

export default function Main() {
  const [insertdata, SetInsertData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://wicked-scarf-slug.cyclic.app/fetch")
      .then((response) => {
        console.log(response.data.data.resp);
        setData(response.data.data.resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="NavBar">
        <div className="ButtonContainer">
          <button className="buttonAction">Show Code</button>
          <button className="buttonAction">Insert Code</button>
        </div>
        {/* <h1 onClick={() => SetInsertData(!insertdata)}>Insert Data</h1> */}
      </div>
      {insertdata && <InsertCode />}
      {!insertdata && <CardContainer data={data}></CardContainer>}
    </div>
  );
}
