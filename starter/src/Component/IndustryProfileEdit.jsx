import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function IndustryProfileEdit() {
    const navigate = useNavigate();
    const [industryData, setIndustryData] = useState({
        name: ``,
        description: ``,
        location: ``,
        image: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setIndustryData({
            ...industryData,
            [name]: value
        });
        console.dir("Industry data: " + industryData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/editIndustry', industryData);
            alert(response.data.message);
            setIndustryData(response.data.profile);
            navigate('/', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <body class='body'>
                <div class='container shadow mb-5 bg-body rounded'>
                    <div class='row'>
                        <ContainerHeader title="Edit profile" />
                        <Link to="/">
                            <button id="editButton" type="button" class="btn btn-primary">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
                <form id="industryProfileForm">
                    <div class='container shadow mb-5 bg-body rounded '>
                        <ul className='list body-align-left' id='left' >
                            <li><label for="company_name">Company Name:</label><br></br></li>
                            <li><input className='input' type="text" id="company_name" name="name"  onChange={handleChange} placeholder="Company Name" required /><br></br></li>
                            <li><label for="description">Company Description:</label><br></br></li>
                            <li><input className='input' type="text" id="description" name="description"  onChange={handleChange} placeholder="Company Description" required /><br></br></li>
                            <li><label for="location">Company Location:</label><br></br></li>
                            <li><input className='input' type="text" id="location" name="location"  onChange={handleChange} placeholder="Company Location" required /><br></br></li>
                            <li><label for="customFile">Upload Company Logo:</label><br></br></li>
                            <li><input className='input' type="file" id="location" name="image" onChange={handleChange}  accept="image/png, image/jpeg" id="customFile" /><br></br></li>
                        </ul>
                    </div>

                    <div className=' container shadow p-3 mb-5 bg-body rounded'>
                        <div className="row">
                            <div className="col-sm-5">
                                <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Profile Changes</button>
                            </div>
                            <div className="col-sm-5">
                                <Link to="/">
                                    <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
                                </Link>
                            </div>
                            <div className="col-sm-2">
                                <button type="reset" className="btn btn-danger btn-custom" form="industryProfileForm">Reset</button>
                            </div>

                        </div>
                    </div>

                </form >

            </body >
        </>
    )
}







// import React from 'react';
// import '../Component/css/App.css';
// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import axios from 'axios';
// import ContainerHeader from './Header/ContainerHeader'


// export default function IndustryProfileEdit() {
//     const navigate = useNavigate();
//     const [industryData, setIndustryData] = useState({
//         name: ``,
//         description: ``,
//         location: ``,
//         image: ``
//     });

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setIndustryData({
//             ...industryData,
//             [name]: value
//         });
//         console.dir("Industry data: " + industryData);
//     };

//     const handleSubmit = async (e) => {
//         console.log("entered handle");
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:4000/editIndustry', industryData);
//             alert(response.data.message);
//             setIndustryData(response.data.profile);
//             navigate('/', { state: response.data });

//         }
//         catch (e) {
//             return "failure";
//         }
//     };

//     return (
//         <>
//             <body class='body'>
//                 <div class='container shadow mb-5 bg-body rounded'>
//                     <div class='row'>
//                         <ContainerHeader title="Edit profile" />
//                         <Link to="/">
//                             <button id="editButton" type="button" class="btn btn-primary">
//                                 Home
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//                 <form >
//                     <div class='container shadow mb-5 bg-body rounded '>
//                         <ul className='list body-align-left' id='left' >
//                             <li><label for="company_name">Company Name:</label><br></br></li>
//                             <li><input className='input' type="text" id="company_name" name="name" value={industryData.name} onChange={handleChange} placeholder="Company Name" required /><br></br></li>
//                             <li><label for="description">Company Description:</label><br></br></li>
//                             <li><input className='input' type="text" id="description" name="description" value={industryData.description} onChange={handleChange} placeholder="Company Description" required /><br></br></li>
//                             <li><label for="location">Company Location:</label><br></br></li>
//                             <li><input className='input' type="text" id="location" name="location" value={industryData.location} onChange={handleChange} placeholder="Company Location" required /><br></br></li>
//                             <li><label for="customFile">Upload Company Logo:</label><br></br></li>
//                             <li><input className='input' type="file" id="location" name="image" onChange={handleChange} value={industryData.image} accept="image/png, image/jpeg" id="customFile" /><br></br></li>
//                         </ul>
//                     </div>

//                     <div className=' container shadow p-3 mb-5 bg-body rounded'>
//                         <div className="row">
//                             <div className="col-sm-5">
//                                 <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Profile Changes</button>
//                             </div>
//                             <div className="col-sm-5">
//                                 <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
//                             </div>
//                             <div className="col-sm-2">
//                                 <button type="reset" className="btn btn-danger btn-custom">Reset</button>
//                             </div>

//                         </div>
//                     </div>

//                 </form >

//             </body >
//         </>
//     )
// }