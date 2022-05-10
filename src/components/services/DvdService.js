import httpClient from "../ConfigAxios"

const getAllDvds = () => {
    return httpClient.get(`/Dvd`)
}

const createDvd = (Dvd) => {
    return httpClient.post("/Dvd", Dvd)
}

const getDvdById = (DvdId) => {
    return httpClient.get(`/Dvd/${DvdId}`)
}

const updateDvd = (DvdId, Dvd) => {
    return httpClient.put("/Dvd", DvdId, Dvd)
}

const deleteDvd = (DvdId) => {
    return httpClient.delete(`/Dvd/${DvdId}`)
}