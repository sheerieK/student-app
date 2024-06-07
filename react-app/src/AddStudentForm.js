import axios from "axios";
import React, { useState } from "react";
import './css/addStudent.css';

const AddStudentForm = ({onStudentAdded}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");


  const handleSubmit  = async (e)=>{
    e.preventDefault();

    if (!name || !age || !grade) {
        window.alert('All fields are required');
        return;
    }


    try {
        const newStudent = { name, age: parseInt(age), grade: parseInt(grade) };
        const response = await axios.post('http://localhost:3001/api/students', newStudent);
        onStudentAdded(response.data); // Notify parent component of the new student addition
        setName('');
        setAge('');
        setGrade('');
    } catch (error) {
        console.error('Error adding student:', error);
    }
};
 

  return (
    <>
        <h2>Add Student</h2>
    <form class = "add-student" onSubmit={handleSubmit } >
      <div className="input-field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="input-field">
        <label>Grade:</label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
    </>
  )
};

export default AddStudentForm;
