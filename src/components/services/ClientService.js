import axios from 'axios'

const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/client';

class ClientService{

    getAllClients(){
        return axios.get(CLIENT_BASE_REST_API_URL)
    }

    createClient(client){
        return axios.post(CLIENT_BASE_REST_API_URL, client)
    }
 
    getClientById(clientId){
        return axios.get(CLIENT_BASE_REST_API_URL + '/' + clientId);
    }
 
    updateClient(clientId, client){
        return axios.put(CLIENT_BASE_REST_API_URL + '/' +clientId, client);
    }

    deleteClient(clientId){
        return axios.delete(CLIENT_BASE_REST_API_URL + '/' + clientId);
    }
}

export default new ClientService();