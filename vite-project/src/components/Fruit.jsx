export default function Fruit({ name1, price, emoji, soldout }) {
  return (
    <div>
      {price > 15 ? <li>{name1} {price}</li> : ""} {soldout ? "Sold out" : "Avail"}
      {/* {name} {price} {emoji} */}
    </div>
  );
}
