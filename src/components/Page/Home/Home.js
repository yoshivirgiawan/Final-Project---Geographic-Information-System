import React, {useState} from 'react';
import ReactDOM from "react-dom";
import Navbar from "../../Navbar/Navbar";
import ListJobs from "../../ListJobs/ListJobs";
import HomeBanner from "../../HomeBanner/HomeBanner";
import MobileNavbar from '../../MobileNavbar/MobileNavbar';
import Footer from '../../Footer/Footer'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import {Link} from 'react-router-dom';

function Home(props) {
    const [menuOpened, setMenuOpened] = useState(false);

    const onClickMenu = () => {
        console.log(menuOpened)
        if (menuOpened) {
            setMenuOpened(false);
            document.body.style.overflow = "visible";
        } else {
            setMenuOpened(true);
            document.body.style.overflow = "hidden";
        }
    }
    
    return (
        <div {...menuOpened ? {className: "body-container open"} : {className: "body-container"}} >
            <MobileNavbar 
                opened={menuOpened} 
                onClickMenu={onClickMenu}
            />
            <Navbar 
                onClickMenu={onClickMenu}
            />
            <HomeBanner />
            <div className="jobs-list-container">
                <div className="container">
                    <div className="jobs-title d-flex justify-content-between align-items-center my-4">
                        <h3>List Jobs</h3>
                        <span>
                        <Link to="/search-all-jobs">
                            Browse All Jobs
                            <ArrowRightAltOutlinedIcon style={{fontSize:"21px", marginLeft: "3px"}} />
                        </Link>
                        </span>
                    </div>
                    <div className="jobs-container">
                        {
                            props.dataPerusahaan.map((data, index) => {
                                if(index < 5) {
                                    return (
                                        <ListJobs 
                                            dataPerusahaan={data}
                                            type={1}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;