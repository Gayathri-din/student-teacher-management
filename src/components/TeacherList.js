// src/components/TeacherList.js
import React, { useState, useEffect } from 'react';
import AddEditTeacher from './AddEditTeacher';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [editingTeacher, setEditingTeacher] = useState(null);

    useEffect(() => {
        // Fetch teachers from API or local storage
        setTeachers([
            { id: 1, name: 'Kalpana', subject: 'Math' },
            { id: 2, name: 'manoharan', subject: 'Science' }
        ]);
    }, []);

    const addTeacher = (teacher) => {
        setTeachers([...teachers, { id: teachers.length + 1, ...teacher }]);
    };

    const editTeacher = (updatedTeacher) => {
        setTeachers(teachers.map(teacher => teacher.id === updatedTeacher.id ? updatedTeacher : teacher));
        setEditingTeacher(null);
    };

    const deleteTeacher = (id) => {
        setTeachers(teachers.filter(teacher => teacher.id !== id));
    };

    return (
        <div>
            <h2>Teacher List</h2>
            <AddEditTeacher 
                teacher={editingTeacher} 
                onSave={editingTeacher ? editTeacher : addTeacher} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher.id}>
                            <td>{teacher.name}</td>
                            <td>{teacher.subject}</td>
                            <td>
                                <button onClick={() => setEditingTeacher(teacher)}>Edit</button>
                                <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
