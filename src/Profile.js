import React from "react";

const avatar =
  "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg";
const name = "Rock";
const date = new Date(2020, 10, 10);

const subStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "black",
};
export default function Profile() {
  return (
    <div>
      <h3 style={subStyle}>- - -</h3>
      <h3 style={subStyle}>- - -</h3>
      <section
        style={{
          width: "250px",
          height: "250px",
          margin: "auto",
          border: "5px solid springgreen",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={avatar}
          alt="Avatar"
          style={{
            width: "90%",
            height: "90%",
            margin: "auto",
            borderRadius: "50%",
          }}
        ></img>
      </section>

      <h3 style={subStyle}>{name}</h3>
      <h3 style={subStyle}>{date.getFullYear()}</h3>
    </div>
  );
}
