import axios from 'axios'
const BASE='http://localhost:8080';
const EMPRUNT_DVD_BASE_REST_API_URL = BASE +'/empruntDvd';
const CLIENT_BASE_REST_API_URL = BASE +'/client';
const DVD_DISPO_BASE_REST_API_URL = BASE +'/dvdDispo';

class EmpruntDvdService{

    getAllEmpruntDvds(){
        return axios.get(EMPRUNT_DVD_BASE_REST_API_URL);
    }
 
    createEmpruntDvd(clientId,dvdId){
        return axios.post(BASE +'/saveEmprunt'  + '/'+clientId+ '/'+dvdId);
    }
 
    getEmpruntDvdById(pretDocumentId){
        return axios.get(EMPRUNT_DVD_BASE_REST_API_URL + '/' + pretDocumentId);
    }
 
   

    deleteEmpruntDvd(pretDocumentId){
        return axios.delete(BASE +'/supEmprunt' + '/' + pretDocumentId);
    }

    getAllClients(){
        return axios.get(CLIENT_BASE_REST_API_URL);
    }

    getAllDvdsDispo(){
        return axios.get(DVD_DISPO_BASE_REST_API_URL);
    }
}

export default new EmpruntDvdService();