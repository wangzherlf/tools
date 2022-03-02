import React, { useState, memo } from 'react'
import useCounter from '..'

const Child = memo((props: { val: any; fn: any }) => {
    const { val, fn } = props
    console.log('验证缓存是否生效', val, fn)
    return <div>{val}</div>
})

const Index = () => {
    const [current, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10})
    const [cval, setCval] = useState(0)
    return (
        <div>
            <p>{current} [max: 10; min: 1;]</p>
            <div>
                <button
                type="button"
                onClick={() => {
                    inc();
                }}
                style={{ marginRight: 8 }}
                >
                inc()
                </button>
                <button
                type="button"
                onClick={() => {
                    dec();
                }}
                style={{ marginRight: 8 }}
                >
                dec()
                </button>
                <button
                type="button"
                onClick={() => {
                    set(3);
                }}
                style={{ marginRight: 8 }}
                >
                set(3)
                </button>
                <button type="button" onClick={reset} style={{ marginRight: 8 }}>
                reset()
                </button>
            </div>

            <div>
            <button type="button" onClick={() => setCval(cval + 1)}>
                { cval } 只有改变cval才更新子组件
            </button>
            </div>
            <Child val={cval} fn={inc}/>
        </div>
    )
}

export default Index