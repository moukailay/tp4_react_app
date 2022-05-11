import {createBrowserHistory} from 'history';
import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import ClientService from '../services/ClientService';

const AjoutClient = () => {
    let navigation = createBrowserHistory();

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [adresse, setAdresse] = useState('')

    const {id} = useParams();

    const saveOrUpdateClient = (e) => {
        e.preventDefault();

        const client = {nom, prenom, adresse}

        if (id) {
            ClientService.updateClient(id, client).then((response) => {


            }).catch(error => {
                console.log(error)
            })

        } else {
            ClientService.createClient(client).then((response) => {

                console.log(response.data)


            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setAdresse(response.data.adresse)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Modification Client</h2>
        } else {
            return <h2 className="text-center">Ajout Client</h2>
        }
    }


    return (
        <div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Nom :</label>
                                    <input
                                        type="text"
                                        placeholder="nom client"
                                        name="nom"
                                        className="form-control"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    />

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Prenom :</label>
                                    <input
                                        type="text"
                                        placeholder="prenom client"
                                        name="prenom"
                                        className="form-control"
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)}
                                    />

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Adresse :</label>
                                    <input
                                        type="text"
                                        placeholder="Adresse client"
                                        name="adresse"
                                        className="form-control"
                                        value={adresse}
                                        onChange={(e) => setAdresse(e.target.value)}
                                    />

                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateClient(e)}>Enregistrer
                                </button>
                                <Link to="/client" className="btn btn-danger"> Annuler </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AjoutClient
