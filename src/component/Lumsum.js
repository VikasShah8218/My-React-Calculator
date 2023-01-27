import React ,{useState} from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto' //very very important to view chart

export default function Lumsum(){
    const [chartData,setChartdata] = useState(
      {
        labels: [],
        datasets: [{
          label: 'Growth',
          data:[] ,
          borderWidth: 2,
            cubicInterpolationMode: 'monotone',
          
        }]
      }
    );
    const [ppl,setPpl] = useState();
    const [roe,setRoe] = useState();
    const [tm,setTm] = useState();
    const [total,settl] = useState();
    const [totalIntrest,settotalIntrest] = useState();
    const [answer,setAnswer] = useState("");
    const calculation  = () => {
      let principle = parseInt(ppl);
      let intrust = parseInt(roe);
      let time= parseInt(tm);
      let a = parseFloat(((principle*((1+ (intrust/100)))**time)-principle).toFixed(2));
      let z = ((a/principle)*100).toFixed(2).toString();
      let l = (a+principle).toFixed(2);
      setAnswer(a);
      settotalIntrest(z+"%");
      settl(l);
      let timeData = [];
      let calData = [];
      for (let e = 1; e <= time; e++) {
          timeData.push(e);
          let xx = parseFloat(((principle*((1+ (intrust/100)))**e)).toFixed(1));
          calData.push(xx);
      }
      setChartdata({
        labels:timeData ,
        datasets: [{
          label: 'Growth',
          data:calData ,
          borderWidth: 2,
            cubicInterpolationMode: 'monotone',
          
        }]
      })
    };
    const pplChange = (event) =>{
      setPpl(event.target.value);
    }
    const roeChange = (event) =>{
      setRoe(event.target.value);
    }
    const tmChange = (event) =>{
      setTm(event.target.value);
    }
   const clearData = () =>{
    setAnswer("");
    setPpl("");
    setRoe("");
    setTm("");
    settotalIntrest("")
    settl("")
    setChartdata("")

   }
     
    return(
    <>
    <div className="lumsum">
        <div className="lumsum-content"  >
        <h3>Lumsum Calculator</h3>
        <div className="input">
        <label htmlFor="principle">Principle Amount</label>
        <input value={ppl}  onChange={pplChange} type="number" id="principle" />
        </div>
        <div className="input">
        <label htmlFor="principle">Rate Of Intrest/Year</label>
        <input  value={roe} onChange={roeChange} type="number" id="principle" />
        </div>
        <div className="input">
        <label htmlFor="principle">Time Period (Year)</label>
        <input value={tm} onChange={tmChange} type="number" id="principle" />
        </div>
        <div className="lumsumOutput">
          <h3 >
          <span className="textData0"> Benefit : </span><span className="textData"> {answer}</span> 
            <br />
          <span className="textData0">  Intrest :</span><span className="textData"> {totalIntrest}</span> 
            <br />
          <span className="textData0"> Value : </span><span className="textData"> {total}</span> 
          </h3>
        </div >
        <div className='calButton'>
        <button style={{marginRight:"10px"}} onClick={calculation}  type="button">Claculate Intrest</button>
        <button onClick={clearData}  type="button">Clear Data</button>
        </div>
        </div>
        <div className="lumsum-chart" >
        <Line data = {chartData}
        options={
             {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
        }/>
        </div>
    </div>
    </>
    )
}