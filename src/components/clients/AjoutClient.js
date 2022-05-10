import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import ClientService from '../services/ClientService'

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

    return (
        <div>

        </div>
    );
};

export default AjoutClient;
