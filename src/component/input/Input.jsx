import React, {useState} from 'react'

export const Input = (props) => {

    const {
        labelValue,
        typeOfInput,
        nameOfInput,
        onChangeInputValue,
        inputValue} = props
        const [emptyInput, setEmptyInput] = useState(false)

    const onBlur = () => {
        if (inputValue === '') {
            setEmptyInput(true)
        } else {
            setEmptyInput(false)
        }
    }

    const onChange = e => {
        onChangeInputValue(e.target.value)
    }

    return (
        <>
            <label htmlFor={nameOfInput}>{labelValue}</label>
            <input
                className={`border outline-blue-500 ${emptyInput ? 'border-rose-600' : "border-indigo-50"} mb-5`}
                type={typeOfInput}
                name={nameOfInput}
                onBlur={onBlur}
                onChange={onChange}
                value={inputValue} />
        </>
    )
}
