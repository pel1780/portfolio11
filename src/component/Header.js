import styled from "styled-components"

const Head = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
`

export const Header = () => {
    return (
        <Head className="header">
            <div className="top">
                <h1>
                    <a href="">woothic</a>
                </h1>
            </div>
            <div className="btm inner">
                <nav className="gnb">
                    <ul>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SHOP</a></li>
                        <li><a href="">COMMUNITY</a></li>
                        <li><a href="">SPACE</a></li>
                        <li><a href="">REVIEW</a></li>
                    </ul>
                </nav>
                <ul className="icon">
                    <li><a href=""><i></i></a></li>
                    <li><a href=""><i></i></a></li>
                    <li><a href=""><i></i></a></li>
                </ul>
            </div>


        </Head>
    )
}