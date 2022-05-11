import axios from 'axios'
const BASE='http://localhost:8080';
const EMPRUNT_CD_BASE_REST_API_URL = BASE +'/empruntCd';
const CLIENT_BASE_REST_API_URL = BASE +'/client';
const CD_DISPO_BASE_REST_API_URL = BASE +'/cdDispo';

class EmpruntCdService{

    getAllEmpruntCds(){
        return axios.get(EMPRUNT_CD_BASE_REST_API_URL);
    }
 
    createEmpruntCd(clientId,cdId){
        return axios.post(BASE +'/saveEmprunt'  + '/'+clientId+ '/'+cdId);
    }
 
    getEmpruntcdById(pretDocumentId){
        return axios.get(EMPRUNT_CD_BASE_REST_API_URL + '/' + pretDocumentId);
    }
 
   

    deleteEmpruntCd(pretDocumentId){
        return axios.delete(BASE +'/supEmprunt' + '/' + pretDocumentId);
    }

    getAllClients(){
        return axios.get(CLIENT_BASE_REST_API_URL);
    }

    getAllCdsDispo(){
        return axios.get(CD_DISPO_BASE_REST_API_URL);
    }
}

export default new EmpruntCdService();