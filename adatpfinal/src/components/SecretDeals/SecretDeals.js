import React from 'react'
import './SecretDeals.scss'
import footerSubscribe from 'assets/images/footerSubscribe.png';

const SecretDeals = () => (
    <div className='contentImgfinal'>
        <img src={footerSubscribe} alt='' className='imgfinal' />
        <div className='sectionDeals'>
            <h1 className='titleDeals'>Save up to 50% off your next trip</h1>
            <h2 className='subTitleDeals'>Subscribe to unlock our secret deals</h2>
            <input className='inputDeals' type="text" value="  Type your e-mail here"></input>
            <button className='buttonDeals'>GET DEALS</button>
        </div>
    </div>
)
export default SecretDeals       