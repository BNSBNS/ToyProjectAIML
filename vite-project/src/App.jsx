import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {

  const person ={
    name: "M",
    message: "hi",
    emoji: "👋",
    seatNumber: [1,4,7]
  }

  // tester sample refresh
  const prices = [1,2,3,45,65]
  // => is the callback func to get price out. mapping gives each element in the array 
  prices.map(price => console.log(price))
  const discounts = prices.map(price=>price*32/100)
  console.log(discounts)
  return (
    <div className="App">
      <Counter />
      <Message />
      {/* <ConditionalComponent /> */}
      {/* <Hello person={person}/> */}
      <Fruits />
      {/* <Hello name="first" message="this message" emoji="👋" /> */}
      {/* to open emoji, press window + . */}
    </div> 
  );
}

export default App;
