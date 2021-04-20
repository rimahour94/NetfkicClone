
import './App.css';
import Row from "./Row"
import requests from "./request"
import Banner from './Banner';
import Nav from "./Nav"
function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <Nav/>
       <Banner/>
        <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOrigionals}
        isLargeRow/>
        <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
        
        

      </header>
    </div>
  );
}

export default App;
