import './Css/App.css';
import './Css/Footer.css';
import './Css/Lumsum.css';
import './Css/Common.css';
import './Css/Stock.css';
import './Css/HeatMap.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Lumsum from './component/Lumsum';
import StockNav from './component/StockNav';
import HeatMap from './component/HeatMap';
import {useState} from 'react';

function App() {
  const [lumsum,setLumsum] = useState({display:""});
  const [heatMap,setHeatMap] = useState({display:"none"});
  const Navigation = (navItem) =>{
    if (navItem === "Finance"){
      setLumsum({display:""});
      setHeatMap({display:"none"});
    }
    else if(navItem === "Stocks" ){
      setLumsum({display:"none"});
      setHeatMap({display:"block"});
    }
  } 
  return (
    <>
    <Navbar Navigation = {Navigation} />
    <StockNav direction="right"/>
    <Lumsum display= {lumsum} />
    <HeatMap display= {heatMap} />
    <StockNav direction="left"/>
    <Footer/>
    </>
  );
}

export default App;
