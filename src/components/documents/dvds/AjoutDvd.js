import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import DvdService from '../../services/DvdService';


const AjoutDvd = () => {

   
    const [titre, setTitre] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [nbExemplaire, setNbExemplaire] = useState('')
    const [datePub, setDatePub] = useState('')
    const [genre, setGenre] = useState('')
    const [dureeMaxPret, setdureeMaxPret] = useState('')
    const [duree, setDuree] = useState('')

   
    const {id} = useParams();

    const saveOrUpdateDvd = (e) => {
        e.preventDefault();

        const dvd = {titre, auteur, editeur,nbExemplaire,datePub,genre,dureeMaxPret,duree}

        if(id){
            DvdService.updateDvd(id, dvd).then((response) => {
             
            
            }).catch(error => {
                console.log(error)
            })

        }else{
            DvdService.createDvd(dvd).then((response) =>{

                console.log(response.data)
    
             
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        DvdService.getDvdById(id).then((response) =>{
            setTitre(response.data.titre)
            setAuteur(response.data.auteur)
            setEditeur(response.data.editeur)
            setNbExemplaire(response.data.nbExemplaire)
            setDatePub(response.data.datePub)
            setGenre(response.data.genre)
            setdureeMaxPret(response.data.dureeMaxPret)
            setDuree(response.data.duree)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Modification DVD</h2>
        }else{
            return <h2 className = "text-center">Ajout DVD</h2>
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
                                        placeholder = "titre du dvd"
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
                                        placeholder = "Auteur du dvd"
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
                                        placeholder = "Editeur du dvd"
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
                                        placeholder = "Date publication du dvd"
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
                                        placeholder = "Genre du dvd"
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
                                        placeholder = "Nombre d'exemplaire du dvd"
                                        name = "nbExemplaire"
                                        className = "form-control"
                                        value = {nbExemplaire}
                                        onChange = {(e) => setNbExemplaire(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Durée en minutes :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Durée du dvd"
                                        name = "nbPages"
                                        className = "form-control"
                                        value = {duree}
                                        onChange = {(e) => setDuree(e.target.value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Durée du prêt :</label>
                                    <input
                                        type = "number"
                                        placeholder = "durée du prêt 7 jours"
                                        name = "dureeMaxPret"
                                        className = "form-control"
                                        value = {dureeMaxPret}
                                        onChange = {(e) => setdureeMaxPret(e.target.value)}
                                    />
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDvd(e)} >Enregistrer </button>
                                <Link to="/dvd" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AjoutDvd
