import React, { InputHTMLAttributes } from 'react'
import { Wrapper, Container, Line } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    onChange:any,
    type:string,
    value:string
}
const Input: React.FC<InputProps> = ({ placeholder,onChange,type,value }) => {
    return (
        <Container>
            <Wrapper>
                <input type={type} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} />
            </Wrapper>
            <Line />
        </Container>
    )
}
export default Input;