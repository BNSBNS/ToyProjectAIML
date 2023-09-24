// component must be same as file.. to export

function showSOmething() {
  return <h2>"showing something"</h2>;
}

function Hello(props) {
  return (
    <h1>
      HEllo from hello.jsx {props.person.message} {props.person.name} {props.person.emoji}
    </h1>
  );
  //   return (
  //     <div>
  //       <h1>HEllo from hello.jsx </h1>
  //       {showSOmething()}
  //     </div>
  // );
}

export default Hello;
