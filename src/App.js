import './App.css';
import {useState} from 'react';
import Home from './components/Page/Home/Home';
import Maps from './components/Page/Maps/Maps';
import SearchAllJobs from './components/Page/SearchAllJobs/SearchAllJobs';
import ShowDetailJobs from './components/Page/ShowDetailJobs/ShowDetailJobs';
import { Switch, Route } from "react-router-dom";
import CompanyLogo1 from './images/company-logo-01.png'
import CompanyLogo2 from './images/company-logo-02.png'
import CompanyLogo3 from './images/company-logo-03.png'
import CompanyLogo4 from './images/company-logo-04.png'
import CompanyLogo5 from './images/company-logo-05.png'
import CompanyLogo6 from './images/company-logo-05.png'

function App(props) {
    const [dataPerusahaan, setDataPerusahaan] = useState([
        {
            
            namaPerusahaan: "PT. Iqbal Pratama",
            posisi: "Web Developer",
            gaji: "3000000",
            jamKerja: "Full Time",
            tanggalUpload: "2020-12-21",
            deskripsiPekerjaan: "",
            koordinat: [-8.011885992129182, 112.61764719903239],
            logo: require('./images/company-logo-01.png'),
            lokasi: "Malang"
        },
        {
            namaPerusahaan: "PT. Yoshi Pradua",
            posisi: "Android Developer",
            gaji: "4000000",
            jamKerja: "Full Time",
            tanggalUpload: "2020-12-20",
            deskripsiPekerjaan: "",
            koordinat: [-8.075001170134648, 112.17005556429001],
            logo: require('./images/company-logo-02.png'),
            lokasi: "Blitar"
        },
        {
            namaPerusahaan: "PT. Farrel Pratiga",
            posisi: "Sales Marketing",
            gaji: "2000000",
            jamKerja: "Part Time",
            tanggalUpload: "2020-12-23",
            deskripsiPekerjaan: "",
            koordinat: [-7.459771679566617, 112.45356057830128],
            logo: require('./images/company-logo-03.png'),
            lokasi: "Mojokerto"
        },
        {
            namaPerusahaan: "PT. Sein Praempat",
            posisi: "Accounting",
            gaji: "4000000",
            jamKerja: "Full Time",
            tanggalUpload: "2020-12-18",
            deskripsiPekerjaan: "",
            koordinat: [-8.075921842736621, 111.956180053945],
            logo: require('./images/company-logo-04.png'),
            lokasi: "Tulungagung"
        },
        {
            namaPerusahaan: "PT. Dims Pralima",
            posisi: "Ui/Ux Designer",
            gaji: "4000000",
            jamKerja: "Part Time",
            tanggalUpload: "2020-12-25",
            deskripsiPekerjaan: "",
            koordinat: [-7.679681628937873, 112.89302793900542],
            logo: require('./images/company-logo-06.png'),
            lokasi: "Pasuruan"
        },
        {
            namaPerusahaan: "PT. Cute Praenam",
            posisi: "Android Developer",
            gaji: "4000000",
            jamKerja: "Part Time",
            tanggalUpload: "2020-12-29",
            deskripsiPekerjaan: "",
            koordinat: [-7.801309215390759, 113.18254849677344],
            logo: require('./images/company-logo-05.png'),
            lokasi: "Probolinggo"
        },
        {
            namaPerusahaan: "PT. Fiki Pratujuh",
            posisi: "Restaurant General Manager",
            gaji: "4000000",
            jamKerja: "Full Time",
            tanggalUpload: "2020-12-25",
            deskripsiPekerjaan: "",
            koordinat: [-7.288603819114139, 112.78839517806125],
            logo: require('./images/company-logo-03.png'),
            lokasi: "Surabaya"
        },
        {
            namaPerusahaan: "PT. Zima Pralapan",
            posisi: "Administrative Assistant",
            gaji: "4000000",
            jamKerja: "Full Time",
            tanggalUpload: "2020-12-14",
            deskripsiPekerjaan: "",
            koordinat: [-7.285289259641123, 112.71599497162259],
            logo: require('./images/company-logo-01.png'),
            lokasi: "Surabaya"
        },
    ]);

    // setDataPerusahaan(data);
    
    return (
        <Switch>
            <Route exact path="/">
                <Home  
                    dataPerusahaan={dataPerusahaan}
                />
            </Route>
            <Route path="/maps">
                <Maps 
                    dataPerusahaan={dataPerusahaan}
                />
            </Route>
            <Route path="/search-all-jobs">
                <SearchAllJobs 
                    dataPerusahaan={dataPerusahaan}
                />
            </Route>
            <Route path="/detail-jobs" component={ShowDetailJobs}>
                {/* <ShowDetailJobs 
                    type={1}
                /> */}
            </Route>
        </Switch>
    );
}

export default App;
