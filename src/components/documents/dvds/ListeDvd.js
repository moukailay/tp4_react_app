import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import DvdService from '../../services/DvdService';
const ListeDvd = () => {
  
    const [dvds, setDvds] = useState([])
   
    useEffect(() => {

        getAllDvds();
    }, [])

    const getAllDvds = () => {
        DvdService.getAllDvds().then((response) => {
            setDvds(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDvd = (dvdId) => {
        DvdService.deleteDvd(dvdId).then((response) =>{
            getAllDvds();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste des DVD </h2>
            <Link to = "/ajout-dvd" className = "btn btn-primary mb-2" > Ajouter nouveau DVD </Link>
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
                            dvds.map(
                                dvd =>
                                <tr key = {dvd.idDoc}> 
                                    <td>{dvd.idDoc}</td>
                 <td>{dvd.titre}</td>
                 <td>{dvd.auteur}</td>
                 <td>{dvd.editeur}</td>
                 <td>{dvd.datePub}</td>
                 <td>{dvd.genre}</td>
                 <td>{dvd.dureeMaxPret}</td>
                 <td>{dvd.nbExemplaire}</td>
                 <td>{dvd.duree}</td>

                                    <td>
                                        <Link className="btn btn-info" to={`/modifie-dvd/${dvd.idDoc}`} >modifier</Link>
                                        <button className = "btn btn-danger" onClick = {() => deleteDvd(dvd.idDoc)}
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

export default ListeDvd
