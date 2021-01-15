import React from 'react';
import "../../css/HomeBanner.css";

function HomeBanner(props) {
    return (
        <div className="home-banner">
            <div className="overlay"></div>
            <div className="home-banner-background">
                <div 
                    className="container" 
                    style={{
                        padding: "100px 0 150px 0", 
                        position: "relative", 
                        zIndex:"10"
                    }}
                >
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="home-banner-headline">
                                <h3>
                                    <strong>Hire experts or be hired for any job, any time.</strong>
                                    <br/>
                                    <span>
                                        Thousands of small business use 
                                        <strong style={{color: "#2a41e8"}}> JobPlanet </strong>
                                        to turn their ideas into reality
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="banner-search-form">
                                <div className="search-form-wrapper">
                                    <label htmlFor="location" className="label-search-form">Location</label>
                                    <div className="input-search-form-wrapper">
                                        <input type="text" name="location" id="location" placeholder="Where location do you want?" />
                                    </div>
                                </div>
                                <div className="search-form-wrapper">
                                    <label htmlFor="position" className="label-search-form">Position</label>
                                    <div className="input-search-form-wrapper">
                                        <input type="text" name="position" id="position" placeholder="What position do you want?" />
                                    </div>
                                </div>
                                <div className="button-form-wrapper">
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;