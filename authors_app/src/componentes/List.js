import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateAuthorForm from '../componentes/UpdateAuthor'

function List() {

    const [authors, setAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
   
    useEffect(() => {
        loadAuthors();
    }, []);

    async function loadAuthors() {
        try {
            const result = await axios.get("https://localhost:44355/api/Authors");
            setAuthors(result.data);
        } catch (error) {
            console.error("Error loading authors:", error);
        }
    }

    const handleUpdateClick = (author) => {
        setSelectedAuthor(author);
        setShowUpdateForm(true);
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
    };

    async function deleteAuthor(au_id){
        await axios.delete("https://localhost:44355/api/Authors/" + au_id);
        alert("Author deleted Succesfully");
        loadAuthors();
    }

    return (
        <div class="container">
            {showUpdateForm && selectedAuthor && (
                <UpdateAuthorForm author={selectedAuthor} onClose={handleCloseUpdateForm} />
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Contract</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author.au_id}>
                            <td scope='row'>{author.au_id}</td>
                            <td>{author.au_lname}</td>
                            <td>{author.au_fname}</td>
                            <td>{author.phone}</td>
                            <td>{author.address}</td>
                            <td>{author.city}</td>
                            <td>{author.state}</td>
                            <td>{author.zip}</td>
                            <td>{author.contract}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-warning"
                                    onClick={() => handleUpdateClick(author)}
                                >
                                    Update
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={ () => deleteAuthor(author.au_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default List;