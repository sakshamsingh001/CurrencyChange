import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyChange from './hooks/CurrencyChange'
function App() {
  const [currency, setCurrency] = useState('USD');  
 const data = CurrencyChange(currency);  
 console.log(data);

  return (
    <>
    
    </>
  )
}

export default App
