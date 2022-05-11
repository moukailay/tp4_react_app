import axios from 'axios'

const DVD_BASE_REST_API_URL = 'http://localhost:8080/dvd';

class DvdService{

    getAllDvds(){
        return axios.get(DVD_BASE_REST_API_URL)
    }

    createDvd(dvd){
        return axios.post(DVD_BASE_REST_API_URL, dvd)
    }
 
    getDvdById(dvdId){
        return axios.get(DVD_BASE_REST_API_URL + '/' + dvdId);
    }
 
    updateDvd(dvdId, dvd){
        return axios.put(DVD_BASE_REST_API_URL + '/' +dvdId, dvd);
    }

    deleteDvd(dvdId){
        return axios.delete(DVD_BASE_REST_API_URL + '/' + dvdId);
    }
}

export default new DvdService();