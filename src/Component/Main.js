import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";
import InsertCode from "./InsertCode";
import "../App.css";

export default function Main() {
  const [insertdata, SetInsertData] = useState(false);
  const [buttonCode, SetbuttonCode] = useState("pink");
  const [buttonInsert, SetbuttonInsert] = useState("");
  const [data, setData] = useState([]);

  const showCode = (e) => {
    SetInsertData(false);
    SetbuttonCode("pink");
    SetbuttonInsert("white");
  };

  const insertData = (data) => {
    SetInsertData(true);
    SetbuttonInsert("pink");
    SetbuttonCode("white");
  };

  useEffect(() => {
    if (!insertdata) {
      axios
        .get("https://wicked-scarf-slug.cyclic.app/fetch")
        .then((response) => {
          console.log(response.data.data.resp);
          setData(response.data.data.resp);
        })
        .catch((err) => {
          console.log(err);
          console.log(err);
        });
    }
  }, [insertdata]);

  return (
    <div>
      <div style={{ padding: "1rem", hight: "4rem" }}>
        <div className="NavBar">
          <div className="ButtonContainer">
            <button
              className="buttonAction"
              style={{ backgroundColor: buttonCode }}
              onClick={(e) => {
                showCode(e);
              }}
            >
              Show Code
            </button>
            <button
              className="buttonAction"
              style={{ backgroundColor: buttonInsert }}
              onClick={(e) => {
                insertData(e);
              }}
            >
              Insert Code
            </button>
          </div>
          {/* <h1 onClick={() => SetInsertData(!insertdata)}>Insert Data</h1> */}
        </div>
      </div>
      {insertdata && <InsertCode />}
      {!insertdata && <CardContainer data={data}></CardContainer>}
    </div>
  );
}
