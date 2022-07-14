import './App.css';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Taylor Swift Lyrics Generator</title>
      </Helmet>
      <Quotes/>
      <Footer></Footer>
    </div>
  );
}

export default App;
