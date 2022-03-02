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
 * @param options 最大最小边界
 * @returns hoks
 * @example const [current, { inc, dec, set, reset}] = useCounter(initialValue, { min, max });
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