import React, { useCallback, useState, memo, useRef } from "react";
import useMemoizedFn from "..";

const Index =  () => {
    const [count, setCount] = useState(0)

    const callbackFn = useCallback(() => {
        console.log(`Current count is ${count}`)
    }, [count])

    const memoizedFn = useMemoizedFn(() => {
        console.log(`Current count is ${count}`)
    })

    return (
        <>
            <p>count: { count }</p>
            <button type="button" onClick={() => setCount(c => c + 1)}>add count</button>
            <p>You can click the button to see the number of sub-component renderings</p>

            <div style={{ marginTop: 32 }}>
                <h3>Component with useCallback function:</h3>
                <ExpensiveTree showCount={callbackFn} />
            </div>

            <div style={{ marginTop: 32 }}>
                <h3>Component with useMemoizedFn function:</h3>
                <ExpensiveTree showCount={memoizedFn} />
            </div>
        </>
    )
}

const ExpensiveTree = memo<{ [key: string]: any }>(({ showCount }) => {
    const renderCountRef = useRef(0)
    console.log('first: ', renderCountRef.current)
    renderCountRef.current += 1
    console.log('end: ', renderCountRef.current)

    return (
        <div>
            <p>Render Count: { renderCountRef.current }</p>
            <button type="button" onClick={ showCount }>
                showParentCount
            </button>
        </div>
    )
})


export default Index
