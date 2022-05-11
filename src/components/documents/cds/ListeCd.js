import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import CdService from '../../services/CdService';
const ListeCd = () => {
  
    const [cds, setCds] = useState([])
   
    useEffect(() => {

        getAllCds();
    }, [])

    const getAllCds = () => {
        CdService.getAllCds().then((response) => {
            setCds(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteCd = (cdId) => {
        CdService.deleteCd(cdId).then((response) =>{
            getAllCds();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste des CD </h2>
            <Link to = "/ajout-cd" className = "btn btn-primary mb-2" > Ajouter nouveau CD </Link>
                    <table className="table table-bordered table-striped">
                    <thead>
                    <th>ID</th>
                  <th>TITRE</th>
                  <th>AUTEUR</th>
                  <th>EDITEUR</th>
                  <th>DATE PUB</th>
                  <th>CATEGORIE</th>
                  <th>DUREE PRET</th>
                  <th>EXEMPLAIRE</th>
                  <th>DUREE</th>
                    </thead>
                    <tbody>
                        {
                            cds.map(
                                cd =>
                                <tr key = {cd.idDoc}> 
                                    <td>{cd.idDoc}</td>
                 <td>{cd.titre}</td>
                 <td>{cd.auteur}</td>
                 <td>{cd.editeur}</td>
                 <td>{cd.datePub}</td>
                 <td>{cd.genre}</td>
                 <td>{cd.dureeMaxPret}</td>
                 <td>{cd.nbExemplaire}</td>
                 <td>{cd.duree}</td>

                                    <td>
                                        <Link className="btn btn-info" to={`/modifie-cd/${cd.idDoc}`} >modifier</Link>
                                        <button className = "btn btn-danger" onClick = {() => deleteCd(cd.idDoc)}
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

export default ListeCd
