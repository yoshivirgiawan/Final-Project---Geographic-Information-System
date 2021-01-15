import React, { Component, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, MapConsumer, useMapEvents } from 'react-leaflet';
import markerIcon from '../../images/location-pin.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import defaulticon from 'leaflet/dist/images/marker-icon.png';
// import MarkerIcon from '../MarkerIcon/MarkerIcon';
import LocationMarker from '../LocationMarker/LocationMarker';

let defaultIcon = L.icon({
    iconUrl: defaulticon,
    shadowUrl: iconShadow,
    iconAnchor: [14, 46],
    popupAnchor: [-1, -48]

});

function MapsView(props) {
    let myMap = props;
    const {openSideBarMaps} = props;

    return (
        <div >
            <MapContainer 
                style={{height: "100vh"}} 
                center={props.data.center} 
                zoom={props.data.zoom} 
                scrollWheelZoom={true}
                zoomControl={false} 
            >
                <ZoomControl position="topright"/>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">JobPlanet</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    props.dataPerusahaan.map((data, index) => (
                        
                            <Marker 
                                position={data.koordinat} 
                                icon={defaultIcon}
                                eventHandlers={{
                                    click: (e) => {
                                        openSideBarMaps(data);
                                    }
                                }}
                            >
                                <Popup>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={data.logo.default} alt="" style={{width:"30px", marginRight: "5px", borderRadius: "4px"}} />
                                        <div>
                                            <h4 style={{fontSize: "12px", lineHeight: "15px", fontWeight: "500", color: "#808080"}}  className="m-0">{data.namaPerusahaan}</h4>
                                            <h3 style={{fontSize: "14px", lineHeight: "24px", fontWeight: "500", color: "#333"}} className="m-0">{data.posisi}</h3>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        
                        
                    ))
                }
                {/* <LocateControl options={locateOptions} startDirectly/> */}
                <MapConsumer>
                    {(map) => {
                        props.handlerMyMap(map)
                        // myMap = map
                        return null
                    }}
                </MapConsumer>
                <LocationMarker />
            </MapContainer>
        </div>
    );
}

export default MapsView;