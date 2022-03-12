import { useEffect, useState } from "react"
import useUnmountedRef from ".."

const MyComponent = () => {
  const unmountedRef = useUnmountedRef()

  useEffect(() => {
    return () => {
      setTimeout(() => {
        console.log(unmountedRef.current)
      }, 3000);
    }
  }, [])
  return (
    <p>hello</p>
  )
}
const Index = () => {
  const [status, setStatus] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setStatus(c => !c)}>
        { status ? '已挂载' : '未挂载'}
      </button>

      { status &&  <MyComponent /> }
    </>
  )
}

export default Index