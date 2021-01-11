import React from 'react'

const RecordList = (props) => {
    return(
        <tr>
            <td>
                {this.props.object.first_name}
            </td>
            <td>
                {this.props.object.middle_name}
            </td>
            <td>
                {this.props.object.last_name}
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