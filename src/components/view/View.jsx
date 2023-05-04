import React, { useEffect, useState } from 'react'

const View = () => {
    const [stuData,setStuData] = useState([])

    useEffect(()=>{
        console.log("Component loaded");
        const data = localStorage.getItem('formDetails');
        setStuData(JSON.parse(data))
    },[]);

    return (
        <div>
            
        </div>
    )
}

export default View