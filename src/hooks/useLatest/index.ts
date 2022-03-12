import { useRef } from 'react'

/**
 * 返回当前最新值的Hook, 可以避免闭包问题
 * @param value 值
 * @returns ref
 * @example const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>
 */
const useLatest = <T>(value: T) => {
    const ref = useRef(value)
    ref.current = value
    return ref
}

export default useLatest