import '@noonnu/noto-serif-kr';
import './css/common.css';
import './css/basic.css';
import { Header } from './component/Header';
import styled from 'styled-components';


const Wrap = styled.div`
  font-family: NotoSerifKR;
`

function App() {
  return (
    <Wrap>
      <Header></Header>
    </Wrap>
  );
}

export default App;
