import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudentForm from "./AddStudentForm";
import "./css/studentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //api call to get the data
        const response = await axios.get("http://localhost:3001/api/students");
        console.log(response.data);

        // update student
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleStudentAdded = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  return (
    <div>
      <AddStudentForm onStudentAdded={handleStudentAdded} />
      <h1>StudentList</h1>
      <ul>
        {students.map((student) => (
          <li className="student-list">
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
