import React from 'react'
import {Title} from './styles'
interface TitleProps{
    style:Object;
}
const TitlePage:React.FC<TitleProps> = ({children,style})=>{
    return(
        <Title style={style}>
            {children}
        </Title>
    )
}
export default TitlePage;