import httpCd from "../ConfigAxios"

const getAllCds = () => {
    return httpCd.get(`/Cd`)
}

const createCd = (Cd) => {
    return httpCd.post("/Cd", Cd)
}

const getCdById = (CdId) => {
    return httpCd.get(`/Cd/${CdId}`)
}

const updateCd = (CdId, Cd) => {
    return httpCd.put("/Cd", CdId, Cd)
}

const deleteCd = (CdId) => {
    return httpCd.delete(`/Cd/${CdId}`)
}