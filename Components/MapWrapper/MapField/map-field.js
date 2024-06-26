'use client';
import MapContainers from "./map-containers";
import { useState, useEffect, Suspense, useRef } from "react";
import MapWrapperSkeleton from "../Skeleton/map-wrapper-skeleton";

export default function MapField({dataFetched, userIP}) {

  const startingPosition = [dataFetched.location.lat, dataFetched.location.lng];

  const [position, setPosition] = useState(startingPosition);
  
  const [mapPosition, setMapPosition] = useState(startingPosition);

  const oldPosition = useRef(startingPosition);
 

  return (

    <Suspense fallback={<MapWrapperSkeleton />}>
      {console.log("to jest start:" + startingPosition)}
      <MapContainers dataFetched={dataFetched} position={position} setPosition={setPosition} mapPosition={mapPosition} setMapPosition={setMapPosition} oldPosition={oldPosition} />
    </Suspense>
  );
}