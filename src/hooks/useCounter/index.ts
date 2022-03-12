import { useState } from 'react'
import useMemoizedFn from '../useMemoizedFn'
interface Options {
    min?: number;
    max?: number;
}
type ValueParam = number | ((c: number) => number)

const getTargetValue = (value: number, options: Options = {}): number => {
    const { min, max } = options
    let target = value

    if (typeof min === 'number') target = Math.max(min, target)
    if (typeof max === 'number') target = Math.min(max, target)

    return target
}

/**
 * 管理计数器的hook
 * @param initialValue 初始值
 * @param options min: 最小值, max: 最大值
 * @returns current 当前值, fn 操作函数 { inc: 加, dec: 减, set: 设置, reset: 重置 }
 * @example 
    const [current, { inc, dec, set, reset}] = useCounter(
      initialValue, 
      { min, max }
    );
 */
const useCounter = (initialValue: number = 0, options: Options = {}) => {
    const { min, max } = options
    const [current, setCurrent] = useState(() => getTargetValue(initialValue, { min, max }))

    const setValue = (val: ValueParam) => {
        setCurrent(c => {
            const target = typeof val === 'number' ? val : val(c)
            return getTargetValue(target, { min, max })
        })
    }
    const inc = (step: number = 1) => {
        setValue(c => c + step)
    }
    const dec = (step: number = 1) => {
        setValue(c => c - step)
    }
    const set = (value: number) => {
        setValue(value)
    }
    const reset = () => {
        setValue(initialValue)
    }

    return [
        current,
        {
            inc: useMemoizedFn(inc),
            dec: useMemoizedFn(dec),
            set: useMemoizedFn(set),
            reset: useMemoizedFn(reset)
        }
    ] as const
}

export default useCounter