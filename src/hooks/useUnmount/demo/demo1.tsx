import React, { useState } from 'react'
import useUnmount from '..'
import useMount from '../../useMount'

const MyComponent = () => {
  const [count, setCount] = useState(0)
  useMount(() => {
    console.log('mount')
  })

  useUnmount(() => {
    console.log('unmount')
  })

  return <div onClick={() => setCount(c => c + 1)}>{ count }</div>
}

const Index = () => {
  const [status, setStatus] = useState(true)

  return (
    <>
      <button type="button" onClick={() => setStatus(c => !c)}>
        { status ? '挂载了': '未挂载' }
      </button>

      { status && <MyComponent />}
    </>
  )
}

export default Index