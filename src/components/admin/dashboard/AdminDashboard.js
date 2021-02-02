import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecordList from './RecordList';

// import RecordList from './RecordList'


const AdminDashboard = () => {

    useEffect(() => {
        getList();
    }, []);

    const [applications, setApplications] = useState([])

    const url = process.env.REACT_APP_BASE_URL;
    
    const getList = async () => {
        const response = await fetch(url + '/list.php');
        const data = await response.json();
        setApplications(data)
        
    }
    console.log(applications)
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <h3>ID Applications List</h3>
            <table className="table table-striped" style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application) => {
                        return <RecordList first_name={application.first_name} middle_name={application.middle_name} last_name={application.last_name}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard;