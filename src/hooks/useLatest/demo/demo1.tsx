import { useEffect, useState } from "react";
import useLatest from "..";

const Index = () => {
  const [count, setCount] = useState(0)
  const lastestCountRef = useLatest(count)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(lastestCountRef.current + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p>count: { count }</p>
    </>
  )
}

export default Index