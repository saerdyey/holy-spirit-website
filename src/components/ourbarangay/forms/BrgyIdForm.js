import React, {useState} from 'react';

import '../Forms.css';

const BrgyIdForm = () => {

    const [inputs, setInputs] = useState({
        personal_data:{
            first_name:'',
            middle_name:'',
            last_name:'',
            mobile_no:'',
            tel_no:'',
            address1:'',
            address2:'',
            employer_name:'',
            length_stay:0,
            birth_date:{
                bd_year:0,
                bd_month:0,
                bd_day:0,
            },
            father_name:'',
            mother_name:'',
            gender:'',
            civil_status:'',
            
        },
        emergency_contact:{
            contact_person:'',
            relationship:'',
            ec_address:'',
            ec_contact:'',
        },
        classification:'',
        isComplete:false
    })

    const inputsHandler = (e) => {
        setInputs({...inputs, [e.target.id]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

    return(
        <div className="container">
            <div id="form-container">
                <div id="form-wrapper">
                    <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="first_name">First Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="first_name" placeholder="Firstname"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="middle_name">Middle Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="middle_name" placeholder="Middle Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="last_name">Last Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="last_name" placeholder="Last Name"/>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputState">Gender</label>
                                <select onChange={inputsHandler} id="purpose" className="form-control">
                                    <option value="Male" selected>Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputState">Civil Status</label>
                                <select onChange={inputsHandler} id="civil_status" className="form-control">
                                    <option value="Single" selected>Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Widowed">Widowed</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address1">Address</label>
                            <input onChange={inputsHandler} type="text" className="form-control" id="address1" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address2">Address 2</label>
                            <input onChange={inputsHandler} type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="mobile_no">Mobile No.</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="mobile_no" placeholder="Mobile No."/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="tel_no">Telephone No.</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="tel_no" placeholder="Telephone No."/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="employer_name">Employer's Name</label>
                            <input onChange={inputsHandler} type="text" className="form-control" id="employer_name" placeholder="(e.g. Mewaworld Corporation, SM Development Corporation"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="stay_length">Length of Stay in Holy Spirit</label>
                                <div className="col-3">
                                    <input onChange={inputsHandler} type="number" className="form-control" id="stay_length" placeholder="0" aria-describedby="stay_lengthHelpInline"/>
                                </div>
                                <small id="stay_lengthHelpInline" class="text-muted">
                                    Number of years you have stayed in Barangay Holy Spirit
                                </small>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="birth_date">Birthdate</label>
                                <input type="date" id="birth_date" min="1950-01-01" max="2020-12-31"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-9">
                                <label htmlFor="father_name">Father's Name</label>
                                <input onChange={inputsHandler} type="text" className="form-control" id="father_name" placeholder="Father's Name"/>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="classification">Classification</label>
                            <div className="col-4">
                                <select onChange={inputsHandler} id="classification" className="form-control">
                                    <option value="Homeowner" selected>Homeowner</option>
                                    <option value="Household Helper">Household Helper</option>
                                    <option value="Barangay Employee">Barangay Employee</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BrgyIdForm;