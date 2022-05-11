import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import EmpruntLivreService from '../../services/EmpruntLivreService';



const AjoutEmpruntLivre= () => {

   
    const [clientId, setClientId] = useState('')
    const [livreId, setLivreId] = useState('')
    const [clients, setClients] = useState([])
    const [livreDispo, setLivreDispo] = useState([])
    const {id} = useParams();

    
   
    useEffect(() => {

        getAllClients();
        getAllLivresDispo();
    }, [])

    const getAllClients = () => {
        EmpruntLivreService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const getAllLivresDispo = () => {
        EmpruntLivreService.getAllLivresDispo().then((response) => {
            setLivreDispo(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const saveOrUpdateEmpruntLivre = (e) => {
        e.preventDefault();

       

        if(id){
         

        }else{
            EmpruntLivreService.createEmpruntLivre(clientId,livreId).then((response) =>{

                console.log(response.data)
       
            
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    

    const title = () => {

       
            return <h2 className = "text-center">Ajout Emprunt Livre</h2>
        
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
                                    <select className="form-control" id="livre" name="livreId" 
                                         value={livreId}
                            
                                         onChange= {(e) => setLivreId(e.target.value)}
                                         >
                                       <option value="0">Selectionnez un livre disponible</option>
                                       {
                        livreDispo.map(
                            livre =>
                                       <option value={livre.idDoc} >{livre.auteur} {livre.titre} </option>
                        )}
                                    </select>
                                    
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmpruntLivre(e)} >Enregistrer </button>
                                <Link to="/empruntLivre" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AjoutEmpruntLivre
