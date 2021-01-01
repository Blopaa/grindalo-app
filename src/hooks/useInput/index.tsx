import { useState } from 'react'

interface IinitialState {
    values?: string;
}

const useInput = (initialState: IinitialState = {}): any[] => {
    const [state, setState] = useState(initialState)

    const handleInputChange = ({target}:  React.ChangeEvent<HTMLInputElement>): void => {
        if(!target) throw new Error("no target sent");
        // console.log(state);
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return [state as IinitialState, handleInputChange as () => void]
}

export default useInput
