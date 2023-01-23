import React from "react";

export default function Card({
  code_title,
  code_description,
  code_body,
  code_author,
}) {
  return (
    <div
      style={{
        border: ".25rem solid black",
        padding: ".5rem",
        margin: ".12rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ textTransform: "capitalize" }}>{code_title}</h3>
        <p>{code_description}</p>
        <code>
          <pre>
            <p>{code_body}</p>
          </pre>
        </code>
      </div>
    </div>
  );
}
