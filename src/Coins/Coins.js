import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import CoinDetails from '../CoinDetails/CoinDetails';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins,setCoins]=useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res=>res.json())
        .then(data=>setCoins(data))
        setLoad(false)
    },[])
    return (
        <> 
        {
            load?(<Spinner></Spinner>):(
                <div>
            <h2 className='text-3xl font-serif'>coins collection</h2>
            <p><small>Total coins:{coins.length}</small></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {
                coins.map(coin=><CoinCard key={coin.id} coin={coin}></CoinCard>)
            }
            </div>
        </div>
            )
        }
        </>
    );
};

export default Coins;