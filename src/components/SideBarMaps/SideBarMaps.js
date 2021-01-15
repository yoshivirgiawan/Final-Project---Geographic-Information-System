import React from 'react';
import '../../css/SideBarMaps.css'
import Logo from '../../images/logo.png';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { FiArrowLeft } from "react-icons/fi";


function SideBarMaps(props) {
    const {closeSideBarMaps} = props;

    return (
        <div {...props.opened ? {className: "sidebar-maps-inner-container opened"} : {className: "sidebar-maps-inner-container"}} >
            <div className="back-button-container d-flex justify-content-end">
                <div className="back-button" onClick={closeSideBarMaps}>
                    <FiArrowLeft />
                </div>
            </div>
            
            <div className="sidebar-maps-inner-header">
                <div className="container">
                    <div className="sidebar-maps-header-inner">
                        <div className="sidebar-maps-header-inner-content px-4">
                            <div className="sidebar-image-container">
                                <img src={props.dataPerusahaan.logo.default} alt=""/>
                            </div>
                            <div className="sidebar-details-content">
                                <h3>{props.dataPerusahaan.posisi}</h3>
                                <h5>About the Employee</h5>
                                <ul className="p-0 m-0 mt-3">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <BusinessOutlinedIcon style={{fontSize: "20px", position: "relative", top: "-1px", marginRight: "5px"}} />
                                            <div>{props.dataPerusahaan.namaPerusahaan}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <DateRangeOutlinedIcon style={{fontSize: "20px", position: "relative", top: "-1px", marginRight: "5px"}} />
                                            {props.dataPerusahaan.tanggalUpload}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <LocationOnOutlinedIcon style={{fontSize: "20px", position: "relative", top: "-1px", marginRight: "5px"}} />
                                            Surabaya
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="salary-container">
                                <div className="salary-wrapper">
                                    <h5>Annual Salary</h5>
                                    <h3>Rp. {props.dataPerusahaan.gaji}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="job-description-container px-4">
                    <h3>Job Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus, ipsam esse nostrum molestias voluptate doloribus non, quod aut asperiores nisi excepturi consectetur accusantium tempora. Nobis perspiciatis a fugiat vero.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt eius vitae commodi, beatae corrupti sapiente magnam nulla ad illum at nam et modi voluptate alias explicabo quas quisquam. At!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et placeat tenetur iusto molestiae possimus quasi expedita, nobis modi eveniet! Laborum illo odio mollitia corporis quia vel maxime, ad optio.</p>
                </div>
            </div>

            <div className="position-sticky bottom-0 p-4 background-white">
                <div className="container">
                    <div className="px-4">
                        <div className="apply-now-button m-0">
                            Apply Now
                            <ArrowRightAltOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default SideBarMaps;