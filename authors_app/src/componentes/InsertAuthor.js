import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const InsertAuthor = () => {

  const [au_id, setAu_id] = useState("");
  const [au_lname, setAu_lname] = useState("");
  const [au_fname, setAu_fname] = useState("");
  const [phone, setAu_phone] = useState("");
  const [address, setAu_address] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [contract, setContract] = useState(false);

 
  async function saveAuthor(event){
    event.preventDefault();
    try{
      await axios.post("https://localhost:44355/api/Authors", {
        au_id,
        au_lname,
        au_fname,
        phone,
        address,
        city,
        state,
        zip,
        contract,
      });
      alert("Author Registration Successfully")
      setAu_id("");
      setAu_lname("");
      setAu_fname("");
      setAu_phone("");
      setAu_address("");
      setCity("");
      setState("");
      setZip("");
      setContract(false); // Resetear a false después de la inserción exitosa
    } catch(err){
      alert(err)
    }
  }
  return (
    <div className="container">
        <form>
          <div className="mb-3">
            <label for="id" className="form-label">ID</label>
            <input 
            type="text"
             className="form-control" 
             id="id"
             value = {au_id}
             onChange={(event) => {
              setAu_id(event.target.value);
             }}
             />
          </div>
          <div className="mb-3">
            <label for="firtsName" className="form-label">First Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="firtsName"
            value = {au_lname}
            onChange={(event) => {
             setAu_lname(event.target.value);
            }}
            />
          </div>
          <div className="mb-3">
            <label for="secondName" className="form-label">Second Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="secondName"
            value = {au_fname}
            onChange={(event) => {
             setAu_fname(event.target.value);
            }}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
            <input 
            type="text" 
            className="form-control" 
            id="phone" 
            value = {phone}
            onChange={(event) => {
             setAu_phone(event.target.value);
            }}
            />
          </div>
          <div className="mb-3">
            <label for="address" className="form-label"> Address</label>
            <input
             type="text"
              className="form-control" 
              id="address" 
              value = {address}
            onChange={(event) => {
             setAu_address(event.target.value);
            }}
              />
          </div>
          <div className="mb-3">
            <label for="city" className="form-label">City</label>
            <input 
            type="text" 
            className="form-control" 
            id="city" 
            value = {city}
            onChange={(event) => {
             setCity(event.target.value);
            }}
            />
          </div>
          <div className="mb-3">
            <label for="state" className="form-label">State</label>
            <input 
            type="text" 
            className="form-control" 
            id="state"
            value = {state}
            onChange={(event) => {
             setState(event.target.value);
            }}
            />
          </div>
          <div className="mb-3">
            <label for="zip" className="form-label">Zip code</label>
            <input
             type="text" 
             className="form-control" 
             id="zip"
             value = {zip}
            onChange={(event) => {
             setZip(event.target.value);
            }}
             />
          </div>
          <div className="mb-3">
  <label htmlFor="contract" className="form-label">Contract</label>
  <input 
    type="checkbox"
    className="form-check-input" 
    id="contract"
    checked={contract} // Usamos checked para manejar el estado de un checkbox
    onChange={(event) => {
      setContract(event.target.checked); // Convertimos el valor del checkbox a booleano
    }}
  />
</div>
        <Button variant="contained" color="success" type="submit" onClick={saveAuthor}>
        Success
      </Button>         
        </form>
    </div>
  );
}

export default InsertAuthor;