import React, {useState} from 'react'
import s from './App.module.css'
import  './App.css'
import {Button} from "./components/Button/Button"
import {Count} from "./components/Count/Count"


export const App = () => {
    const [value, setValue] = useState<number>(0)
    const minValue: number = 0
    const maxValue: number = 5
    const incFunction = () => {
        (value >= minValue && value < maxValue) && (setValue(value+ 1))
    }
    const resetFunction = () => setValue(0)

    const disabledIncFunction = (value: number) => !!(value && value ===5)
    const disabledResetFunction = (value: number) => !value

    return (
        <div className={s.counter}>
            <Count value={value} maxValue={maxValue}/>
            <div className = {s.buttons}>
                <Button title={'INC'}  buttonFunction={incFunction} value={value} disabledButton={disabledIncFunction}/>
                <Button title={'RESET'}  buttonFunction={resetFunction} value={value} disabledButton={disabledResetFunction}/>
            </div>
        </div>
    )
}




















// export const App = () => {
//     const [value, setValue] = useState<number>(0)
//     const minValue: number = 0
//     const maxValue: number = 5
//     const incFunc = () => {
//         (value >= minValue && value < maxValue) && setValue(value+1)
//     }
//     const resFunc = () => {setValue(0)}
//
//     const disabledIncButton = (value: number) => value && value === 5 ? true : false
//     const disabledResButton = (value: number) => !value ? true : false
//
//     return (
//         <div className={s.counter}>
//             <Count value={value} maxValue={maxValue}/>
//             <div className={s.buttons}>
//                 <Button title={'inc'} buttonFunction={incFunc} value={value} disabledButton={disabledIncButton}/>
//                 <Button title={'reset'} buttonFunction={resFunc} value={value} disabledButton={disabledResButton}/>
//             </div>
//
//         </div>
//     )
// }
//  export default App