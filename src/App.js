
import './css/common.css';
import './css/basic.css';
import styled from 'styled-components';
import { Header } from './component/Header';
import { MainVisual } from './component/MainVisual';
import { MainSale } from './component/MainSale';
import { MainMemo } from './component/MainMemo';
import { MainObject } from './component/MainObject';
import { Footer } from './component/Footer';

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

// import { MVData, ItmData, FootData } from './data/data';
import { ToTop } from './component/ToTop';
import { useState, useEffect } from 'react';
import { MainIncense } from './component/MainIncense';

const Wrap = styled.div`
  position: relative;
`

function App() {
  const [itm, setItm] = useState([]);
  const getItm = async () => {
    const itms = await fetch('https://pel1780.github.io/data/data/data.json').then(r => r.json());
    // console.log(itms.ItmData);
    setItm(itms);
  }
  useEffect(() => {
    getItm()
  }, []);
  // console.log(itm);
  return (
    <Wrap>
      <Header />
      <main>
        <MainVisual Slider={Slider} MVData={itm.MVData} />
        <MainSale ItmData={itm.ItmData} />
        <MainMemo ItmData={itm.ItmData} />
        <MainObject ItmData={itm.ItmData} />
        <MainIncense ItmData={itm.ItmData} />
      </main>
      <Footer FootData={itm.FootData} />
      <ToTop />
    </Wrap>
  );
}

export default App;
