import React, { useState } from 'react';
import '../../css/DetailJobs.css'
import Logo from '../../images/logo.png';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import markerIcon from '../../images/location-pin.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import defaulticon from 'leaflet/dist/images/marker-icon.png';
import { Link } from 'react-router-dom';
// import MarkerIcon from '../MarkerIcon/MarkerIcon';

let defaultIcon = L.icon({
    iconUrl: defaulticon,
    shadowUrl: iconShadow,
    iconAnchor: [14, 46],
    popupAnchor: [-1, -48]

});

function DetailJobs(props) {
    const [data, setData] = useState(props.dataPerusahaan);
    
    const clickHandeler = (event,index) => {
        const koordinat = data.koordinat;
    }

    let now = new Date();
    const getDifferenceInDays = (date1, date2) => {
        const diffInMs = Math.abs(date2 - date1);
        return Math.round(diffInMs / (1000 * 60 * 60 * 24));
    }

    return (
        <div>
            <div className="detail-jobs-header">
                <div className="container detail-jobs-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="detail-jobs-header-inner d-flex justify-content-between">
                                <div className="left-side">
                                    <div className="header-image d-flex">
                                        <img src={data.logo.default} alt=""/>
                                    </div>
                                    <div className="header-details">
                                        <h3>{data.posisi}</h3>
                                        <h5>About the employeer</h5>
                                        <ul className="d-flex align-items-center p-0 m-0">
                                            <li className="d-flex align-items-center header-details-footer">
                                                <div className="icon-header-details">
                                                    <BusinessOutlinedIcon />
                                                </div> 
                                                <div>{data.namaPerusahaan}</div>
                                            </li>
                                            <li className="d-flex align-items-center header-details-footer">
                                                <div className="icon-header-details">
                                                    <DateRangeOutlinedIcon />
                                                </div>
                                                {data.tanggalUpload}
                                            </li>
                                            <li className="d-flex align-items-center header-details-footer">
                                                <div className="icon-header-details">
                                                    <LocationOnOutlinedIcon />
                                                </div>
                                                Surabaya
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <div className="salary-box">
                                        <div className="salary-type">
                                            Annual Salary
                                        </div>
                                        <div className="salary-amount">
                                            {`Rp. ${data.gaji}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-image-container"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 content-right-offset">
                        <div className="single-page-section">
                            <h3 style={{marginBottom:'25px'}}>Job Description</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus, ipsam esse nostrum molestias voluptate doloribus non, quod aut asperiores nisi excepturi consectetur accusantium tempora. Nobis perspiciatis a fugiat vero.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt eius vitae commodi, beatae corrupti sapiente magnam nulla ad illum at nam et modi voluptate alias explicabo quas quisquam. At!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et placeat tenetur iusto molestiae possimus quasi expedita, nobis modi eveniet! Laborum illo odio mollitia corporis quia vel maxime, ad optio.</p>
                        </div>
                        <div className="single-page-section">
                            <h3 style={{marginBottom:'25px'}}>Location</h3>
                            <div className="single-job-map-container">
                            <MapContainer 
                                style={{height: "340px"}} 
                                center={data.koordinat} 
                                zoom={9} 
                                scrollWheelZoom={true}
                                zoomControl={false} 
                            >
                                <ZoomControl position="topright"/>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker 
                                    position={data.koordinat} 
                                    icon={defaultIcon}
                                >
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-container">
                            <div className="apply-now-button popup-with-zoom-anim">
                                Apply Now
                                <ArrowRightAltOutlinedIcon />
                            </div>
                            <div className="location-now-button popup-with-zoom-anim">
                                <Link to="/maps" > 
                                    Show Location
                                    <LocationOnOutlinedIcon />
                                </Link>
                            </div>
                            <div className="sidebar-widget">
                                <div className="job-overview">
                                    <div className="job-overview-headline"> Job Summary </div>
                                    <div className="job-overview-inner">
                                        <ul>
                                            <li>
                                                <div className="icon-sidebar-widget">
                                                    <LocationOnOutlinedIcon style={{color: '#2a41e8'}} />
                                                </div>
                                                <span>Location</span>
                                                <h5>{data.lokasi} , Jawa Timur</h5>
                                            </li>
                                            <li>
                                                <div className="icon-sidebar-widget">
                                                    <BusinessCenterOutlinedIcon style={{color: '#2a41e8'}}/>
                                                </div>
                                                <span>Job Type</span>
                                                <h5>{data.jamKerja}</h5>
                                            </li>
                                            <li>
                                                <div className="icon-sidebar-widget">
                                                    <LocalAtmOutlinedIcon style={{color: '#2a41e8'}}/>
                                                </div>
                                                <span>Salary</span>
                                                <h5>Rp. {data.gaji}</h5>
                                            </li>
                                            <li>
                                                <div className="icon-sidebar-widget">
                                                    <AccessTimeOutlinedIcon style={{color: '#2a41e8'}}/>
                                                </div>
                                                <span>Date Posted</span>
                                                <h5>{getDifferenceInDays(now, new Date(data.tanggalUpload))} days ago</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DetailJobs;