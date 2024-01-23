import './App.css';
import FooterComponent from './components/footerComponent';
import HeaderComponent from './components/headerComponent';
import MainComponent from './components/mainComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
