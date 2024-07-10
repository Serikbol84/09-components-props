import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom'
import Content from './Components/Pages/Content';


function App() {
  return (
    <div className="App">
      <Header />  
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
