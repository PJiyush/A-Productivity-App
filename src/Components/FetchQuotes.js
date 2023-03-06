import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import Quote from './Quote'
function FetchQuotes() {
    const [data, setData] =  useState([])
    let arrayOfQuotes;
    const fetchdetails= async()=>{
        const response = await Axios.get('https://type.fit/api/quotes')
        const dataOfQuote  = response.data;
        console.log(dataOfQuote.length);
        setData(dataOfQuote);
    }
    useEffect(()=>{
        fetchdetails()
    },[])
    let randomNumber = Math.random()
    randomNumber = 1643* randomNumber
    randomNumber = Math.floor(randomNumber)
    const quoteVal = data[randomNumber];
    console.log(quoteVal);
    return (
        <>{quoteVal?<Quote passage = {quoteVal.text} author = {quoteVal.author}/>:''}
        </>
    )
}

export default FetchQuotes