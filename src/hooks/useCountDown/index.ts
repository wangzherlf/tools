import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from "react";
import { parseMs } from '../../helper';
import useLatest from '../useLatest';

type TDate = Date | number | string | undefined;

interface Options {
    targetDate?: TDate;
    interval?: number;
    onEnd?: () => void;
}

const calcLeft = (t?: TDate) => {
    if (!t) return 0
    // dayjs解决safari浏览器 `-`格式日期的问题
    const left = dayjs(t).valueOf() - new Date().getTime()

    if(left < 0) return 0
    return left
}

/**
 * 一个管理倒计时的Hook
 * @param options targetDate: 目标时间, interval: 变化时间间隔, onEnd: 倒计时结束触发
 * @returns countdown 倒计时时间戳 formattedRes 格式化后的倒计时
 * @example 
    const [countdown, formattedRes] = useCountDown(
      {
        targetDate,
        interval,
        onEnd
      }
    )
 */
const useCountDown = (options?: Options) => {
    const { targetDate, interval = 1000, onEnd } = options || {}

    const [countdown, SetCountdonw] = useState(() => calcLeft(targetDate))

    const onEndRef = useLatest(onEnd)

    useEffect(() => {
        if (!targetDate) {
            SetCountdonw(0)
            return
        }
        // 立即执行一次 适用于点击按钮时
        SetCountdonw(calcLeft(targetDate))

        const timer = setInterval(() => {
            const targetLeft = calcLeft(targetDate)
            SetCountdonw(targetLeft)
            if (targetLeft === 0) {
                clearInterval(timer)
                onEndRef.current?.()
            }
        }, interval)

        return () => clearInterval(timer)
    }, [targetDate, interval]) // eslint-disable-line react-hooks/exhaustive-deps

    const formattedRes = useMemo(() => parseMs(countdown), [countdown])

    return [countdown, formattedRes] as const
}

export default useCountDown