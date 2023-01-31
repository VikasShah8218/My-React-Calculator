import './Css/App.css';
import './Css/Footer.css';
import './Css/Lumsum.css';
import './Css/Common.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Lumsum from './component/Lumsum.js';

function App() {
  return (
    <>
    <Navbar/>
    <Lumsum />
    <Footer/>
    </>
  );
}

export default App;
