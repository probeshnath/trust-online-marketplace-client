import Carusal from '../components/Carusal'
import BrowseJobsByCategory from '../components/BrowseJobsByCategory'
import { Helmet } from 'react-helmet-async'

const Home = () => {
 

  return (
    <div>
      <Helmet>
        <title>Trust || Home</title>
      </Helmet>
      <Carusal />
      <BrowseJobsByCategory />
    </div>
  )
}

export default Home