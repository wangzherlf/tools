import React from 'react'
import useCountDown  from '..'

const Index =  () => {
    const [, formattedRes] = useCountDown({
        targetDate: '2023-03-08 16:31:00'
    })

    const { days, hours, minutes, seconds, milliseconds } = formattedRes

    return (
        <>
            <p>There are {days}-days {hours}-hours {minutes}-minutes {seconds}-seconds {milliseconds}-milliseconds</p>
        </>
    )
}


export default Index