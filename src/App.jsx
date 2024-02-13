// import logo from './logo.svg';
// import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header.jsx';
import OutputTable from './components/OutputTable.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [inputs, setInputs] = useState({
    initial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });

  const handleChange = (keyName, newValue) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [keyName]: newValue,
      };
    });
  };

  return (
    <main className="App">
      <Header />
      <UserInput
        inputs={inputs}
        setInputs={setInputs}
        handleChange={handleChange}
      />
      <OutputTable />
    </main>
  );
}

// const Main = styled.main`
//   h1 {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

export default App;
