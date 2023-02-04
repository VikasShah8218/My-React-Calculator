import './Css/App.css';
import './Css/Footer.css';
import './Css/Lumsum.css';
import './Css/Common.css';
import './Css/Stock.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Lumsum from './component/Lumsum';
import Stock from './component/Stock';

function App() {
  return (
    <>
    <Navbar/>
    <Stock />
    <Lumsum />
    <Footer/>
    </>
  );
}

export default App;
