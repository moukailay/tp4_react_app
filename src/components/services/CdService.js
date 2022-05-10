import axios from 'axios'

const CD_BASE_REST_API_URL = 'http://localhost:8080/cd';

    
    const getAllCds = () => {
        return axios.get(CD_BASE_REST_API_URL)
    }

    const createCd = (cd) => {
        return axios.post(CD_BASE_REST_API_URL, cd)
    }

    const getCdById = (cdId) => {
        return axios.get(CD_BASE_REST_API_URL + '/' + cdId);
    }

    const updateCd = (cdId, cd) => {
        return axios.put(CD_BASE_REST_API_URL + '/' +cdId, cd);
    }

    const deleteCd = (cdId) => {
        return axios.delete(CD_BASE_REST_API_URL + '/' + cdId);
    }

    
export default {getAllCds, createCd, getCdById, updateCd, deleteCd}