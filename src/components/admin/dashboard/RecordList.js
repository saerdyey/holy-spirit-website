import React from 'react'

const RecordList = ({first_name, middle_name, last_name}) => {


    const deleteHandler = () => {
        
    }

    return(
        <tr>
            <td>
                {first_name}
            </td>
            <td>
                {middle_name}
            </td>
            <td>
                {last_name}
            </td>
            <td>
            <button className="btn btn-primary">Accept</button>
            </td>
            <td>
                <button className="btn btn-info">Edit</button>
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default RecordList;