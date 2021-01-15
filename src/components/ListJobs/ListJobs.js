import React from 'react';
import '../../css/ListJobs.css'
import Logo from '../../images/logo.png'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { Link } from 'react-router-dom';

function ListJobs({ 
    openSideBarMaps,
    clickHandeler,
    dataPerusahaan,
    index,
    type
 }) {
    let now = new Date();

    const getDifferenceInDays = (date1, date2) => {
        const diffInMs = Math.abs(date2 - date1);
        return Math.round(diffInMs / (1000 * 60 * 60 * 24));
    }

    return (
        <div className="listjobs-container">
            <div className="listjobs-wrapper p-4">
                <div className="list-jobs d-flex align-items-center">
                    <div className="logo-list">
                        <img src={dataPerusahaan.logo.default} alt=""/>
                    </div>
                    <div className="list-details">
                        <h3 className="list-details-title">{dataPerusahaan.posisi}</h3>
                        <div className="job-list-footer">
                            <ul className="d-flex align-items-center flex-wrap p-0 m-0">
                                <li className="job-list-footer-details d-flex align-items-center">
                                    <BusinessOutlinedIcon style={{fontSize : "18px", marginRight : "3px"}}/>
                                    {dataPerusahaan.namaPerusahaan}
                                </li>
                                <li className="job-list-footer-details d-flex align-items-center">
                                    <LocationOnOutlinedIcon style={{fontSize : "18px", marginRight : "3px"}}/>
                                    Lamongan
                                </li>
                                <li className="job-list-footer-details d-flex align-items-center">
                                    <BusinessCenterOutlinedIcon style={{fontSize : "18px", marginRight : "3px"}}/>
                                    {dataPerusahaan.jamKerja}
                                </li>
                                <li className="job-list-footer-details d-flex align-items-center">
                                    <AccessTimeOutlinedIcon style={{fontSize : "18px", marginRight : "3px"}}/>
                                    {getDifferenceInDays(now, new Date(dataPerusahaan.tanggalUpload))} days ago
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="list-details-button">
                        {
                            type === 1 ? 
                            <div className="btn btn-primary list-details-button-select">
                                <Link to={{
                                    pathname: "/detail-jobs",
                                    data: dataPerusahaan
                                }}>  
                                    Show Details
                                </Link>
                            </div>
                            : 
                            <div className="btn btn-primary list-details-button-select" onClick={() => openSideBarMaps(dataPerusahaan)}>
                                <div className="on-click" onClick={(event) => clickHandeler(event, index)} >
                                    Show Details
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListJobs;