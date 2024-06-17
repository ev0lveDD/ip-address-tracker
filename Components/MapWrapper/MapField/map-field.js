'use client';
import MapContainers from "./map-containers";
import { useState, useEffect, Suspense } from "react";

export default function MapField({dataFetched, userIP}) {

  const [position, setPosition] = useState([dataFetched.location.lat, dataFetched.location.lng]);
  const [mapPosition, setMapPosition] = useState([dataFetched.location.lat+0.002, dataFetched.location.lng]);
  useEffect(() => {
    setPosition([dataFetched.location.lat, dataFetched.location.lng])
    setMapPosition([dataFetched.location.lat+0.002, dataFetched.location.lng])
  },[dataFetched.location.lat, dataFetched.location.lng])

  return (
    <Suspense fallback="Loading...">
      <MapContainers position={position} mapPosition={mapPosition}/>
    </Suspense>
  );
}