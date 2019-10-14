import React from 'react'
import Feature from 'components/Feature/Feature';
import './Home.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import Footer from 'components/Footer/Footer';
import SearchBar from 'components/SearchBar/SearchBar';
import { SEARCHINPUT_RELATIONS, SEARCHINPUT_POSITIONS, SEARCHINPUT_DIMENSIONS } from 'components/SearchInput/SearchInput';
import InputRadio from 'components/InputRadio/InputRadio';

const Home = () => (
    <div className='general'>
        <SearchHeader/>
        <SearchBar relation={SEARCHINPUT_RELATIONS.JOINED} parent="home"/>
        <InputRadio/>
        <section className='FeatureSection'>
            <Feature icon={faCheckCircle} title={'Explore the World'} text={'Start to discrover. We will help you to visit any place you can imagine'} />
            <Feature icon={faCheckCircle} title={'Gifts & Rewards'} text={'Get even more from our service. Spend less and travel more'} />
            <Feature icon={faCheckCircle} title={'Best prices'} text={'We are comparing hundreds travel websites to find best price for you'} />
            <Feature icon={faCheckCircle} title={'27/7 Support'} text={'Contact us anytime, anywhere. We will resolve any issues ASAP'} />
        </section>
        <Footer/>
    </div>

);

export default Home