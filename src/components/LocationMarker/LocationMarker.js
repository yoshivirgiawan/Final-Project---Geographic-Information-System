import React, { useState } from 'react';
import { Marker,Popup,useMapEvents } from 'react-leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import defaulticon from 'leaflet/dist/images/marker-icon.png';
import locationPin from '../../images/location-pin.svg'

let defaultIcon = L.icon({
    iconUrl: locationPin,
    shadowUrl: iconShadow,
    shadowAnchor: [13, 55],
    iconSize: [30, 30],
    iconAnchor: [14, 46],
    popupAnchor: [-1, -48]

});

function LocationMarker(props) {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
      
    return position === null ? null : (
        <Marker position={position} icon={defaultIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default LocationMarker;