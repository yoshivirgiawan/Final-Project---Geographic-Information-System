import React from 'react';
import '../../css/MobileNavbar.css';
import Logo from '../../images/logo.png';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function MobileNavbar(props) {
    const {onClickMenu} = props;

    return (
        <div {...props.opened ? {className: "mobile-navbar-container open"} : {className: "mobile-navbar-container"}  } >
            <div className="container py-4 d-flex justify-content-between align-items-center">
                <div className="left-side">
                    <div className="logo-navbar d-flex align-items-center">
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            width="50px" 
                            height="50px" 
                        />
                        <div className="logo-name ml-3">
                            JobPlanet
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div 
                        onClick={onClickMenu} 
                        className="btn p-0"
                    >
                        <CloseOutlinedIcon className="close-icon" />
                    </div>
                </div>
            </div>

            <div className="nav-content-container d-flex align-items-center">
                <div className="container">
                    <ul className="nav-content m-0 p-0 text-center">
                        <li className="active">
                            Home
                        </li>
                        <li>
                            Street Maps
                        </li>
                        <li>
                            List Jobs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;