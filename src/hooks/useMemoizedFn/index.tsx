import { useRef, useMemo } from "react";

type noop = (this: any, ...args: any[]) => any

/**
 * 持久化函数的hook
 * @param fn 
 * @returns 需要持久化的函数
 */
const useMemoizedFn = <T extends noop>(fn: T) => {
    if (process.env.NODE_ENV === 'development') {
        if (typeof fn !== 'function') {
            console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
        }
    }
    const fnRef = useRef<T>(fn)
    // 这里是容易引起歧义的地方 
    fnRef.current = useMemo(() => fn, [fn])

    const momizedRef = useRef<T>()
    if (!momizedRef.current) {
        momizedRef.current = function(this, ...args) {
            return fnRef.current.apply(this, args)
        } as T
    }

    return momizedRef.current
}

export default useMemoizedFn