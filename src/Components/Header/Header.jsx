import React from 'react'
 import backBtn from "../../asset/images/icon_back.png"
 import moreBtn from "../../asset/images/icon_more.png"
import HeaderImage from '../ReusableComponents/HeaderImage'


const Header = () => {
    return (

         
        <div className='row  main-header    '> 
            <HeaderImage imagePath={backBtn} classProperties={""} />  
            <div className='col-6 text-center'>
                <h4>
                    Bitcoin Wallet
                </h4> 
            </div>
            <HeaderImage imagePath={moreBtn} classProperties={"rounded float-end mt-1"}/>

        </div>



    )
}

export default Header