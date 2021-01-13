import React, {useState, useEffect} from 'react';
import axios from 'axios';

// import RecordList from './RecordList'


const AdminDashboard = () => {

    const [idApplication, setIdApplication] = useState()

    const getList = () => {
        axios.get('http://localhost:8011/holy-spirit-website-api/list.php')
        .then(response => {
            setIdApplication(response.data);
            console.log('must be 1st')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getList();
    }, []);

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
                    {console.log('must be 2nd')}
                </tbody>
            </table>
            <p>hello</p>
        </div>
    )
}

export default AdminDashboard;