import { useCallback, useState } from "react";
import useMemoizedFn from "..";

const Index = () => {
    const [count, setCount] = useState(0)

    const callbackFn = useCallback(() => {
        console.log(`Current count is ${count}`)
    }, [count])

    const memoizedFn = useMemoizedFn(() => {
        console.log(`Current count is ${count}`)
    })

    return (
        <>
        <p>count: {count}</p>
        <button
            type="button"
            onClick={() => {
                setCount((c) => c + 1);
            }}
        >
            Add Count
        </button>
        <div style={{ marginTop: 16 }}>
            <button type="button" onClick={callbackFn}>
            call callbackFn
            </button>
            <button type="button" onClick={memoizedFn} style={{ marginLeft: 8 }}>
            call memoizedFn
            </button>
        </div>
        </>
    )
}

export default Index