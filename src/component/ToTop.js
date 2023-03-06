import styled from "styled-components"
import { AiOutlineVerticalAlignTop } from "react-icons/ai"

const ToTopBtn = styled.button`
position: fixed;
bottom: 50px;
right: 50px;

padding: 0;
background: transparent;
border: none;
outline: none;

font-size: 30px;
`

export const ToTop = () => {
    return (
        <ToTopBtn><AiOutlineVerticalAlignTop /></ToTopBtn>
    )
}