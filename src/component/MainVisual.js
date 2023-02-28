import Slider from "react-slick";
import styled from "styled-components";

import bg01 from '../img/mainVisual_bg01.jpg';
import bg02 from '../img/mainVisual_bg02.jpg';
import bg03 from '../img/mainVisual_bg03.jpg';
import bg04 from '../img/mainVisual_bg04.jpg';

const MVisual = styled.section`
    position: relative;
    height: 100vh;
    .itm{
        position: relative;
        height: 100vh;
        color: #fff;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
        .inner{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translate(0, -50%);
            text-align: center;
            h2{
                font-size: 50px;
                margin-bottom: 20px;
            }
            p{
                font-size: 20px;
            }
        }
    }
    .itm01{
        background: url(${bg01}) no-repeat fixed center center/cover;
    }
    .itm02{
        background: url(${bg02}) no-repeat fixed center center/cover;
    }
    .itm03{
        background: url(${bg03}) no-repeat fixed center center/cover;
    }
    .itm04{
        background: url(${bg04}) no-repeat fixed center center/cover;
    }
    .scroll_down{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
        color: #fff;
    }
`


export const MainVisual = ({ Slider, MVData }) => {
    return (
        <MVisual>
            <Slider arrows={false}>
                {
                    MVData.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <h2>{it.tit}</h2>
                                    <p>{it.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="scroll_down">SCROLL DOWN</div>
        </MVisual >
    )
}