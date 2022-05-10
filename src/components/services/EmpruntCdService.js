import axios from 'axios'

const EMPRUNT_CD_BASE_REST_API_URL = 'http://localhost:8080/empruntCd';
const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/client';
const CD_DISPO_BASE_REST_API_URL = 'http://localhost:8080/cdDispo';

class EmpruntCdService{

  getAllEmpruntCds(){
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL);
  }

  createEmpruntCd(clientId,cdId){
    return axios.post('http://localhost:8080/saveEmprunt'  + '/'+clientId+ '/'+cdId);
  }

  getEmpruntCdById(pretDocumentId){
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL + '/' + pretDocumentId);
  }



  deleteEmpruntCd(pretDocumentId){
    return axios.delete('http://localhost:8080/supEmprunt' + '/' + pretDocumentId);
  }

  getAllClients(){
    return axios.get(CLIENT_BASE_REST_API_URL);
  }

  getAllCdsDispo(){
    return axios.get(CD_DISPO_BASE_REST_API_URL);
  }
}

export default new EmpruntCdService();