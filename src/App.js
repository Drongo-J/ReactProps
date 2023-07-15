import Todo from "./Todo";
import Profile from "./Profile";
import logo from "./logo.svg";
import Item from "./Item";
import UserImage from "./UserImage";
import Info from "./Info";
import Product from "./Product";

const person = {
  name: "Ayxan",
  surname: "Ahmadzada",
  age: 17,
  avatar:
    "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
};

const products = [
  {
    name: "Apple",
    price: 1200.5,
    avatar: "https://w-t.az/storage/uploads/2023/04/I0OCG3lQ7NLfJ2MJWzxFwuplkHhPUJHbxNsW1PyY.jpg",
  },
  {
    name: "Samsung",
    price: 1800.99,
    avatar: "https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Blue-1ahoyx4cq2j8f97l0esv.jpg",
  },
  {
    name: "Acer Rog",
    price: 5500.5 ,
    avatar: "https://www.notebookcheck.net/uploads/tx_nbc2/Stock_photo.jpg",
  },
];

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      {/* <Todo></Todo> */}
      {/* <Profile></Profile> */}
      {/* <Item></Item> */}
      {/* <UserImage name={person.name} avatar={person.avatar}></UserImage> */}
      {/* <Info person={person}></Info> */}


      <Product size={50}product={products[0]}></Product>
      <Product size={100}product={products[1]}></Product>
      <Product size={150}product={products[2]}></Product>
    </div>
  );
}

export default App;
