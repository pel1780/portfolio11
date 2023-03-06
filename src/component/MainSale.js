import { Link } from "react-router-dom"
import styled from "styled-components"

const MSale = styled.section`
    h2{
        font-size: 20px;
        margin-bottom: 50px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;

        li{
            position: relative;

            div{
                position: absolute;
                inset: 10px auto auto 10px;
                font-size: 13px;
                font-weight: 100;
                color: #fff;
                background: rgba(68, 49, 33, 0.7);
                padding: 5px 12px;
                z-index: 9;
            }
            figure{
                overflow: hidden;
                margin-bottom: 20px;
                img{
                    transform: scale(1.1);
                }
            }
            strong{
                display: block;
                margin-bottom: 10px;
                font-size: 18px;
            }
            p{
                font-size: 15px;
                margin-bottom: 10px;
            }
            span{
                font-size: 15px;
                em{
                    margin-left: 10px;
                    text-decoration: line-through;
                }
            }
        }
    }
`
export const MainSale = ({ ItmData = [] }) => {
    const Salelist = ItmData.filter(it => it.sale)
    return (
        <MSale className="sec">
            <div className="inner">
                <h2>지금 가장 인기있는 상품을 먼저 살펴보세요.</h2>
                <ul>{
                    Salelist.slice(2, 6).map(it => {
                        // console.log(it.id)
                        return (
                            <li key={it.id}>
                                <Link to='/'>
                                    <div>{it.sale}</div>
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + `/img/itm_${it.id <= 9 ? '0' + it.id : it.id}.jpg`} alt="" />
                                    </figure>
                                    <strong>{it.tit}</strong>
                                    <p>{it.desc}</p>
                                    <span>{it.sale_price}<em>{it.price}</em></span>
                                </Link>
                            </li>
                        )
                    })
                }</ul>
            </div>
        </MSale>
    )
}