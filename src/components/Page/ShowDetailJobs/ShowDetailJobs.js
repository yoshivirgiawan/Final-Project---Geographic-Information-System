import React from 'react';
import DetailJobs from '../../DetailJobs/DetailJobs';

function ShowDetailJobs(props) {
    const {data} = props.location;
    return (
        <div>
            <DetailJobs
                dataPerusahaan={data}
            />
        </div>
    );
}

export default ShowDetailJobs;