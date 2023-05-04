import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import React, { useEffect, useState } from 'react'

const View = () => {
    const [stuData,setStuData] = useState([])

    useEffect(()=>{
        console.log("Component loaded");
        const data = localStorage.getItem('formDetails');
        setStuData(JSON.parse(data))
    },[]);

    return (
        <div className='tbl-view'>
            <table>
                <thead>
                    <th>Student Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Course</th>
                </thead>

                <tbody>
                    {
                        stuData.map((details)=>{
                            return(
                                <tr>
                                    <td>{details.stuId}</td>
                                    <td>{details.firstName}</td>
                                    <td>{details.lastName}</td>
                                    <td>{details.address}</td>
                                    <td>{details.gender}</td>
                                    <td>{details.email}</td>
                                    <td>{details.course}</td>

                                    <td onClick={()=>alert("Deleted")}>
                                        <IconButton aria-label='delete' color='warning'>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </td>

                                    <td>
                                        <IconButton aria-label="delete" color='success'>
                                            <UpgradeIcon/>
                                        </IconButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View