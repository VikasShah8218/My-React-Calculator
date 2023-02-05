import React from 'react'
export default function Stock(){
    return(
    <>
    <marquee className="Stock-present" behavior="scroll" direction="right">
        <div className='main-Stock-present'>
        <div className="stocks">
            <div className="stocklogo"><img src={process.env.PUBLIC_URL+"/stock/reliance.svg"} /></div>
            <div className="stockName"> RELIANCE </div>
            <div className="dot">.</div>
            <div className="stockPrice"> 2330.00 </div>
            <div className="price-change"style={{color:"green"}}>+3.05</div>
            <div className="price-percent"style={{color:"green"}}>(0.13% <i class="fa-solid fa-arrow-up"></i>)</div>
            <div className="stock-end"></div>
        </div>
        <div className="stocks">
            <div className="stocklogo"><img src={process.env.PUBLIC_URL+"/stock/asian-paints.svg"} /></div>
            <div className="stockName"> ASIANPAINT </div>
            <div className="dot">.</div>
            <div className="stockPrice"> 2756.90 </div>
            <div className="price-change" style={{color:"green"}}>+51.25</div>
            <div className="price-percent" style={{color:"green"}}>(1.89% <i class="fa-solid fa-arrow-up"></i>)</div>
            <div className="stock-end"></div>
        </div>
        <div className="stocks">
            <div className="stocklogo"><img src={process.env.PUBLIC_URL+"/stock/hdfc-bank.svg"} /></div>
            <div className="stockName"> HDFCBANK </div>
            <div className="dot">.</div>
            <div className="stockPrice"> 1658.25 </div>
            <div className="price-change"style={{color:"green"}}>+54.90</div>
            <div className="price-percent" style={{color:"green"}}>(3.42% <i class="fa-solid fa-arrow-up"></i>)</div>
            <div className="stock-end" ></div>
        </div>
        <div className="stocks">
            <div className="stocklogo"><img src={process.env.PUBLIC_URL+"/stock/hcl-technologies.svg"} /></div>
            <div className="stockName"> HCLTECH </div>
            <div className="dot">.</div>
            <div className="stockPrice"> 1145 </div>
            <div className="price-change">-4.60</div>
            <div className="price-percent">(0.40% <i class="fa-solid fa-arrow-down"></i>)</div>
            <div className="stock-end"></div>
        </div>
        <div className="stocks">
            <div className="stocklogo"><img src={process.env.PUBLIC_URL+"/stock/infosys.svg"} /></div>
            <div className="stockName"> INFY </div>
            <div className="dot">.</div>
            <div className="stockPrice"> 1,595.65 </div>
            <div className="price-change" style={{color:"green"}}>+11.90 </div>
            <div className="price-percent" style={{color:"green"}}>(0.75% <i class="fa-solid fa-arrow-up"></i>)</div>
            <div className="stock-end"></div>
        </div>
        </div>
    </marquee>
    </>       
    );
}
