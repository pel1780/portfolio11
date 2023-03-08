import styled from "styled-components"
import { Link } from "react-router-dom";

const MIncense = styled.section`
background: rgba(68, 49, 33, 0.1);
 h2{
        font-size: 24px;
        margin-bottom: 20px;
    }
    p{
        font-size: 15px;
        margin-bottom: 50px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        row-gap: 50px;

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
                text-decoration: line-through;
                margin-left: 10px;
                &.price{
                    text-decoration: none;
                    margin-left: 0;
                }
            }
            em{
                font-size: 15px;
            }
        }
    }
`

export const MainIncense = ({ ItmData = [] }) => {
    const Incenselist = ItmData.filter(it => it.cate.includes('INCENSE'));
    // console.log(Incenselist);
    return (
        <MIncense className="sec">
            <div className="inner">
                <h2>Nature Fragrance</h2>
                <p>기억 속 자연을 일상에서 만나보세요.</p>
                <ul>
                    {
                        Incenselist.map((it) => {
                            return (
                                <li key={it.id}>
                                    <Link to='/'>
                                        {it.sale && <div>{it.sale}</div>}
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + `/img/itm_${it.id <= 9 ? '0' + it.id : it.id}.jpg`} alt="" />
                                        </figure>
                                        <strong>{it.tit}</strong>
                                        <p>{it.desc}</p>
                                        {it.sale_price && <em>{it.sale_price}</em>}
                                        <span className={it.sale_price ? null : 'price'}>{it.price}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </MIncense>
    )
}