import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import EmpruntLivreService from '../../services/EmpruntLivreService';

const ListeEmpruntLivre = () => {
  
    const [empruntLivres, setEmpruntLivres] = useState([])
   
    useEffect(() => {

        getAllEmpruntLivres();
    }, [])

    const getAllEmpruntLivres = () => {
        EmpruntLivreService.getAllEmpruntLivres().then((response) => {
            setEmpruntLivres(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteEmpruntLivre = (pretDocumentId) => {
        EmpruntLivreService.deleteEmpruntLivre(pretDocumentId).then((response) =>{
            getAllEmpruntLivres();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste des livres empruntés </h2>
            <Link to = "/ajout-empruntLivre" className = "btn btn-primary mb-2" > Ajouter nouvel emprunt </Link>
                    <table className="table table-bordered table-striped">
                    <thead>
                    <th>ID</th>
                    <th>NOM CLIENT</th>
                  <th>PRENOM CLIENT</th>
                  <th>TITRE DU LIVRE</th>
                  <th>AUTEUR</th>
                  <th>DATE PRET</th>
                  <th>DATE RETOUR</th>
                  <th>CONFIRMER RETOUR</th>
                    </thead>
                    <tbody>
                        {
                            empruntLivres.map(
                                pretDocument =>
                                <tr key = {pretDocument.idPret}> 
                                    <td>{pretDocument.idPret}</td>
                 <td>{pretDocument.client.nom}</td>
                 <td>{pretDocument.client.prenom}</td>
                 <td>{pretDocument.document.titre}</td>
                 <td>{pretDocument.document.auteur}</td>
                 <td>{pretDocument.datePret}</td>
                 <td>{pretDocument.dateRetour}</td>
                

                                    <td>
                                        
                                        <button className = "btn btn-danger" onClick = {() => deleteEmpruntLivre(pretDocument.idPret)}
                                        style = {{marginLeft:"10px"}}> Confirmer</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default ListeEmpruntLivre
