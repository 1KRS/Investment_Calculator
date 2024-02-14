// import logo from './logo.svg';
// import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header.jsx';
import OutputTable from './components/OutputTable.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = inputs.duration >= 1;

  const handleChange = (keyName, newValue) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [keyName]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput inputs={inputs} handleChange={handleChange} />
      {!inputIsValid && (
        <h5 className="error-message">Please provide a duration greater than zero</h5>
      )}
      {inputIsValid && <OutputTable inputs={inputs} />}
    </>
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
