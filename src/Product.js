// import React, { Component } from 'react'

// export default class Product extends Component {
//   render() {
//     return (
//       <div style={{
//         width: "30%",
//         margin: "10px",
//         textAlign: "center",
//         border: "2px solid gray"
//       }}>
//         <section style={{
//             display: "flex",
//         }}>
//             <img style={{
//                 width: `${this.props.size}px`,
//                 borderRadius: "50%",
//                 height: "100%"
//             }} src={this.props.product.avatar} alt='Product'></img>
//             <h2>{this.props.product.name}</h2>
//         </section>
//         <h3>{this.props.product.price}$</h3>
//       </div>
//     )
//   }
// }

import React from 'react'

export default function Product({size,product}) {
  return (
    <div>
       <div style={{
        width: "30%",
        margin: "10px",
        textAlign: "center",
        border: "2px solid gray"
      }}>
        <section style={{
            display: "flex",
        }}>
            <img style={{
                width: `${size}px`,
                borderRadius: "50%",
                height: "100%"
            }} src={product.avatar} alt='Product'></img>
            <h2>{product.name}</h2>
        </section>
        <h3>{product.price}$</h3>
      </div>
    </div>
  )
}
