
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

import { MVData, ItmData, FootData } from './data/data';

const Wrap = styled.div`

`

function App() {
  return (
    <Wrap>
      <Header />
      <main>
        <MainVisual Slider={Slider} MVData={MVData} />
        <MainSale ItmData={ItmData} />
        <MainMemo ItmData={ItmData} />
        <MainObject ItmData={ItmData} />
      </main>
      <Footer FootData={FootData} />
    </Wrap>
  );
}

export default App;
