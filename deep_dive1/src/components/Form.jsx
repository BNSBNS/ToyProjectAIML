import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("as");
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleChange(e) {
    // console.log(e);
    // console.log(e.target.value)
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(name)
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        {" "}
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}

          //   onChange={(e) => handleChange(e)}

          // onChange={(e) => setName(e.target.value)}

          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>add </button>
      </form>

      
    </div>
  );
}
