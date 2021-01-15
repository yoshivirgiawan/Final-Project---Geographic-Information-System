import React, { useState } from 'react';
import MapsView from '../../MapsView/MapsView'
import SideBarMaps from '../../SideBarMaps/SideBarMaps'
import ListJobs from '../../ListJobs/ListJobs'
import '../../../css/Maps.css'
import { FaBars } from "react-icons/fa";
import {useMapEvents} from 'react-leaflet'

function Maps(props) {
    const [sideBarMapsOpened, setSideBarMapsOpened] = useState(false);
    const [sideBarMapsContainerOpened, setsideBarMapsContainerOpened] = useState(false)
    const [sideData, setSideData] = useState(null);
    
    const [data, setData] = useState({
        zoom: 9,
        center: [-7.7394, 112.5099],
    });
    
    const opensideBarMaps = (data) => {
        setSideData(data);
        console.log(sideData)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setsideBarMapsContainerOpened(true)
        setSideBarMapsOpened(true);
    }

    const closeSideBarMaps = () => {
        setSideBarMapsOpened(false);
    }

    const openSideBarMapsContainer = () => {
        if(sideBarMapsContainerOpened) {
            setsideBarMapsContainerOpened(false)
        } else {
            setsideBarMapsContainerOpened(true)
        }
    }
    
    // let myMap = null;
    const [myMap, setMyMap] = useState(null);
    
    const setStateMyMap = (map) => {
        // myMap = map;
        setMyMap(map);
    }

    const clickHandeler = (event,index) =>{
        const cameraCoordinat = props.dataPerusahaan[index].koordinat;
        console.log(myMap)

        myMap.flyTo(cameraCoordinat,15)
    }

    return (
        <div>
            <div className="hamburger-menu-maps" onClick={openSideBarMapsContainer}>
                <FaBars />
            </div>

            {/* <div className="my-location-button" onClick={goToMyLocation}>
                My Location
            </div> */}
            
            <div {...sideBarMapsContainerOpened ? {className: "sidebar-maps-container opened"} : {className: "sidebar-maps-container"}} >
                <div className="sidebar-maps">
                    <div {...sideBarMapsOpened ? {className: "jobs-container closed"} : {className: "jobs-container"}} >
                        {
                            props.dataPerusahaan.map((data, index) => (
                                <ListJobs 
                                    dataPerusahaan={data}
                                    openSideBarMaps={opensideBarMaps}
                                    clickHandeler={clickHandeler}
                                    index={index}
                                    type={2}
                                />
                            ))
                        }
                    </div>
                    {
                        sideBarMapsOpened ? 
                        <SideBarMaps 
                            opened={sideBarMapsOpened}
                            dataPerusahaan={sideData}
                            closeSideBarMaps={closeSideBarMaps}
                        /> 
                        : null
                    }
                    
                </div>
            </div>
            <MapsView 
                dataPerusahaan={props.dataPerusahaan}
                data={data}
                myMap={myMap}
                handlerMyMap={setStateMyMap}
                openSideBarMaps={opensideBarMaps}
            />
        </div>
    );
}

export default Maps;