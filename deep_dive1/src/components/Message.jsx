export default function Message(){

    function handleClick(){
        console.log("clicked ")
    }

    return (
        <div >
            <button onClick={handleClick}>click me</button>
        </div>
    )
}