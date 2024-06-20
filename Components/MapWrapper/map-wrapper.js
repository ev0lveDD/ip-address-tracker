import dynamic from 'next/dynamic';
import {Suspense, useMemo } from "react";
import MapWrapperSkeleton from './Skeleton/map-wrapper-skeleton';

export default function MapWrapper({dataFetched, userIP}) {

  const Map = useMemo(() => dynamic(() => import('./MapField/map-field'),
    {ssr: false}), [dataFetched]);

      return(
        <div>
          <Suspense fallback={<MapWrapperSkeleton />}>
            <Map dataFetched={dataFetched} userIP={userIP}/>
          </Suspense>
        </div>
      );
}