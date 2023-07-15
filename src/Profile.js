import React from 'react'

const avatar = "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg";
const name = "Rock";
const date = new Date(2020, 10, 10);

const subStyle={
    marginTop: "-9%",
    textAlign: "center",
    color: "black",
};
export default function Profile() {
  return (
    <div>
      <section style={{
        width: "250px",
        height: "250px",
        margin: "auto",
        border: "5px solid springgreen",
        marginTop: "100px",
        borderRadius: "50%",
        padding: "5%",
        boxSizing: 'border-box'
      }}>

        <img src={avatar} alt='Avatar' style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            borderRadius: "50%"
        }}></img>
        <h3 style={subStyle}>{name}</h3>
        <h3 style={subStyle}>{date.getFullYear()}</h3>
      </section>
    </div>
  )
}
