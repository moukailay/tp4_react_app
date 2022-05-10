import axios from 'axios'

const CLIENT_BASE_REST_API_URL = 'http://localhost:8082/client';

      const getAllClients = () => {
        return axios.get(CLIENT_BASE_REST_API_URL)
      }
    
      const createClient = (client) => {
        return axios.post(CLIENT_BASE_REST_API_URL, client)
      }
    
      const getClientById = (clientId) => {
        return axios.get(CLIENT_BASE_REST_API_URL + '/' + clientId);
      }
    
      const updateClient = (clientId, client) => {
        return axios.put(CLIENT_BASE_REST_API_URL + '/' +clientId, client);
      }
    
      const deleteClient = (clientId) => {
        return axios.delete(CLIENT_BASE_REST_API_URL + '/' + clientId);
      }



export default {getAllClients, createClient, getClientById, updateClient, deleteClient};