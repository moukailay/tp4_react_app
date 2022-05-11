import axios from 'axios'

const LIVRE_BASE_REST_API_URL = 'http://localhost:8080/livre';

class LivreService{

    getAllLivres(){
        return axios.get(LIVRE_BASE_REST_API_URL)
    }

    createLivre(livre){
        return axios.post(LIVRE_BASE_REST_API_URL, livre)
    }
 
    getLivreById(livreId){
        return axios.get(LIVRE_BASE_REST_API_URL + '/' + livreId);
    }
 
    updateLivre(livreId, livre){
        return axios.put(LIVRE_BASE_REST_API_URL + '/' +livreId, livre);
    }

    deleteLivre(livreId){
        return axios.delete(LIVRE_BASE_REST_API_URL + '/' + livreId);
    }

    
}

export default new LivreService();