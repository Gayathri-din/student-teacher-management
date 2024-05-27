// src/components/AddEditStudent.js
import React, { useState, useEffect } from 'react';

const AddEditStudent = ({ student, onSave }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        if (student) {
            setName(student.name);
            setAge(student.age);
        } else {
            setName('');
            setAge('');
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = { id: student ? student.id : null, name, age };
        onSave(studentData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
                required 
            />
            <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Age" 
                required 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default AddEditStudent;
