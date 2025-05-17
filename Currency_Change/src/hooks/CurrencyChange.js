import React from 'react'
import { useState,useEffect } from 'react'

const CurrencyChange = (currency,currency2,amount) => {
    
let [Data, setData] = useState(null)
const currency_2=currency2;
// console.log(currency_2)


    
 useEffect(() =>
 {
   
fetch(`https://v6.exchangerate-api.com/v6/fc25218482da3439f7fe2f4a/latest/${currency}`)
.then((response) => response.json())
.then((data) => {

   
    setData(data.conversion_rates[currency_2]*amount);
    console.log(Data)

 }).catch((error)=>
    {
        console.error('Error fetching data:', error);
    }),[currency]})
 return Data;
}

export default CurrencyChange;