
import React, { useState } from 'react';
import '../App.css';
import { GrClose } from "react-icons/gr";

const Form = () => {
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [heading, setHeading] = useState('');
  const [formNo, setFormNo] = useState('');
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const validate = () => {
    let validationErrors = {};
    if (!department) validationErrors.department = "Department is required";
    if (!category) validationErrors.category = "Category is required";
    if (!heading) validationErrors.heading = "Heading is required";
    if (!formNo) validationErrors.formNo = "Form No is required";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", { department, category, heading, formNo });
      setShowForm(false); // Hide form after submission
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    if (errors.department) {
      setErrors({ ...errors, department: '' });
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (errors.category) {
      setErrors({ ...errors, category: '' });
    }
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
    if (errors.heading) {
      setErrors({ ...errors, heading: '' });
    }
  };

  const handleFormNoChange = (e) => {
    setFormNo(e.target.value);
    if (errors.formNo) {
      setErrors({ ...errors, formNo: '' });
    }
  };

  return (
    <div className='main'>
      <div>
        <div className="search-bar">
          <div>
            <p>Check List</p>
          </div>

          <div className='two'>
            <input
              type="text"
              placeholder="Search Checklist"
              style={{ padding: "3px" }}
            />
            <button
              type="button"
              onClick={() => setShowForm(true)}
              style={{ padding: "3px" }}
            >
              Add New
            </button>
          </div>
        </div>
        <table className="checklist-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Heading</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>

      {showForm && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <div className='head'>
              <p>Add a new design Form</p>
              <p className='icon' onClick={() => setShowForm(false)}><GrClose /></p>
            </div>
            <form className='forms' onSubmit={handleSubmit}>
              <div className='sub'>
                <label className='depart'>Department</label>
                <select 
                  id="depart-select" 
                  value={department} 
                  onChange={handleDepartmentChange}
                >
                  <option value="">Select type</option>
                  <option value="design1">Design 1</option>
                  <option value="design2">Design 2</option>
                  <option value="design3">Design 3</option>
                </select>
                {errors.department && <p className="error">{errors.department}</p>}
              </div>
              <div className='sub'>
                <label className='depart'>Category</label>
                <select 
                  id="depart-select" 
                  value={category} 
                  onChange={handleCategoryChange}
                >
                  <option value="">Select type</option>
                  <option value="design1">Design 1</option>
                  <option value="design2">Design 2</option>
                  <option value="design3">Design 3</option>
                </select>
                {errors.category && <p className="error">{errors.category}</p>}
              </div>
              <div className='sub'>
                <label className='depart'>Heading</label>
                <select 
                  id="depart-select" 
                  value={heading} 
                  onChange={handleHeadingChange}
                >
                  <option value="">Select type</option>
                  <option value="design1">Design 1</option>
                  <option value="design2">Design 2</option>
                  <option value="design3">Design 3</option>
                </select>
                {errors.heading && <p className="error">{errors.heading}</p>}
              </div>
              <div className='sub'>
                <label className='depart'>Form No</label>
                <select 
                  id="depart-select" 
                  value={formNo} 
                  onChange={handleFormNoChange}
                >
                  <option value="">Select type</option>
                  <option value="design1">Design 1</option>
                  <option value="design2">Design 2</option>
                  <option value="design3">Design 3</option>
                </select>
                {errors.formNo && <p className="error">{errors.formNo}</p>}
              </div>
              <button className='btn' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
