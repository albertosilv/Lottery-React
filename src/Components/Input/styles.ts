import styled from "styled-components"
export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
	font-weight: bold;
	font-size: 20px;
	margin-bottom: 8px;
`;
export const Wrapper = styled.div`
	background: none;
	height: 45px;;
	border-radius: 5px;
	display: flex;
	align-items: center;
	& > input {
		background: none;
		border: none;
		font-size: 18px;
		height: 100%;
		padding-left: 10px;
		flex: 1;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #ABABAB;
            font-weight:600;
            font-style: italic;
            letter-spacing: .1rem;
            font-size:15px;
        }
	}
`;
export const Line = styled.div`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #EBEBEB; 
    line-height: 0.1em;
    margin: 10px 0 20px;
`