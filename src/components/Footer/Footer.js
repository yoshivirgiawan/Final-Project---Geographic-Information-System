import React, { useRef, useState, useEffect } from 'react';
import '../../css/Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import ButtonDropdown from '../Button/ButtonDropdown/ButtonDropdown';
import Logo from '../../images/logo.png'



function Footer(props) {
    const [dropdownLanguageOpen, setDropdownLanguageOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const onClickDropdownLanguage = () => {
        if (dropdownLanguageOpen) {
            setDropdownLanguageOpen(false);
        } else {
            setDropdownLanguageOpen(true);
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDropdownLanguageOpen(false);
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div className="footer-container">
            <div className="footer-top-container">
                <div className="container">
                    <div className="footer-top-content d-flex justify-content-between flex-wrap">
                        <div className="footer-top-left-content d-flex align-items-center">
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                width="50px" 
                                height="50px" 
                            />
                            <div className="logo-name-footer ml-3">
                                JobPlanet
                            </div>
                        </div>
                        <div className="footer-top-right-content d-flex align-items-center">
                            <div className="sosmed-content-container">
                                <ul className="m-0 p-0 list-unstyled d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaGooglePlusG /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                            
                            {
                                dropdownLanguageOpen ? 
                                <ButtonDropdown 
                                    className="list-dropdown-language position-absolute open"
                                    onClickDropdownLanguage={onClickDropdownLanguage}
                                    refName={wrapperRef}
                                />
                                : 
                                <ButtonDropdown 
                                    className="list-dropdown-language position-absolute"
                                    onClickDropdownLanguage={onClickDropdownLanguage}
                                    refName={null}
                                />
                            }
                            

                            {/* <div className="language-content-container position-relative">
                                <button 
                                    type="button"
                                    onClick={onClickDropdownLanguage}
                                >
                                    English
                                    <span>
                                        <MdArrowDropDown />
                                    </span>
                                </button>
                                <div 
                                    {...dropdownLanguageOpen ? {className: "list-dropdown-language position-absolute open"} 
                                    : {className: "list-dropdown-language position-absolute"}} 
                                    
                                >
                                    <ul className="list-dropdown-language-inner m-0 p-0">
                                        <li className="selected">English</li>
                                        <li>Indonesia</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-mid-container">
                <div className="container">
                    <div className="footer-menus-container d-flex justify-content-between">
                        <div className="footer-menus">
                            <h3>Menus</h3>
                            <ul className="m-0 p-0">
                                <li>
                                    <span>
                                        Browse Jobs
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Street Maps
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="email-content">
                            <h3 className="d-block">
                                <span>
                                    <FiMail />
                                </span>
                                Sign Up For a Newsletter
                            </h3>
                            <p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
                            <fieldset className="form-email">
                                <input type="email" name="email" id="email" placeholder="Enter your email address ..." />
                                <button><FiArrowRight style={{fontSize: "18px"}} /></button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-container text-center">
                <div>
                    &copy; {"2021 "}
                    <strong>
                        {"JobPlanet. "}
                    </strong>
                     All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;