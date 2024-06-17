import { MapContainer, Marker, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from 'leaflet';


import classes from "./map-field.module.css";
import markerIcon from "@/public/icon-location.svg";

export default function MapContainers({position, mapPosition}) {

  const customMarker = new L.icon({
    iconUrl : markerIcon.src,
    iconSize : [35,42], // size of the icon
  })

    return(
        <MapContainer 
        center={mapPosition} 
        zoom={15} 
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
        className={classes.mapWrapper}>
        <TileLayer
              attribution="Google Maps"
              url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker 
        position={position} 
        className={classes.marker} 
        icon={customMarker}>
        </Marker>
      </MapContainer>
    );
}