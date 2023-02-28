import '@noonnu/noto-serif-kr';
import './css/common.css';
import './css/basic.css';
import { Header } from './component/Header';
import styled from 'styled-components';
import { MainVisual } from './component/MainVisual';

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { MVData } from './data/data';

const Wrap = styled.div`
  font-family: NotoSerifKR;
  height: 200vh;
  background: #ddd;
`

function App() {
  return (
    <Wrap>
      <Header></Header>
      <MainVisual Slider={Slider} MVData={MVData} />
    </Wrap>
  );
}

export default App;
