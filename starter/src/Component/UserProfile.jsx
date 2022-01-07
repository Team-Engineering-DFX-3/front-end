import React from 'react'
import { useState, useEffect } from 'react';
import '../Component/css/App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function UserProfile() {
    const [allDegreeData, setAllDegreeData] = useState([]);
    const [allWorkData, setAllWorkData] = useState([]);
    const [allSchoolData, setAllSchoolData] = useState([]);

    useEffect(() => {
        async function getDegrees() {
            let response = await axios.get('http://127.0.0.1:4000/editDegree');
            setAllDegreeData(response.data.degrees)
            console.log(response.data.degrees);
        }

        getDegrees()
    }, [])

    

    useEffect(() => {
        async function getWork() {
            let response = await axios.get('http://127.0.0.1:4000/editWork');
            setAllWorkData(response.data.work)
            console.log(response.data.work);
        }

        getWork()
    }, [])
   
    useEffect(() => {
        async function getSchool() {
            let response = await axios.get('http://127.0.0.1:4000/editSchool');
            setAllSchoolData(response.data.schools)
            console.log(response.data.schools);
        }

        getSchool()
    }, [])

    return (
        <>
            <body className='body'>
                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Profile"} />
                    </div>

                    <div className='row'>
                        <h1 className="align-left">

                            <Link to="/UserEdit">
                                <button id="editButton" type="button" className="btn btn-primary">
                                    Edit
                                </button>
                            </Link>
                        </h1>

                        <ul className='list col-sm body-align-left' id='left'>
                            <li>Name:</li>
                            <li>Personal email:</li>
                            <li>Digital Futures email:</li>
                            <li>Github:</li>
                            <li>LinkedIn:</li>
                            <li>Phone:</li>
                        </ul>
                        <ul className='list col-md body-align-left' id='right'>
                            <li>Personal story summary</li>
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <ul className='list col-sm'>
                                    <li>Degree:{allDegreeData[0] ? allDegreeData.map(degree => <div>{degree.institution}<br></br>"{degree.subject}"<br></br> {degree.level}<br></br> {degree.grade}<br></br> {degree.dateFrom}<br></br> {degree.dateTo}<br></br> {degree.description}<br></br> </div>) : <div >No Degrees found!</div>}</li> <br/>
                                    <li>School qualifications: {allSchoolData[0] ? allSchoolData.map(school => <div>{school.school}<br></br>"{school.examType}"<br></br> {school.subject}<br></br> {school.grade}<br></br> {school.year}<br></br>  {school.description}<br></br> </div>) : <div >No School found!</div>}</li> <br/>
                                    <li>Work experience:{allWorkData[0] ? allWorkData.map(work => <div>{work.experience}<br></br>"{work.institution}"<br></br> {work.position}<br></br> {work.dateFrom}<br></br> {work.dateTo}<br></br>  {work.description}<br></br> </div>) : <div >No Work found!</div>}</li> <br/>
                                    <li>Personal Achievements:</li>
                                    <li>Portfolio:</li>
                                </ul>
                            </div>
                        </ul>
                        <div>
                            <div className="progress row">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Training"} />
                    </div>
                    <div className='row'>
                        <ul className='list col-sm body-align-left' id='left'>
                            <li>Cohort:</li>
                            <li>Learning:</li>
                            <li>Trainer:</li>
                            <li>Trainee finishing date:</li>
                        </ul>
                        <ul className='list col-md' id='right'>
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <ul className='list col-sm body-align-left'>
                                    <li>Challenge 1:</li>
                                    <li>Challenge 2:</li>
                                    <li>Challenge 3:</li>
                                    <li>Challenge 4:</li>
                                    <li>Challenge 5:</li>
                                    <li>Challenge 6:</li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Information"} />
                    </div>
                    <div className='row'>

                        <ul className="list col-sm body-align-left">
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <h3>Badge A</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut tempore reiciendis consequuntur rerum odio exercitationem enim fugiat at quas?</p>
                            </div>
                        </ul>

                        <ul className="list col-sm body-align-left">
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <h3 >Badge B</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut tempore reiciendis consequuntur rerum odio exercitationem enim fugiat at quas?</p>
                            </div>
                        </ul>

                        <div className='col-sm' id='left'>
                        </div>

                        <ul className="list col-md body-align-left">
                            <li className="margin">Scores:</li>
                            <div className='container containerHeight shadow p-3 mb-5 bg-body rounded overflow'>
                                <ul className='list col-md'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque unde temporibus possimus, velit, fuga voluptate quidem harum cumque fugit voluptatem nemo adipisci nulla eos doloremque assumenda numquam consequuntur. Nihil vero a, quod delectus nesciunt fugiat illo asperiores unde earum dolorum tenetur minima veniam quidem rerum qui necessitatibus doloremque ex accusantium culpa ipsa minus rem ipsam autem obcaecati. Delectus recusandae nulla facilis. Enim dolore mollitia ipsam possimus. Consequatur doloremque reprehenderit iusto illo ad libero voluptas? Neque saepe, magni deserunt sit odio architecto ex maiores ratione optio fugit doloribus dolor, corporis aspernatur error similique accusamus distinctio, iusto quos impedit. Voluptatibus itaque aliquam velit, quo est numquam minus officiis magnam cupiditate dignissimos voluptas explicabo ipsum aliquid sint. Harum odit libero, exercitationem ipsam asperiores id. Doloribus, placeat. Placeat itaque deserunt totam quos, impedit veniam repudiandae optio vel quidem maxime esse nisi maiores odio quia iusto, assumenda reiciendis dolore enim ad cupiditate saepe aperiam est. Non eius voluptas officiis dignissimos nesciunt animi unde quam accusantium nobis consectetur, recusandae quaerat ad totam, neque ipsum porro dolores libero. Est veritatis sequi modi. Dolorem, aut illo dolore accusantium quae, commodi aperiam laudantium reprehenderit modi enim distinctio! Illo, voluptate. Earum excepturi maxime hic, atque temporibus possimus, placeat impedit quas nulla tempora, quia facere? Molestias incidunt, quis iure ut sed fugiat saepe adipisci deserunt totam ipsum dolorem, alias officiis excepturi. Esse, nulla? In quidem dolore eum adipisci, minima vitae illum similique, praesentium ipsum provident nisi ipsa at nesciunt numquam odio dicta, expedita sequi maxime ut? Corrupti, odit laudantium porro amet officia ab vitae inventore facere tenetur fugiat quia error perspiciatis nisi pariatur esse nesciunt enim non accusantium dignissimos velit tempore eligendi! Nam maxime harum eum vitae debitis a eaque vero! Dolores natus, cumque quae nesciunt nobis eligendi itaque asperiores porro mollitia modi autem, possimus provident, doloremque vel recusandae consequuntur corporis! Doloremque beatae consequuntur molestiae? Aspernatur esse ipsa totam est rem doloribus id nostrum autem velit minus atque ea ad veritatis quod quisquam enim, iusto nesciunt et vitae quidem ducimus eos excepturi? Quas quaerat ad, dolor deserunt saepe doloremque, nihil qui sed laborum voluptas ratione enim culpa! Commodi reiciendis temporibus ducimus praesentium perferendis nostrum fuga deserunt laboriosam dolor eveniet. Perspiciatis error libero nisi tempora ducimus ad accusantium ullam, qui minus, ut eveniet et voluptatum sunt? Nesciunt enim molestiae, excepturi perspiciatis, optio corporis expedita similique deserunt deleniti, rerum nostrum laboriosam reiciendis. Delectus dolorum quis repellendus minima. Saepe repellendus minima tenetur aspernatur beatae doloremque repudiandae corrupti adipisci quod expedita delectus, sequi, quam perspiciatis asperiores, facilis possimus officia ut sapiente laboriosam reprehenderit non dignissimos. Odio quae aut quia ipsam cumque nobis odit sequi molestiae. Vero, quam optio quaerat odit placeat aut quibusdam, est non sunt voluptate rem consequuntur ex distinctio deleniti quos molestias voluptates laboriosam temporibus corrupti hic incidunt soluta saepe. Vel beatae ut, recusandae repellat unde incidunt nisi dolore dolores! Suscipit, neque aspernatur praesentium error nemo veritatis sapiente, nisi aut sunt distinctio facere? Porro dolor illo expedita beatae. Sed quod nemo excepturi facilis dolore ab. Aperiam pariatur sint, mollitia reprehenderit dolores veniam amet facere ad magnam optio eos eaque maiores quos. Sapiente placeat ipsum velit dicta iste! Qui a similique illo </p>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </body>
        </>
    )
}
