// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'jashim', 'Alomgir', 'Salman'];
  const products = [
    { name: 'Photoshop', price: '$99.99', look:'high' },
    { name: 'Illustrator', price: '$90.99' },
    { name: 'Indesign', price: '$80.99' },
    { name: 'Premiere Pro', price: '$190.99' },
    { name: 'After Effects', price: '$190.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Age></Age>
        <Counter></Counter>
        <Users></Users>
        <ul className="all-all">
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
         
        </ul>
         {
           products.map(product=><Product pd={product}></Product>)
         } 
        

      </header>
    </div>
  );
}



function Age(){
  const [age, setAge] = useState(0);  
  const handle2 = () =>{
    setAge(age-1);
    if(age === 0){
      alert('You can not decrease anymore buddy')
      setAge(0)
    }
  }
  return(
    <div>
      <h1>Your age : {age}</h1>
      <button onClick={()=>setAge(age+1)}><h3>Plus</h3></button>
      <button onClick={handle2}><h3>Minus</h3></button>
    </div>
  )
}

function Users(){
 const[users, setUsers] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
 },[])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{'https://www.'+user.website}</li>)
          // console.log(users)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [ count, setCount] = useState(10)
  const handle = () =>{
    setCount(count-1);
    if(count === 0){
      setCount(0)
    } 
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={handle}>Decrease</button>
    </div>
  )
}



function Product(props) {
  const productStyle = {
    border: '3px dashed gray',
    margin:'5px',
    borderRadius: '5px',
    // backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column',
    
  }
  const { name, price } = props.pd;
  // console.log(props);

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}



// function Person(props) {
//   const divStyle = {
//     border: "2px solid red",
//     margin: "10px",
//     padding: "10px",
//     backgroundColor: "lightblue"
//   }
//   return (
//     <div style={divStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Hero of the year {props.year}</h3>

//     </div>
//   );
// }
export default App;
