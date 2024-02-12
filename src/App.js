// import logo from './logo.svg';
import styled from 'styled-components';

function App() {
  return (
    <MainWrapper className="App">
      <h1>🇬🇷🇬🇷🇬🇷</h1>
      <h1>Ούλε τε και μάλα χαίρε!</h1>
      <h1>🤩</h1>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default App;
