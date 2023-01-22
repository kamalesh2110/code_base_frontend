import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Main() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://wicked-scarf-slug.cyclic.app/fetch")
      .then((response) => {
        setData(response.data.data);
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
      <button
        onClick={(e) => {
          dataHandler(e);
        }}
      >
        SHOW DATA
      </button>
      <Card data={data.resp}></Card>
    </div>
  );
}
