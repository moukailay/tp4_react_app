import axios from 'axios'

const CD_BASE_REST_API_URL = 'http://localhost:8080/cd';

class CdService{

    getAllCds(){
        return axios.get(CD_BASE_REST_API_URL)
    }

    createCd(cd){
        return axios.post(CD_BASE_REST_API_URL, cd) 
    }
 
    getCdById(cdId){
        return axios.get(CD_BASE_REST_API_URL + '/' + cdId);
    }
 
    updateCd(cdId, cd){
        return axios.put(CD_BASE_REST_API_URL + '/' +cdId, cd);
    }

    deleteCd(cdId){
        return axios.delete(CD_BASE_REST_API_URL + '/' + cdId);
    }

    
}

export default new CdService();