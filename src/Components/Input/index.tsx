import React, { InputHTMLAttributes } from 'react'
import { Wrapper, Container, Line } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    onChange:any,
}
const Input: React.FC<InputProps> = ({ placeholder,onChange }) => {
    return (
        <Container>
            <Wrapper>
                <input type="text" placeholder={placeholder} onChange={e=>onChange(e.target.value)} />
            </Wrapper>
            <Line />
        </Container>
    )
}
export default Input;