// import logo from './logo.svg';
// import styled from 'styled-components';
import Header from './components/Header.jsx';
import OutputTable from './components/OutputTable.jsx';
import UserInput from './components/UserInput.jsx';


function App() {
  return (
    <main className="App">
      <Header />
      <UserInput />
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
