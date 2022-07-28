import React, { useEffect, useState } from 'react'

export const Input = ({ labelValue, typeOfInput, nameOfInput }) => {

    const [inputValue, setInputValue] = useState('')
    const [emptyInput, setEmptyInput] = useState(false)

    useEffect(() => {

    })

    const onBlurInput = () => {
        if(inputValue.length === 0){
            setEmptyInput(true)
        } else{
            setEmptyInput(false)
        }
    }

    const onChangeInput = e =>{
        setInputValue(e.target.value)
    } 

    return (
        <>
            <label htmlFor={nameOfInput}>{labelValue}</label>
            <input
                className={`border outline-blue-500 ${emptyInput?'border-rose-600':"border-inherit"} mb-5`}
                type={typeOfInput}
                name={nameOfInput}
                onBlur={onBlurInput} 
                onChange={onChangeInput}
                value={inputValue}/>
        </>
    )
}
