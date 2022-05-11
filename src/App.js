import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/headerFooter/Footer';
import Header from './components/headerFooter/Header';
import ListeClient from './components/clients/ListeClient';
import AjoutClient from './components/clients/AjoutClient';
import DocumentsBiblio from './components/documents/DocumentsBiblio';
import ListeLivre from './components/documents/livres/ListeLivre';
import AjoutLivre from './components/documents/livres/AjoutLivre';
import AjoutDvd from './components/documents/dvds/AjoutDvd';
import ListeDvd from './components/documents/dvds/ListeDvd';
import ListeCd from './components/documents/cds/ListeCd';
import AjoutCd from './components/documents/cds/AjoutCd';
import EmpruntsBiblio from './components/emprunts/EmpruntsBiblio';
import ListeEmpruntLivre from './components/emprunts/empruntLivre/ListeEmpruntLivre';
import AjoutEmpruntLivre from './components/emprunts/empruntLivre/AjoutEmpruntLivre';
import ListeEmpruntDvd from './components/emprunts/empruntDvd/ListeEmpruntDvd';
import AjoutEmpruntDvd from './components/emprunts/empruntDvd/AjoutEmpruntDvd';
import AjoutEmpruntCd from './components/emprunts/empruntCd/AjoutEmpruntCd';
import ListeEmpruntCd from './components/emprunts/empruntCd/ListeEmpruntCd';

function App() { 
  return (
    <div>  
      
        <Header />
        <div className= "container">
          <Routes>
          
              <Route  path = "/client" element = {<ListeClient/>}/>
              <Route  path = "/ajout-client" element = {<AjoutClient/>} />
              <Route path = "/modifie-client/:id" element = {<AjoutClient/>}/>
              <Route  path = "/document" element = {<DocumentsBiblio/>}/>
              <Route  path = "/livre" element = {<ListeLivre/>}/>
              <Route  path = "/ajout-livre" element = {<AjoutLivre/>}/>
              <Route path = '/modifie-livre/:id' element = {<AjoutLivre/>}/>
              <Route  path = "/dvd" element = {<ListeDvd/>}/>
              <Route  path = "/ajout-dvd" element = {<AjoutDvd/>}/>
              <Route path = '/modifie-dvd/:id' element = {<AjoutDvd/>}/>
              <Route  path = "/cd" element = {<ListeCd/>}/>
              <Route  path = "/ajout-cd" element = {<AjoutCd/>}/>
              <Route path = '/modifie-cd/:id' element = {<AjoutCd/>}/>
              <Route  path = "/emprunt" element = {<EmpruntsBiblio/>}/>
              <Route  path = "/empruntLivre" element = {<ListeEmpruntLivre/>}/>
              <Route  path = "/ajout-empruntLivre" element = {<AjoutEmpruntLivre/>}/>
              <Route  path = "/empruntDvd" element = {<ListeEmpruntDvd/>}/>
              <Route  path = "/ajout-empruntDvd" element = {<AjoutEmpruntDvd/>}/>
              <Route  path = "/empruntCd" element = {<ListeEmpruntCd/>}/>
              <Route  path = "/ajout-empruntCd" element = {<AjoutEmpruntCd/>}/>
            </Routes> 
        </div> 
        <Footer />
        
    </div> 
  );
}
 
export default App;
