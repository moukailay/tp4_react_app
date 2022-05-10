import axios from 'axios'

const LIVRE_BASE_REST_API_URL = 'http://localhost:8080/livre';


const getAllLivres = () => {
    return axios.get(LIVRE_BASE_REST_API_URL)
}

const createLivre = (livre) => {
    return axios.post(LIVRE_BASE_REST_API_URL, livre)
}

const getLivreById = (livreId) => {
    return axios.get(LIVRE_BASE_REST_API_URL + '/' + livreId);
}

const updateLivre = (livreId, livre) => {
    return axios.put(LIVRE_BASE_REST_API_URL + '/' +livreId, livre);
}

const deleteLivre = (livreId) => {
    return axios.delete(LIVRE_BASE_REST_API_URL + '/' + livreId);
}


export default {getAllLivres, createLivre, getLivreById, updateLivre, deleteLivre}