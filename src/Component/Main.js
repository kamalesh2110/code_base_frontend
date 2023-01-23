import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "./CardContainer";

export default function Main() {
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

  const dataHandler = () => {
    console.log(data.resp);
  };

  return (
    <div>
      <CardContainer data={data}></CardContainer>
    </div>
  );
}
