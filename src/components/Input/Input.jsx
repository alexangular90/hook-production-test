import {StyledInput} from "./StyledInput";
import {useEffect, useState} from "react";

const Input = ({type, label}) => {
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')

    const onFocusHandler = () => {
        if (value === '') setFocus(false)
    }

    return (
        <StyledInput focus={focus}>
            <span>{label}</span>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={onFocusHandler}
                type={type}/>
        </StyledInput>
    )
}
export default Input