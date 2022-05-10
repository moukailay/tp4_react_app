import axios from 'axios'

const DVD_BASE_REST_API_URL = 'http://localhost:8082/DVD';


const getAllDvds = () => {
    return axios.get(DVD_BASE_REST_API_URL)
}

const createDvd = (dvd) => {
    return axios.post(DVD_BASE_REST_API_URL, dvd)
}

const getDvdById = (dvdId) => {
    return axios.get(DVD_BASE_REST_API_URL + '/' + dvdId);
}

const updateDvd = (dvdId, dvd) => {
    return axios.put(DVD_BASE_REST_API_URL + '/' +dvdId, dvd);
}

const deleteDvd = (dvdId) => {
    return axios.delete(DVD_BASE_REST_API_URL + '/' + dvdId);
}


export default {getAllDvds, createDvd, getDvdById, updateDvd, deleteDvd}