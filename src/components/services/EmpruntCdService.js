import React from 'react';
import http from '../ConfigAxios'

const xgetAllEmpruntCds = () => {
  return http.get('/empruntCd')
}

const createEmpruntCd = (clientId, cdId) => {
  return httpClient.post('/saveEmprunt', clientId, cdId)
}

const getEmpruntCdById = (pretDocumentId) => {
  return httpClient
}
