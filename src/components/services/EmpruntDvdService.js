import axios from 'axios'

const EMPRUNT_DVD_BASE_REST_API_URL = 'http://localhost:8080/empruntDvd';
const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/client';
const DVD_DISPO_BASE_REST_API_URL = 'http://localhost:8080/dvdDispo';


  const getAllEmpruntDvds = () => {
    return axios.get(EMPRUNT_DVD_BASE_REST_API_URL);
  }

  const createEmpruntDvd = (clientId,dvdId) => {
    return axios.post('http://localhost:8080/saveEmprunt'  + '/'+clientId+ '/'+dvdId);
  }

  const getEmpruntDvdById = () => {
    return axios.get(EMPRUNT_DVD_BASE_REST_API_URL + '/' + pretDocumentId);
  }
  
  const deleteEmpruntDvd = () => {
    return axios.delete('http://localhost:8080/supEmprunt' + '/' + pretDocumentId);
  }

  const getAllClients = () => {
    return axios.get(CLIENT_BASE_REST_API_URL);
  }

  const getAllDvdsDispo = () => {
    return axios.get(DVD_DISPO_BASE_REST_API_URL);
  }

export default {getAllEmpruntDvds, createEmpruntDvd, getEmpruntDvdById, deleteEmpruntDvd, getAllClients, getAllDvdsDispo};