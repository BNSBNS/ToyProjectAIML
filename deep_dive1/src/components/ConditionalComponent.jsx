import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  
    // let messageOne = <h1>this is message 1</h1>
    // let messageTwo = <h1>message 2 </h1>
    const display = true
    // let message ;

    return display ? <Welcome /> : <Code />
    // return display ? <h1>message 1</h1> : <h1>message 2</h1>

  // if(display){
    //     return <Welcome />
    // }
    // else{
    //     return <Code />
    // }

//   if (display) {
//     return (
//       <div>
//         <h3>this is condi compo</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>code here</h3>
//       </div>
//     );
//   }
}
