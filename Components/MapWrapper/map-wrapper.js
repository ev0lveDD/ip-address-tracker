import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import dynamic from 'next/dynamic';
import {Suspense, useMemo } from "react";

export default function MapWrapper({dataFetched, userIP}) {

  const Map = useMemo(() => dynamic(() => import('./map-field'),
    {ssr: false}), [dataFetched]);

      return(
        <div>
          <Suspense fallback="Loading...">
            <Map dataFetched={dataFetched} userIP={userIP}/>
          </Suspense>
        </div>
      );
}