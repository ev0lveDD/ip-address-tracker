'use client';
import classes from "./home-page.module.css";
import { Suspense } from "react";
import {useState, useEffect} from 'react';

import InformationContainer from "../InformationContainer/information-container";
import MapWrapper from "../MapWrapper/map-wrapper";

export default  function Main() {

    const apiKey="at_7QCArIMeGSAqj0cm4wY8tDHhrJ3vc";

    const [dataFetched, setDataFetched] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [userIP, setUserIP] = useState('');
   
    useEffect(() => {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_7QCArIMeGSAqj0cm4wY8tDHhrJ3vc&ipAddress=${userIP}`)
        .then((res) => res.json())
        .then((dataFetched) => {
          setDataFetched(dataFetched)
          setLoading(false)
        })
    }, [userIP])
   
    console.log(dataFetched);
    if (isLoading) return <p>Loading...</p>
    if (!dataFetched) return <p>No profile data</p>

    return(
        <>
            <Suspense fallback="Loading...">
                <InformationContainer dataFetched={dataFetched} userIP={userIP} setUserIP={setUserIP}/>
                <MapWrapper dataFetched={dataFetched} userIP={userIP}/>
            </Suspense>
        </>
    );

}
