import { MapContainer, Marker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from 'leaflet';
import { useMapEvents } from "react-leaflet";


import classes from "./map-field.module.css";
import markerIcon from "@/public/icon-location.svg";




export default function MapContainers({dataFetched, position, setPosition, mapPosition, setMapPosition, oldPosition, setOldPosition}) {

  function MyComponent() {
    const map = useMapEvents({
      click() {
        map.flyTo([dataFetched.location.lat+0.002, dataFetched.location.lng], map.getZoom());
        setTimeout(()=>{
          setPosition((previous) => {
            setOldPosition(previous);
            console.log("poprzednia wartość: "+previous);
            return [dataFetched.location.lat, dataFetched.location.lng];
                    });
          setMapPosition([dataFetched.location.lat+0.002, dataFetched.location.lng]);
          console.log("useEffect odpalony");
        }, 3000)
      }
    }, 
    console.log("obecna wartość: "+ position))


    return position === null ? null : (
      <Marker 
        position={[dataFetched.location.lat, dataFetched.location.lng]} 
        className={classes.marker} 
        icon={customMarker}>
      </Marker>
    )
  }

  const customMarker = new L.icon({
    iconUrl : markerIcon.src,
    iconSize : [35,42], // size of the icon
  })

    return(
        <MapContainer 
        center={oldPosition} 
        zoom={15} 
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
        className={classes.mapWrapper}>
        <MyComponent />
        <TileLayer
              attribution="Google Maps"
              url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker 
        position={oldPosition} 
        className={classes.marker} 
        icon={customMarker}>
        </Marker>
      </MapContainer>
    );
}