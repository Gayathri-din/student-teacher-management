// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import AddEditStudent from './AddEditStudent';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        // Fetch students from API or local storage
        setStudents([
            { id: 1, name: 'Mani', age: 20 },
            { id: 2, name: 'Saranya', age: 22 }
        ]);
    }, []);

    const addStudent = (student) => {
        setStudents([...students, { id: students.length + 1, ...student }]);
    };

    const editStudent = (updatedStudent) => {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
        setEditingStudent(null);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div>
            <h2>Student List</h2>
            <AddEditStudent 
                student={editingStudent} 
                onSave={editingStudent ? editStudent : addStudent} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <button onClick={() => setEditingStudent(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
