import React from "react";
import Card from "./Card";

export default function CardContainer({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <p>{item.code_title}</p>;
      })}
    </div>
  );
}
