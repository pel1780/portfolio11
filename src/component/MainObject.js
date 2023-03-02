import styled from "styled-components"

const MObject = styled.section`

`

export const MainObject = ({ ItmData }) => {
    const Objectlist = ItmData.filter(it => it.cate == 'OBJECT');
    return (
        <MObject className="sec">
            <div className="inner">
                <h2>Nature Fragrance</h2>
                <p>기억 속 자연을 일상에서 만나보세요.</p>
                <ul>{
                    Objectlist.map(it => {
                        console.log(it.id)
                        return (
                            <li key={it.id}>
                                {it.sale && <div>{it.sale}</div>}
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/img/itm_${it.id <= 9 ? '0' + it.id : it.id}.jpg`} alt="" />
                                </figure>
                                <strong>{it.tit}</strong>
                                <p>{it.desc}</p>
                                {it.sale_price && <em>{it.sale_price}</em>}
                                <span className={it.sale_price ? null : 'price'}>{it.price}</span>
                            </li>
                        )
                    })
                }</ul>
            </div>
        </MObject>
    )
}