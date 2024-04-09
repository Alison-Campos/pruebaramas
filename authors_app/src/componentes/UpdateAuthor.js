import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateAuthor({ author, onClose }) {
    const [formData, setFormData] = useState(author);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:44355/api/Authors/${author.au_id}`, formData);
            alert("Author updated successfully");
            onClose();
        } catch (error) {
            console.error("Error updating author:", error);
        }
    };

    return (
        <div>
            <h2>Update Author</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="au_id">ID:</label>
                    <input type="text" name="au_id" value={formData.au_id} readOnly />
                </div>
                <div>
                    <label htmlFor="au_lname">First Name:</label>
                    <input type="text" name="au_lname" value={formData.au_lname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="au_fname">Second Name:</label>
                    <input type="text" name="au_fname" value={formData.au_fname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="zip">Zip:</label>
                    <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="contract">Contract:</label>
                    <input type="text" name="contract" value={formData.contract} onChange={handleChange} />
                </div>
                <div>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateAuthor;