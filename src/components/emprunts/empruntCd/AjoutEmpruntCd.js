import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import EmpruntCdService from '../../services/EmpruntCdService';




const AjoutEmpruntCd = () => {

   
    const [clientId, setClientId] = useState('')
    const [cdId, setCdId] = useState('')
    const [clients, setClients] = useState([])
    const [cdDispo, setCdDispo] = useState([])
    const {id} = useParams();

    
   
    useEffect(() => {

        getAllClients();
        getAllCdsDispo();
    }, [])

    const getAllClients = () => {
        EmpruntCdService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const getAllCdsDispo = () => {
        EmpruntCdService.getAllCdsDispo().then((response) => {
            setCdDispo(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const saveOrUpdateEmpruntCd = (e) => {
        e.preventDefault();

       

        if(id){
         

        }else{
            EmpruntCdService.createEmpruntCd(clientId,cdId).then((response) =>{

                console.log(response.data)
       
            
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    

    const title = () => {

       
            return <h2 className = "text-center">Ajout Emprunt CD</h2>
        
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
                                    <label className = "form-label">  Auteur et titre du CD :</label>
                                    <select className="form-control" id="cd" name="cdId" 
                                         value={cdId}
                            
                                         onChange= {(e) => setCdId(e.target.value)}
                                         >
                                       <option value="0">Selectionnez un cd disponible</option>
                                       {
                        cdDispo.map(
                            cd =>
                                       <option value={cd.idDoc} >{cd.auteur} {cd.titre} </option>
                        )}
                                    </select>
                                    
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmpruntCd(e)} >Enregistrer </button>
                                <Link to="/empruntCd" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AjoutEmpruntCd
