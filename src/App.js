import styled from 'styled-components';

import './App.css';
import FilmList from './components/FilmList';
import Logo from './Assets/LOGO.svg'


function App() {

  const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    max-width: 100%;
  `
  
  

  return (
    <div className="App">
      <LogoWrapper><img src={Logo} alt="Logo" /></LogoWrapper>
      <FilmList />
    </div>
  );
}

export default App;
