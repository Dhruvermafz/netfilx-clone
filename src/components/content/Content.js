import './Content.css'
import RowData from '../constants/URLS';
import Row from '../row/Row';


export default function Content() {

  return (
    <div className='content-wrapper'>
    { RowData.map((el) => {
      return <Row title={el.title} url={el.url}/>
    })}
    </div>
  )
}


// API Key (v3 auth)
// 967df4e131f467edcdd674b650bf257c
// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=967df4e131f467edcdd674b650bf257c
