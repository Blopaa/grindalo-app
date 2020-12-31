import React from 'react'
import useInput from '../../../hooks/useInput'

type InputProps = {
    type: "auth";
    nameAndValue: string;
}

const Input: React.FC<InputProps> = ({type}) => {

    const [state, handleChange] = useInput({
        values: ''
    })

    const {values} = state;

    return (
        <>
            {
                type === "auth" && <input type="text" name="values" value={values} onChange={handleChange}/>
            }
        </>
    )
}

export default Input
