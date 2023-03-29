import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import { Link } from "react-router-dom";


// Still inside the component, we will use useEffect similarly to how we did in Step 1 
//except now, we are passing in {symbol} in the closing [] in useEffect(). 
//This means that now instead of useEffect() running on every render, it will now run whenever the symbol we pass in changes. 
//So every time we give a new coin symbol to get the info for, useEffect() will run.

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
                API_KEY
            );
            const json = await response.json();
            setPrice(json);
        };
        getCoinPrice().catch(console.error);

    }, [symbol]);
    return (
        <div>
            {price ? (
                <Link
                to={`/coinDetails/${symbol}`}
                key={symbol}
              >
                    <img
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    {name} <span className="tab"></span> ${price.USD} USD
                </Link>
            ) :
                null
            }
        </div>
    );

};



export default CoinInfo;