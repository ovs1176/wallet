import React, { useState } from 'react'
import "./dashboard.css"
import BuySellBox from "../ReusableComponents/BuySellBox"
import doller from "../../asset/images/icon_dollar.png"
import bitcoin from "../../asset/images/icon_bitcoin.png"
import dounOpenBtn from "../../asset/images/icon_arrow_down_detailed_.png"
import DashBoardGraph from './DashBoardGraph'


const DashboardContainer = () => {


  const [rotateStatus, setRotateStatus] = useState(false)
  const [rotateStatusNone, setRotateStatusNone] = useState(false)



  const DownBtnFun = () => {
    setRotateStatus(o => !o)

    setTimeout(() => {
      setRotateStatusNone(o => !o)
    }, 700);


  }

  return (
    <div className="container-fluid main-dashboard mt-4 pe-4 ps-4">
      <div className='row container main-bitcoin-row  '>

        <div className='col-6 d-flex main-bitcoin-col '>
          <BuySellBox imagePath={bitcoin} text={""} classNames={"bitcoin-doller-color"} />
          <p className='bitcoin-text'>
            Bitcoin
          </p>
        </div>
        <div className='col-6 btc-col text-end '>
          <p className=''>BTC</p>
        </div>
        <div className='col-12 btc-col-value ms-3'>
          3.5290920 BTC
        </div>

        <div className='col-6 main-usd-col'>
          $19.153 USD
        </div>
        <div className='col-5 main-usd-col-per text-end p-0'>
          <p>
            -2.32%
          </p>
        </div>

        <div className='col-12 down-btn mb-3'>
          <img src={dounOpenBtn} height={10} width={30} className={!rotateStatus ? 'roatetBtnFalse' : "roatetBtnTrue"} onClick={DownBtnFun} />
        </div>
      </div>

      {rotateStatusNone && <DashBoardGraph rotateStatus={rotateStatus} />}

      <div className={`${rotateStatus ? 'buy-smoothTrue' : "buy-smoothFalse"} row justify-content-around buy-sell-main-row`}>
        <BuySellBox imagePath={doller} text={"Buy BTC"} classNames={"buy-doller-color "} bgcolor={"bg-light"} />
        <BuySellBox imagePath={doller} text={"Sell BTC"} classNames={"sell-doller-color"} bgcolor={"bg-light"} />
      </div>


    </div>

  )
}

export default DashboardContainer