// import './App.css'
//  import Navbar from './components/Navbar';
 import{useState} from 'react';
 import Shoppingcart from './components/Shoppingcart';
 import './components/Shoppingcart.css'
// import Herosection from './components/Herosection'
// // import Button from './Components/button';

// function App() {
//   return(
//     <>
//    <Navbar name="NavBar props"/>
//    <Navbar name=" Ruth NavBar" className="nav-bar"/>
//    <Herosection />
//   </>
//   )
// }

// export default App

// import Portfolio from "./components/Portfolio";

// function App() {
//   return (
//     <div className="app">
//       <Portfolio />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const profileData = [
//     {
//       name: "Alex"
//   }, {
//     name: "Ruth"
//   }
// ]
//   return (
//     <>
//     {profileData.map((profile) => {
//       return <Navbar name={profile.name}/>
//     })
//     }

     {/* <Button>Click Me</Button>
    <RadioButton name = "radio-button" />  */}
    // </>
//   );
// }

//  function App () {
//      return (
//      <>
//      <button>Sign Up</button>
//        <Navbar name="Amynwa"className="nav-bar"></Navbar>
//      </>
//    );
//  }

//  function App () {
//   const [cart, setCart] = useState(0);
//    const profileData = [
//      {
//        name: "Ezeobi Ejiro"
//  }, {
//  name: "Amynwa"
//  }, {
//    name:"Abdulrahman"
//  }
//    ]

//    let existingAccount = true;

//  if (existingAccount == true){
//    "Hello"
//  } else{
//    "Hi"
//  }
//    return (
//      <>
//        {profileData.map((profile)=> {
//            return <Navbar name={profile.name} />
//          })
//        }
     
//      <h1>{cart}</h1>
//      <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
//     <Button onClick={() =>alert(existingAccount ? "User Exist" : "User Not Found")} >Click Me! </Button>
//      </>
//    );
//  }
//  function App () {
//    const profileData = [
//      {
//        name: "Ezeobi Ejiro"
//  }, {
//  name: "Amynwa"
//  }, {
//    name:"Abdulrahman"
//  }
//    ]

//    let existingAccount = true;

//  if (existingAccount == true){
//    "Hello"
//  } else{
//    "Hi"
//  }
//    return (
//      <>
//        {profileData.map((profile, key)=> {
//            return <Navbar key={index} name={profile.name} />
//          })
//        }
     
//      <Navbar/>
//       <Button onClick={() =>alert ("Clicked Me!")}>Click Me!</Button>
//      </>
//    );
//  }

// function App () {
//   const [user, setUser] = useState(null)

// return (
//   <>
//     <h1>Goodmorning {user}</h1>
//   <button onClick={() => setUser("Ruth")}>Greet</button>
//   <button onClick={() => setUser("User")}>Greet1</button>
//   </>
// )
// }
function App() {
  return (
    <div>
      <Shoppingcart />
    </div>
  );
}
export default App;