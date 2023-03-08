import styled from "styled-components"
import { AiFillCaretUp } from "react-icons/ai"

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const ToTopBtn = styled.button`
position: fixed;
bottom: 50px;
right: 50px;

padding: 0;
background: transparent;
border: none;
outline: none;

background: rgba(68, 49, 33, 0.5);
width:44px;

font-size: 30px;

opacity: 0;
visibility: hidden;
transition: 0.5s;

&.on{
    opacity: 1;
    visibility: visible;
}
`

export const ToTop = () => {
    const [scroll, setScroll] = useState(0);

    const ToTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 })
    };

    const scrollHandler = () => {
        let sct = window.scrollY;
        setScroll(sct);
    };
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => { window.removeEventListener('scroll', scrollHandler) };
    })
    return (
        <ToTopBtn onClick={ToTopHandler} className={scroll > 400 ? 'on' : ''}>
            <AiFillCaretUp />
        </ToTopBtn>
    )
}