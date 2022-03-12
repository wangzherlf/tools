import { useEffect } from "react"
import useLatest from "../useLatest"
/**
 * 只在组件初始化时(mount)执行的 Hook
 * @param fn 初始化时执行的函数
 * @returns void
 * @example useMount(fn: () => void): void
 */
const useMount = (fn: () => void): void => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(`useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`)
    }
  }
  
  const fnRef = useLatest(fn)

  useEffect(() => {
    fnRef.current?.()
  }, [])
}

export default useMount