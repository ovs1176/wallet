import React from 'react'
import wallet from "../../asset/images/icon_wallet.png"
import settings from "../../asset/images/icon_settings.png"
import notification from "../../asset/images/icon_notification.png"
import explore from "../../asset/images/icon_explore_coins.png"
import FooterIcon from '../ReusableComponents/FooterIcon'


let arrayIcon =[wallet,settings,notification,explore]



const Footer = () => {
    return (
        <div className='container-fluid mt-3 p-0 m-0'>
            <div className='row main-footer-row'>
                <FooterIcon imageValue ={arrayIcon} classNames=""/>

            </div>


        </div>
    )
}

export default Footer