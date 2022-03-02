import { useRef } from "react";

type noop = (...args: any[]) => any

/**
 * 持久化函数的hook
 * @param fn 
 * @returns 需要被缓存的函数
 */
const useMemoizedFn = <T extends noop>(fn: T) => {
    if (process.env.NODE_ENV === 'development') {
        if (typeof fn !== 'function') {
            console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
        }
    }
    const fnRef = useRef<T>(fn)

    const momizedRef = useRef<T>()
    if (!momizedRef.current) {
        momizedRef.current = fnRef.current
    }

    return momizedRef.current
}

export default useMemoizedFn