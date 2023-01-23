import React from "react";

export default function Card({
  code_title,
  code_description,
  code_body,
  code_author,
}) {
  return (
    <div className="CardClass">
      <h3 style={{ textTransform: "capitalize" }}>{code_title}</h3>
      <p>{code_description}</p>
      <code>
        <pre>
          <p style={{ overflow: "hidden" }}>{code_body}</p>
        </pre>
      </code>
    </div>
  );
}
