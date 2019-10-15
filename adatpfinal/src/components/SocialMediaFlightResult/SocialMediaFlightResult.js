import React from 'react'
import './SocialMediaFlightResult.scss';
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SocialMedia from 'components/SocialMedia/SocialMedia'

const SocialMediaFlightResult = () => (
    <section className='sectionFooterFlightResult'>
        <ul className='Media'>
            <li className='MediaContainer'><a href='#' ><SocialMedia icon={faFacebookF} className='MediaIcon' /></a></li>
            <li className='MediaContainer'><a href='#' ><SocialMedia icon={faTwitter} className='MediaIcon'/></a></li>
            <li className='MediaContainer'><a href='#' ><SocialMedia icon={faGoogle} className='MediaIcon'/></a></li>
            <li className='MediaContainer'><a href='#' ><SocialMedia icon={faInstagram} className='MediaIcon'/></a></li>
        </ul>
        <div className='Copyright'>Copyright © 2019 <a href='#' className='footerAdantrip'>Adantrip</a> All rights reserved.</div>
    </section>
)

export default SocialMediaFlightResult