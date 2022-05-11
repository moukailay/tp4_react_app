import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import EmpruntDvdService from '../../services/EmpruntDvdService';




const AjoutEmpruntDvd = () => {

   
    const [clientId, setClientId] = useState('')
    const [dvdId, setDvdId] = useState('')
    const [clients, setClients] = useState([])
    const [dvdDispo, setDvdDispo] = useState([])
    const {id} = useParams();

    
   
    useEffect(() => {

        getAllClients();
        getAllDvdsDispo();
    }, [])

    const getAllClients = () => {
        EmpruntDvdService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const getAllDvdsDispo = () => {
        EmpruntDvdService.getAllDvdsDispo().then((response) => {
            setDvdDispo(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const saveOrUpdateEmpruntDvd = (e) => {
        e.preventDefault();

       

        if(id){
         

        }else{
            EmpruntDvdService.createEmpruntDvd(clientId,dvdId).then((response) =>{

                console.log(response.data)
       
            
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    

    const title = () => {

       
            return <h2 className = "text-center">Ajout Emprunt DVD</h2>
        
    }
    


    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Nom et prénom du client :</label>
                                    <select className="form-control" id="client" name="idClient" 
                                         value={clientId}
                            
                                         onChange= {(e) => setClientId(e.target.value)}
                                         >
                                       <option value="0">Selectionnez un client</option>
                                       {
                        clients.map(
                            client =>
                                       <option value={client.idUser} >{client.nom} {client.prenom} </option>
                        )}
                                    </select>
                                    
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Auteur et titre du livre :</label>
                                    <select className="form-control" id="dvd" name="dvdId" 
                                         value={dvdId}
                            
                                         onChange= {(e) => setDvdId(e.target.value)}
                                         >
                                       <option value="0">Selectionnez un dvd disponible</option>
                                       {
                        dvdDispo.map(
                            dvd =>
                                       <option value={dvd.idDoc} >{dvd.auteur} {dvd.titre} </option>
                        )}
                                    </select>
                                    
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmpruntDvd(e)} >Enregistrer </button>
                                <Link to="/empruntDvd" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AjoutEmpruntDvd
