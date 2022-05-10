import axios from 'axios'

const EMPRUNT_CD_BASE_REST_API_URL = 'http://localhost:8080/empruntCd';
const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/client';
const CD_DISPO_BASE_REST_API_URL = 'http://localhost:8080/cdDispo';


  const getAllEmpruntCds = () => {
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL);
  }

  const createEmpruntCd = (clientId,cdId) => {
    return axios.post('http://localhost:8080/saveEmprunt'  + '/'+clientId+ '/'+cdId);
  }

  const getEmpruntCdById = (pretDocumentId) => {
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL + '/' + pretDocumentId);
  }
  
  const deleteEmpruntCd = () => {
    return axios.delete('http://localhost:8080/supEmprunt' + '/' + pretDocumentId);
  }

  const getAllClients = () => {
    return axios.get(CLIENT_BASE_REST_API_URL);
  }

  const getAllCdsDispo = () => {
    return axios.get(CD_DISPO_BASE_REST_API_URL);
  }

export default {getAllEmpruntCds, createEmpruntCd, getEmpruntCdById, deleteEmpruntCd, getAllClients, getAllCdsDispo};