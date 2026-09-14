'use client'

import { useState } from "react";


export function Counter() {
    const [count, setCount] = useState (0)
    return <button> {count}</button>
}