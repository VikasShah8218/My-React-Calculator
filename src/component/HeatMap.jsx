import Reat, { useState ,useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto' //very very important to view chart
import nseData from './NseData.json'
import nseStockImg from "./NseDataImage.json"

export default function HeatMap(props){
    const [days30,setDays30] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [days30Sym,setDays30sym] = useState([1,2,3,4,5,6,7,8,9,10]);
    let days30A = [];
    let days30SymA  = [];
    nseData.data.map(function(stock,i){
        days30A.push(stock.perChange30d);
        days30SymA.push((stock.symbol).length<=5?stock.symbol:(stock.symbol).slice(0,5));
    });
    
    useEffect(()=>{setDays30(days30A);setDays30sym(days30SymA);},[])

   

    return(
    <div style={props.display}>
        <div className="Heat-map-box" >
            <div className="heat-map">
                {nseData.data.map(function(stock,i){
                    let color = {backgroundColor:'#ff000063'};
                    let aero = 'down'
                    if (parseFloat(stock.change)>0){
                      color = {backgroundColor:"#00800066"};
                      aero = 'up';
                    }
                return(<div className="stocks" kry={i} style={color}>
                <div className="name"><img style={{borderRadius:"50%"}} src={process.env.PUBLIC_URL+`/stock/${(nseStockImg[stock.symbol])}`}  /> {(stock.symbol).length<=5?stock.symbol:(stock.symbol).slice(0,5)}</div>
                <div className="price">{stock.lastPrice}</div>
                <div className="pChange">{stock.pChange}%  <i className={`fa-solid fa-arrow-${aero}`}></i></div>
                </div>)
                })}
            </div>
            {/* the heat-chart style always in 1:2 ratio width height */}
            <div className="heat-chart" style={{width:"630px",height:"360px"}}>
            <Bar width={"200%"} height={"100%"}  data =  {{
            labels: days30Sym,
            datasets: [{
            label: 'Growth',
            data: days30 ,
            borderWidth: 2,
            cubicInterpolationMode: 'monotone',
            backgroundColor:['rgba(255, 0, 0, 0.5)','rgba(0, 128, 0, 0.5)'],
            borderColor:["rgba(255,255,255,1)"]
            
            }]
        }}
            options={
             {
                plugins: {
                title: {
                    display: true,
                    text: 'Nifty 50 Stocks 30 Days Return in %',
                 }
               },
               tooltip: {
                enabled: false,
                position: 'nearest',
              }

             }
            }/>
            </div>
        </div>
    </div>
    )
}