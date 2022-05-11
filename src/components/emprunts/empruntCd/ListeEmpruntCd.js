import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import EmpruntCdService from '../../services/EmpruntCdService';


const ListeEmpruntCd = () => {
  
    const [empruntCds, setEmpruntCds] = useState([])
   
    useEffect(() => {

        getAllEmpruntCds();
    }, [])

    const getAllEmpruntCds = () => {
        EmpruntCdService.getAllEmpruntCds().then((response) => {
            setEmpruntCds(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteEmpruntCd = (pretDocumentId) => {
        EmpruntCdService.deleteEmpruntCd(pretDocumentId).then((response) =>{
            getAllEmpruntCds();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste des CD empruntés </h2>
            <Link to = "/ajout-empruntCd" className = "btn btn-primary mb-2" > Ajouter nouvel emprunt </Link>
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
                            empruntCds.map(
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
                                        
                                        <button className = "btn btn-danger" onClick = {() => deleteEmpruntCd(pretDocument.idPret)}
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

export default ListeEmpruntCd
