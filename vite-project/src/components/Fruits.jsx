export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    {
      name: "Apple",
      price: "10",
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: "20",
      emoji: "🥭",
    },
    {
      name: "Orange",
      price: "15",
      emoji: "🍊",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {fruit.name} {fruit.emoji} {fruit.price}
          </li>
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
