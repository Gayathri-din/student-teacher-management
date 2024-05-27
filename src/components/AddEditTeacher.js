// src/components/AddEditTeacher.js
import React, { useState, useEffect } from 'react';

const AddEditTeacher = ({ teacher, onSave }) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    useEffect(() => {
        if (teacher) {
            setName(teacher.name);
            setSubject(teacher.subject);
        } else {
            setName('');
            setSubject('');
        }
    }, [teacher]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacherData = { id: teacher ? teacher.id : null, name, subject };
        onSave(teacherData);
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
                type="text" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                placeholder="Subject" 
                required 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default AddEditTeacher;
