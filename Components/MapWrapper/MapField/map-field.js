'use client';
import MapContainers from "./map-containers";
import { useState, useEffect, Suspense, useMemo } from "react";
import MapWrapperSkeleton from "../Skeleton/map-wrapper-skeleton";

export default function MapField({dataFetched, userIP}) {

  const startingPosition = [54.372158, 18.638306];

  const [position, setPosition] = useState([54.372158, 18.638306]);
  
  const [mapPosition, setMapPosition] = useState(startingPosition);

  const [oldPosition, setOldPosition] = useState([54.372158, 18.638306]);
 

  return (

    <Suspense fallback={<MapWrapperSkeleton />}>
      {console.log("to jest start:" + startingPosition)}
      <MapContainers dataFetched={dataFetched} position={position} setPosition={setPosition} mapPosition={mapPosition} setMapPosition={setMapPosition} oldPosition={oldPosition} setOldPosition={setOldPosition}/>
    </Suspense>
  );
}