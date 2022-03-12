import { useEffect } from "react"
import useLatest from "../useLatest";

/**
 * 只在组件卸载（unmount）时执行的 Hook
 * @param fn 组件卸载时执行的函数
 * @returns void
 * @example useUnmount(fn: () => void): void
 */
const useUnmount = (fn: () => void): void => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }
  
  const fnRef = useLatest(fn)

  useEffect(() => () => fnRef.current?.(), [])
}

export default useUnmount