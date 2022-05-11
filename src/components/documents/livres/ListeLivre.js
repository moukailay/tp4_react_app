import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import LivreService from '../../services/LivreService';
const ListeLivre = () => {
  
    const [livres, setLivres] = useState([])
   
    useEffect(() => {

        getAllLivres();
    }, [])

    const getAllLivres = () => {
        LivreService.getAllLivres().then((response) => {
            setLivres(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteLivre = (livreId) => {
        LivreService.deleteLivre(livreId).then((response) =>{
        getAllLivres();
        
       }).catch(error =>{
           console.log(error);
       })
        
    }

  

    

    return (
        <div className = "container">
            <h2 className = "text-center"> Liste des livres </h2>
            <Link to = "/ajout-livre" className = "btn btn-primary mb-2" > Ajouter nouveau livre </Link>
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
                  <th>NOMBRE PAGE</th>
                    </thead>
                    <tbody>
                        {
                            livres.map(
                                livre =>
                                <tr key = {livre.idDoc}> 
                                    <td>{livre.idDoc}</td>
                 <td>{livre.titre}</td>
                 <td>{livre.auteur}</td>
                 <td>{livre.editeur}</td>
                 <td>{livre.datePub}</td>
                 <td>{livre.genre}</td>
                 <td>{livre.dureeMaxPret}</td>
                 <td>{livre.nbExemplaire}</td>
                 <td>{livre.nbPages}</td>

                                    <td>
                                        <Link className="btn btn-info" to={`/modifie-livre/${livre.idDoc}`} >modifier</Link>
                                        <button className = "btn btn-danger" onClick = {() => deleteLivre(livre.idDoc)}
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

export default ListeLivre
