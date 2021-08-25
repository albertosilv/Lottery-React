import React from 'react'
import {Title} from './styles'
const TitlePage:React.FC = ({children})=>{
    return(
        <Title>
            {children}
        </Title>
    )
}
export default TitlePage;