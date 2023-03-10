import styled from "styled-components"
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Head = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    line-height: 40px;
    z-index: 999;
    
    color: #fff;
    border-bottom: 1px solid rgba(68, 49, 33, 0.0);
    transition: 0.5s;
    &.on{
        background: #fff;
        color: rgba(68, 49, 33, 0.8);
        border-bottom: 1px solid rgba(68, 49, 33, 0.5);
    } 
    .top{
        text-align: center;
        font-size: 50px;
        line-height: 2;
        border-bottom: 1px solid rgba(68, 49, 33, 0.0);
        a{
            display: block;
        }
    }&.on .top{
        border-bottom: 1px solid rgba(68, 49, 33, 0.5);
    }
    .btm{
        justify-content: space-between;  
        border-left: 1px solid rgba(68, 49, 33, 0.0);  
        border-right: 1px solid rgba(68, 49, 33, 0.0);    
        a{
                    padding: 0 20px;
       }
       .icon{
        font-size: 20px;
       }
    }
    &.on .btm{
        border-left: 1px solid rgba(68, 49, 33, 0.5);  
        border-right: 1px solid rgba(68, 49, 33, 0.5);  
    }
`

export const Header = () => {
    const [sY, setSY] = useState(0);
    const [on, setOn] = useState(false);

    const handle = () => {
        setSY(window.pageYOffset);
        sY > 100 ? setOn(true) : setOn(false)
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handle)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handle)
        }
    })
    return (
        <Head className={on && 'on'}>
            <div className="top">
                <h1>
                    <a href="">woothic</a>
                </h1>
            </div>
            <div className="btm inner flex">
                <nav className="gnb">
                    <ul className="flex">
                        <li><Link to='/'>ABOUT</Link></li>
                        <li><Link to='/'>SHOP</Link></li>
                        <li><Link to='/'>COMMUNITY</Link></li>
                        <li><Link to='/'>SPACE</Link></li>
                        <li><Link to='/'>REVIEW</Link></li>
                    </ul>
                </nav>
                <ul className="icon flex">
                    <li><Link to='/'><i><AiOutlineSearch /></i></Link></li>
                    <li><Link to='/'><i><AiOutlineShoppingCart /></i></Link></li>
                    <li><Link to='/'><i><AiOutlineUser /></i></Link></li>
                </ul>
            </div>


        </Head>
    )
}