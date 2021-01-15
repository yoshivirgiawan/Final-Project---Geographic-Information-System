import React from 'react';
import '../../css/AllJobs.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { VscWholeWord } from "react-icons/vsc";
import ListJobs from '../ListJobs/ListJobs';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function AllJobs(props) {
    return (
        <div className="Alljobs-container d-flex">
            <div className="full-page-sidebar">
                <div className="full-page-sidebar-inner">
                    <div className="sidebar-container container">
                        <div className="sidebar-widget">
                            <h3>City</h3>
                            <div id="input-with-icon">
                                <div id="autocomplete-input">
                                    <input type="text" placeholder="City"/>
                                    <div className="icon">
                                        <LocationOnOutlinedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h3>Job Title</h3>
                            <div className="keywords-container">
                                <div className="keyword-input-container">
                                    <input type="text" placeholder="keywords"/>
                                    <div className="icon">
                                        <VscWholeWord />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h3>Job Type</h3>
                            <div className="switches-list">
                                <div className="switch-container">
                                    <label class="switch">
                                        <input type="checkbox"/>
                                        <span className="switch-button">

                                        </span>
                                        Part Time
                                    </label>
                                </div>
                                <div className="switch-container">
                                    <label class="switch">
                                        <input type="checkbox"/>
                                        <span className="switch-button">

                                        </span>
                                        Full Time
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-search-button-container">
                        <button className="button ripple-effect">Search</button>
                    </div>
                </div>
            </div>

            <div className="result-page-container">
                <div className="result-container">
                    <div className="search-result-container container">
                        <h3 className="result-page-title">Search Result</h3>
                        <div className="result-list-jobs-container">
                            <div className="list-jobs-container">
                                {
                                    props.dataPerusahaan.map((data, index) => (
                                        <ListJobs 
                                            type={1}
                                            dataPerusahaan={data}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    

                    <div className="result-footer">
                        <div className="copyright-result-footer">
                            &copy; {"2021 "}
                            <strong>
                                JobPlanet
                            </strong>
                            {". All Rights Reserved."}
                        </div>

                        <ul className="social-result-footer m-0 p-0">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaGooglePlusG /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllJobs;