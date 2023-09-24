import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    {
      name: "Apple",
      price: "10",
      emoji: "🍎",
      soldout: false,
    },
    {
      name: "Mango",
      price: "20",
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Orange",
      price: "15",
      emoji: "🍊",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name1={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
          // <li key={fruit.name}>
          //   {fruit.name} {fruit.emoji} {fruit.price}
          // </li>
        ))}
      </ul>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul> */}
    </div>
  );
}
