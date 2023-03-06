import Slider from "react-slick";
import styled from "styled-components";

const MVisual = styled.section`
    position: relative;
    height: 100vh;
    .itm {
        position: relative;
        height: 100vh;
        color: #fff;
        
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);

        &.itm01 {
            background: url(${process.env.PUBLIC_URL}/img/mainVisual_bg01.jpg) no-repeat  center center/cover;
        }


        &.itm02 {
            background: url(${process.env.PUBLIC_URL}/img/mainVisual_bg02.jpg) no-repeat  center center/cover;
        }

        &.itm03 {
            background: url(${process.env.PUBLIC_URL}/img/mainVisual_bg03.jpg) no-repeat  center center/cover;
        }

        &.itm04 {
            background: url(${process.env.PUBLIC_URL}/img/mainVisual_bg04.jpg) no-repeat  center center/cover;
        }
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

    .scroll_down{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
        color: #fff;
    }
`

export const MainVisual = ({ Slider, MVData = [] }) => {
    const option = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true
    }
    return (
        <MVisual>
            <Slider {...option}>
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