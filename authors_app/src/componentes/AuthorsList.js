import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateAuthorForm from '../componentes/UpdateAuthor'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Header from './Header';
import { DataGrid } from '@mui/x-data-grid';

function AuthorsList() {

    const [authors, setAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
   
    const rows =[
        {field: 'au_id', headerName: 'Id', width: 70, editable: true},
        {field: 'au_lname', headerName: 'Id', width: 70, editable: true},
        {field: 'au_fname', headerName: 'Id', width: 70, editable: true},
        {field: 'phone', headerName: 'Id', width: 70, editable: true},
        {field: 'address', headerName: 'Id', width: 70, editable: true},
        {field: 'city', headerName: 'Id', width: 70, editable: true},
        {field: 'state', headerName: 'Id', width: 70, editable: true},
        {field: 'zip', headerName: 'Id', width: 70, editable: true},
        {field: 'contract', headerName: 'Id', width: 70, editable: true},
        {
            field: 'actions',
            heraderName: 'Actions',
            width: 300,
            renderCell: (param) => (
                <strong>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                         onClick={() => handleUpdateClick(author)}
                        >
                        Update
                     </button>
                     <IconButton aria-label="delete"
                                 type="button" 
                                 className="btn btn-danger"
                                 onClick={ () => deleteAuthor(author.au_id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                </strong>
            ),
        },

    ];

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

    const handleUpdate = (params) =>{
        const updateRows = authors.map((author)=>{
            debugger;
            if( author.au_id === params.au_id){
                return params;
            }
            return author
        })
    }

    async function deleteAuthor(au_id){
        await axios.delete("https://localhost:44355/api/Authors/" + au_id);
        alert("Author deleted Succesfully");
        loadAuthors();
    }

    return (
     <div style={{height:600, width:'96%'}}>
        <Box>
            <DataGrid
                rows={rows}
                colums={colums}
                getRowId={(row) => row.au_id}
                onEditCellChangeCommitted = {handleUpdate}
            
            />

            
        </Box>

     </div>   

        
    );
}

export default AuthorsList;