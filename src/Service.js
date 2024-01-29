import './App.css';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import MainService from './components/mainServiceComponent';


function Service() {
  return (
    <div>
        <HeaderComponent/>
        <MainService/>
        <FooterComponent/>
    </div>
  );
}

export default Service;