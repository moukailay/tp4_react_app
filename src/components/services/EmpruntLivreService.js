import axios from 'axios'

const EMPRUNT_CD_BASE_REST_API_URL = 'http://localhost:8080/empruntCd';
const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/client';
const CD_DISPO_BASE_REST_API_URL = 'http://localhost:8080/cdDispo';


  const getAllEmpruntLivres = () => {
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL);
  }

  const createEmpruntLivre = (clientId,livreId) => {
    return axios.post('http://localhost:8080/saveEmprunt'  + '/'+clientId+ '/'+livreId);
  }

  const getEmpruntLivreById = (pretDocumentId) => {
    return axios.get(EMPRUNT_CD_BASE_REST_API_URL + '/' + pretDocumentId);
  }
  
  const deleteEmpruntLivre = () => {
    return axios.delete('http://localhost:8080/supEmprunt' + '/' + pretDocumentId);
  }

  const getAllClients = () => {
    return axios.get(CLIENT_BASE_REST_API_URL);
  }

  const getAllLivresDispo = () => {
    return axios.get(CD_DISPO_BASE_REST_API_URL);
  }

export default {getAllEmpruntLivres, createEmpruntLivre, getEmpruntLivreById, deleteEmpruntLivre, getAllClients, getAllLivresDispo};