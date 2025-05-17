import React from 'react'
import { useState,useEffect } from 'react'

const CurrencyChange = (currency) => {
    
 const [Data, setData] = useState(null)
    
    
 useEffect(() =>
 {
   
fetch(`https://v6.exchangerate-api.com/v6/fc25218482da3439f7fe2f4a/latest/${currency}`)
.then((response) => response.json())
.then((data) => {
    setData(data.conversion_rates.INR);
    // console.log(Data);
    

 },[currency])})
 return Data;
}

export default CurrencyChange;