import React, {useState, useEffect} from 'react'

import ClientService from '../services/ClientService'
import {Link } from 'react-router-dom';
const ListeClient = () => {
  
    const [clients, setClients] = useState([])
   
    useEffect(() => {
        getAllClients();
    }, [])

    const getAllClients = () => {
        ClientService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteClient = (clientId) => {
        ClientService.deleteClient(clientId).then((response) =>{
        getAllClients();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste Client </h2>
            <Link to = "/ajout-client" className = "btn btn-primary mb-2" > Ajouter nouveau client </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> ID </th>
                    <th> NOM </th>
                    <th> PRENOM </th>
                    <th> ADRESSE </th>
                    <th> OPERATIONS </th>
                </thead>
                <tbody>
                    {
                        clients.map(
                            client =>
                            <tr key = {client.idUser}> 
                                <td> {client.idUser} </td>
                                <td> {client.nom} </td>
                                <td>{client.prenom}</td>
                                <td>{client.adresse}</td>
                                 <td>
                                    <Link className="btn btn-info" to={`/modifie-client/${client.idUser}`} >modifier</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteClient(client.idUser)}
                                    style = {{marginLeft:"10px"}}> Supprimer</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    ) 
}

export default ListeClient
