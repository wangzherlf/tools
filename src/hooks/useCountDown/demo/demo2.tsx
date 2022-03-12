import { useState } from 'react'
import useCountDown from '..'

const Index = () => {
    const [targetDate, setTargetDate] = useState<number>()

    const [countdown] = useCountDown({
        targetDate,
        onEnd: () => {
            alert('end of the time')
        }
    })

    return (
        <>
            <button
                onClick={() => setTargetDate(Date.now() + 5000)}
                disabled={countdown !== 0}
            >
                {countdown === 0 ? 'Start Interval' : `Reset After ${Math.round(countdown / 1000)}s`}
            </button>

            <button
                onClick={() => setTargetDate(undefined)}
                style={{ marginLeft: 8 }}
            >
                stop
            </button>
        </>
    )
}

export default Index