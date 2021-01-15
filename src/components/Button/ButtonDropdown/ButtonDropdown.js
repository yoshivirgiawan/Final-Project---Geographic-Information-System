import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import '../../../css/Footer.css';

function ButtonDropdown(props) {
    const {onClickDropdownLanguage} = props;

    return (
        <div className="language-content-container position-relative">
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
                className={props.className}
                ref={props.refName}
            >
                <ul className="list-dropdown-language-inner m-0 p-0">
                    <li className="selected">English</li>
                    <li>Indonesia</li>
                </ul>
            </div>
        </div>
    );
}

export default ButtonDropdown;