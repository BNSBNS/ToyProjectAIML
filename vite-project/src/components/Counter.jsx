import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    return <div>
        Count Value: {count}
    </div>
}