import { useState,useEffect } from "react";

const useCurrencyInfo =(currency)=>{
    const [data,setData] = useState({})
    useEffect((currency)=>{
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json")
        .then((req)=>req.json())
        .then((req)=>setData(req.currency))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;