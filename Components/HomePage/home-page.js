'use client';
import classes from "./home-page.module.css";
import { Suspense } from "react";
import {useState, useEffect} from 'react';
import Loading from "./loading";
import InformationContainer from "../InformationContainer/information-container";
import MapWrapper from "../MapWrapper/map-wrapper";

export default  function Main() {

    const apiKey="at_QV13f739zGQMl4ZS0akBwVmPUYZRY";

    const [dataFetched, setDataFetched] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [userIP, setUserIP] = useState('');
   
    useEffect(() => {
        if(userIP.match(/[a-z]/i) && !userIP.includes("@")) {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QV13f739zGQMl4ZS0akBwVmPUYZRY&domain=${userIP}`)
            .then((res) => res.json())
            .then((dataFetched) => {
              setDataFetched(dataFetched)
              setLoading(false)
            })
        } else if(userIP.includes("@")) {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QV13f739zGQMl4ZS0akBwVmPUYZRY&email=${userIP}`)
            .then((res) => res.json())
            .then((dataFetched) => {
                setDataFetched(dataFetched)
                setLoading(false)
            })
        } else {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QV13f739zGQMl4ZS0akBwVmPUYZRY&ipAddress=${userIP}`)
            .then((res) => res.json())
            .then((dataFetched) => {
              setDataFetched(dataFetched)
              setLoading(false)
            })
        }
    }, [userIP])
   
    console.log(dataFetched);
    if (isLoading) return <Loading />
    if (!dataFetched) return <p>No profile data</p>

    return(
            <Suspense fallback={<Loading />}>
                <InformationContainer dataFetched={dataFetched} userIP={userIP} setUserIP={setUserIP}/>
                <MapWrapper dataFetched={dataFetched} userIP={userIP}/>
            </Suspense>
    );

}
