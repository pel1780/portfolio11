import styled from "styled-components"

const Foot = styled.footer`
background: rgba(68, 49, 33, 0.5);
padding: 60px 0;
font-size: 14px;
ul{
    justify-content: center;
    margin-bottom: 15px;
    li~li{
        &::before{
            content: "";
            display:inline-block;
            width: 1px;
            height: 10px;
            background: #666;
            margin: 0 15px;
        }
    }
}
address{
    text-align: center;
}
`

export const Footer = ({ FootData = [] }) => {
    const newArry = Object.values(FootData);

    return (
        <Foot>
            <div className="inner">
                <ul className="top flex">
                    {
                        newArry.slice(0, 5).map((it, idx) => <li key={idx}>{it}</li>)
                    }
                </ul>
                <ul className="btm flex">
                    {
                        newArry.slice(5, 8).map((it, idx) => <li key={idx}>{it}</li>)
                    }
                </ul>
                <address>&copy; 2021 woothic. All rights reserved.</address>
            </div>
        </Foot>
    )
}