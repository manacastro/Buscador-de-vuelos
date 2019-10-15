import React from 'react';
import adantripBlack from 'assets/images/adantripBlack.png';
import './FlightResultFooter.scss';
import SecretDeals from 'components/SecretDeals/SecretDeals';
import SocialMediaFlightResult from 'components/SocialMediaFlightResult/SocialMediaFlightResult';


const FlightResultFooter = () => (
    <>
        <div className='flightResultFooter'>
            <div className='footerIso'>
                <a className='contentIso'>
                    <img src={adantripBlack} alt='' className='iso' />
                </a>
                <p className='textIso'>Curabitur magnis cursus nam tempor quam risus urna mattis porttitor lorem urna dolor vitae hac</p>
                <p className='textIso'>Ultrices lacinia aliquet euismod aptent netus dis praesent magna elit ultricies malesuada volutpat amet lacus</p>

            </div>
            <div className='ulFooter'>
                <ul className='linksNabFooter' >
                    <h1 className='title'>Travel Mate</h1>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Abaut Travel Mate</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'> Mobile App</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Customer Support</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Advertising</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Jobs</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Privacy Policy</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Terms of Use</a>
                    </li>
                </ul>
                <ul className='linksNabFooter'>
                    <h1 className='title'>Explore</h1>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Countries</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Regions</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Cities</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Districs</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Airports</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'> Hotels</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Places of Interest</a>
                    </li>
                </ul>
                <ul className='linksNabFooter'>
                    <h1 className='title'>Book</h1>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Apartments</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Resorts</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Villas</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Hostels</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>B&Bs</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Guesthouses</a>
                    </li>
                    <li className='linksFooter'>
                        <a href='#' className='linkNameFooter'>Hotel Chains</a>
                    </li>
                </ul>
            </div>
            <SecretDeals />
        </div >
        <SocialMediaFlightResult/>
    </>
)
export default FlightResultFooter