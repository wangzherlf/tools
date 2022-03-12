import { useEffect, useRef } from "react"

/**
 * 获取当前组件是否已经卸载的 Hook
 * @returns ref 组件是否已经卸载
 * @example const unmountedRef: { current: boolean } = useUnmountedRef()
 */
const useUnmountedRef = () => {
  const ref = useRef(false)

  useEffect(() => {
      ref.current = false
    return () => {
      ref.current = true
    }
  }, [])

  return ref
}

export default useUnmountedRef