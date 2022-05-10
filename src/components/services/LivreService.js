import httpClient from "../ConfigAxios"

const getAllLivres = () => {
    return httpClient.get(`/Livre`)
}

const createLivre = (livre) => {
    return httpClient.post("/Livre", livre)
}

const getLivreById = (livreId) => {
    return httpClient.get(`/Livre/${livreId}`)
}

const updateLivre = (livreId, livre) => {
    return httpClient.put("/Livre", livreId, livre)
}

const deleteLivre = (livreId) => {
    return httpClient.delete(`/Livre/${livreId}`)
}