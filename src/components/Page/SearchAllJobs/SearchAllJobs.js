import React from 'react';
import AllJobs from '../../AllJobs/AllJobs';
import Navbar from '../../Navbar/Navbar'

function SearchAllJobs(props) {
    return (
        <div>
            <Navbar />
            <AllJobs 
                dataPerusahaan={props.dataPerusahaan}
            />
        </div>
    );
}

export default SearchAllJobs;