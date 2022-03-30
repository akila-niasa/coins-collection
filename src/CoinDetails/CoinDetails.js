import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const [details,setDetails]=useState({})
    const [load,setLoad]=useState(false)
    const {id}=useParams()
    useEffect(()=>{
        setLoad(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
        setLoad(false)
    },[id])
    return (
        <>
        {
            load?(<Spinner></Spinner>):(
                <div>
           <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
            <div className='order-2 md:order-1'>
              <h1 className='text-3xl'>General Info:</h1>
              <hr />
              <h1>Coin Name: {details.name}</h1>
              <h1>Market Cap Rank: {details.market_cap_rank}</h1>
              <h1>
                Origin:{' '}
                {details.country_origin ? details.country_origin : 'Not Available'}
              </h1>
              <h1>Contract Address: {details.contract_address}</h1>
              <h1>Hashing Algorithm: {details.hashing_algorithm}</h1>
              <h1>Genesis Date: {details.genesis_date}</h1>
              <h1>Last Updated: {details.last_updated}</h1>

              <h1 className='text-3xl mt-4'>Scores:</h1>
              <hr />
              <h1>Community Score: {details.community_score}</h1>
              <h1>Developer Score: {details.developer_score}</h1>
              <h1>Liquidity Score: {details.liquidity_score}</h1>
              <h1>Public Interest Score: {details.public_interest_score}</h1>
            </div>
            <div className='flex order-1 md:order-2 justify-center items-center'>
              <img src={details.image?.large} alt='coinImg' />
            </div>
          </div>
        </div>
        </div>
            )
        }
        </>
    );
};

export default CoinDetails;