import React from 'react'
import s from './Count.module.css'

type CountPropsType = {
    value: number
    maxValue: number
}

export const Count = (props: CountPropsType) => {
    return (
        <div className={s.board}>
            <div className={(props.value === props.maxValue) ? s.maxInc : s.value}>{props.value}</div>
        </div>
    )
}

