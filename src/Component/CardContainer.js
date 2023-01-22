import React from "react";
import Card from "./Card";

export default function CardContainer({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <Card
            code_title={item.code_title}
            code_description={item.code_description}
            code_body={item.code_body}
            code_author={item.code_author}
          ></Card>
        );
      })}
    </div>
  );
}
