
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '967df4e131f467edcdd674b650bf257c',
}

const App = () =>{
  return (
    <div>
       <Nav />
       <Header/>
       <Content/>
    </div>
  )
}
export default App;
