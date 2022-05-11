import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import LivreService from '../../services/LivreService';


const AjoutLivre = () => {

   
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [nbExemplaire, setNbExemplaire] = useState('')
    const [datePub, setDatePub] = useState('')
    const [genre, setGenre] = useState('')
    const [dureeMaxPret, setdureeMaxPret] = useState('')
    const [nbPages, setNbPages] = useState('')

   
    const {id} = useParams();

    const saveOrUpdateLivre = (e) => {
        e.preventDefault();

        const livre = {titre, auteur, editeur,nbExemplaire,datePub,genre,dureeMaxPret,nbPages}

        if(id){
            LivreService.updateLivre(id, livre).then((response) => {
             
            
            }).catch(error => {
                console.log(error)
            })

        }else{
            LivreService.createLivre(livre).then((response) =>{

                console.log(response.data)
    
            
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        LivreService.getLivreById(id).then((response) =>{
            setTitre(response.data.titre)
            setAuteur(response.data.auteur)
            setEditeur(response.data.editeur)
            setNbExemplaire(response.data.nbExemplaire)
            setDatePub(response.data.datePub)
            setGenre(response.data.genre)
            setdureeMaxPret(response.data.dureeMaxPret)
            setNbPages(response.data.nbPages)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Modification Livre</h2>
        }else{
            return <h2 className = "text-center">Ajout Livre</h2>
        }
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
                                    <label className = "form-label">  Titre :</label>
                                    <input
                                        type = "text"
                                        placeholder = "titre du livre"
                                        name = "titre"
                                        className = "form-control"
                                        value = {titre}
                                        onChange = {(e) => setTitre(e.target.value)}
                                    />
                                    
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Auteur :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Auteur du livre"
                                        name = "auteur"
                                        className = "form-control"
                                        value = {auteur}
                                        onChange = {(e) => setAuteur(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Editeur :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Editeurdu livre"
                                        name = "editeur"
                                        className = "form-control"
                                        value = {editeur}
                                        onChange = {(e) => setEditeur(e.target.value)}
                                    />
                                    
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date publication :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Date publication du livre"
                                        name = "datePub"
                                        className = "form-control"
                                        value = {datePub}
                                        onChange = {(e) => setDatePub(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Catégorie:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Genre du livre"
                                        name = "genre"
                                        className = "form-control"
                                        value = {genre}
                                        onChange = {(e) => setGenre(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre d'exemplaires :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Nombre d'exemplaire du livre"
                                        name = "nbExemplaire"
                                        className = "form-control"
                                        value = {nbExemplaire}
                                        onChange = {(e) => setNbExemplaire(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre de pages :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Nombre total des pages du livre"
                                        name = "nbPages"
                                        className = "form-control"
                                        value = {nbPages}
                                        onChange = {(e) => setNbPages(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Durée du prêt :</label>
                                    <input
                                        type = "number"
                                        placeholder = "durée du prêt 21 jours"
                                        name = "dureeMaxPret"
                                        className = "form-control"
                                        value = {dureeMaxPret}
                                        onChange = {(e) => setdureeMaxPret(e.target.value)}
                                    />
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateLivre(e)} >Enregistrer </button>
                                <Link to="/livre" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AjoutLivre
