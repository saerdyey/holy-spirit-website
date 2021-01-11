import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RecordList from './RecordList'


const AdminDashboard = () => {

    useEffect(() => {
        getList();
      }, []);

    const [idApplication, setIdApplication] = useState()

    const getList = () => {
        axios.get('http://localhost:8011/holy-spirit-website-api/list.php')
        .then(response => {
            setIdApplication(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log(idApplication)
    console.log(JSON.stringify(idApplication))
    return(
        <div>
            {/* <h1>Admin Dashboard</h1>
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
                    {idApplication.map((app) => {
                        <div><h3>hello</h3></div>
                    })}
                </tbody>
            </table> */}
            <h1>hello</h1>
        </div>
    )
}

export default AdminDashboard;