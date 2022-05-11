import axios from 'axios'
const BASE='http://localhost:8080';
const EMPRUNT_LIVRE_BASE_REST_API_URL = BASE +'/empruntLivre';
const CLIENT_BASE_REST_API_URL = BASE +'/client';
const LIVRE_DISPO_BASE_REST_API_URL = BASE +'/livreDispo';

class EmpruntLivreService{

    getAllEmpruntLivres(){
        return axios.get(EMPRUNT_LIVRE_BASE_REST_API_URL);
    }
 
    createEmpruntLivre(clientId,livreId){
        return axios.post(BASE +'/saveEmprunt' + '/'+clientId+ '/'+livreId);
    }
 
    getEmpruntLivreById(pretDocumentId){
        return axios.get(EMPRUNT_LIVRE_BASE_REST_API_URL + '/' + pretDocumentId);
    }
 
   

    deleteEmpruntLivre(pretDocumentId){
        return axios.delete(BASE +'/supEmprunt' + '/' + pretDocumentId);
    }

    getAllClients(){
        return axios.get(CLIENT_BASE_REST_API_URL);
    }

    getAllLivresDispo(){
        return axios.get(LIVRE_DISPO_BASE_REST_API_URL);
    }
}

export default new EmpruntLivreService();