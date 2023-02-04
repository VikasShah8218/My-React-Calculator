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
    
    const [sip,setSip] = useState();
    const [sipRoe,setSipRoe] = useState();
    const [sipTm,setSipTm] = useState();
    const [sipInvested,setSipInvested] =  useState();
    const [sipIntrest,setSipIntrest] = useState();
    const [sipAnswer,setSipAnswer] = useState();
    
    const [displayLumsun,setDisplayLumsum] = useState({display:"block"})
    const [displaySip,setDisplaySip] = useState({display:"none"})

    const [checkbox,setCheckBox] = useState("");
    const [sipText,setSipText] = useState("Monthly Sip");
    const checkBoxFun = () =>{
      if (checkbox === ""){
        setCheckBox("checked");
        setSipText("Yearly SIP");
      }
      else{
        setCheckBox("");
        setSipText("Monthly SIP");

      }
    }
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
    
   const sipPplChange = (event) =>{
      setSip(event.target.value);
    }
   const sipRoeChange = (event) =>{
      setSipRoe(event.target.value);
    }
   const sipTmChange = (event) =>{
      setSipTm(event.target.value);
    }
   const SipClearData = () =>{
      setSip("");
      setSipAnswer("");
      setSipIntrest("");
      setSipRoe("");
      setSipTm("");
      setSipInvested("");
      setChartdata("");
    }
   const Sipcalculation = () =>{
    let sipP  = parseInt(sip);
    let tp = parseInt(sipTm);
    let roi = parseInt(sipRoe);

    let maturity = (parseFloat(sipP));
    let months = [];
    let intrest_earn = [];
    let month_intrest = (parseFloat((roi/12)/100));
    let no_of_it = tp*12;
    if (checkbox==="checked"){
      month_intrest = (parseFloat((roi)/100));
      no_of_it = tp;
    }

    for (let index = 1; index < (no_of_it+1) ; index++) {
      maturity = maturity + (parseFloat(month_intrest*maturity));
      months.push(index);
      if (no_of_it !== index){
        maturity += sipP
      }
      intrest_earn.push(parseInt(maturity))
    }

    let sipTotal = intrest_earn[intrest_earn.length - 1];
    let sipInvestedMoney = sipP*intrest_earn.length
    let sipReturnPercent = (((sipTotal-sipInvestedMoney)/sipInvestedMoney)*100).toFixed(2);

    setSipIntrest(sipReturnPercent + "%")
    setSipInvested(sipInvestedMoney);
    setSipAnswer(sipTotal);

    // chart set
    setChartdata({
      labels:months ,
      datasets: [{
        label: 'Growth',
        data:intrest_earn ,
        borderWidth: 2,
          cubicInterpolationMode: 'monotone',
        
      }]
    })


   }
   const toggleDisplay2 = () =>{
        setDisplayLumsum({display:"none"});
        setDisplaySip({display:"block"});
        console.log("Success");
   }
   const toggleDisplay1 = () =>{    
        setDisplayLumsum({display:"block"});
        setDisplaySip({display:"none"});
        console.log("Error");
   }
    return(
    <>
    <div className="lumsum">
        <div className="lumsum-content"  >
          <div className="lumsum-button-div"  >
            <button className='lumsum-button' onClick={toggleDisplay1}> <i className="fa-solid fa-arrow-up-right-dots"></i> Lumsum </button>
            <button className='lumsum-button' onClick={toggleDisplay2}> <i className="fa-solid fa-bolt"></i> Sip </button>
          </div>
          <div className='lumsum-input-area' style={displayLumsun}>
            <div className='devider'></div>
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
          <div className='sip-input-area' style={displaySip} >
            <div className='devider'></div>
            <div className="input">
              <label htmlFor="principle">{sipText} </label>
              <div style={{fontSize:"13px"}}>
              <input type="checkbox" onClick={checkBoxFun} id="year-sip" name="year-sip"  />
              <label htmlFor="year-sip">Yearly</label>
              </div>
              <input value={sip}  onChange={sipPplChange} type="number" id="principle" />
            </div>
            <div className="input">
              <label htmlFor="principle">Rate Of Intrest/Year</label>
              <input  value={sipRoe} onChange={sipRoeChange} type="number" id="principle" />
            </div>
            <div className="input">
              <label htmlFor="principle">Time Period (Year)</label>
              <input value={sipTm} onChange={sipTmChange} type="number" id="principle" />
            </div>
            <div className="lumsumOutput">
                <h3 >
                  <span className="textData0"> Total SIP : </span><span className="textData"> {sipInvested} </span> 
                    <br />
                  <span className="textData0">  Intrest :</span><span className="textData"> {sipIntrest}</span> 
                    <br />
                  <span className="textData0">Net Value : </span><span className="textData">{sipAnswer}</span> 
                </h3>
            </div >
            <div className='calButton'>
              <button style={{marginRight:"10px"}} onClick={Sipcalculation}  type="button">Claculate Intrest</button>
              <button onClick={SipClearData}  type="button">Clear Data</button>
            </div>
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