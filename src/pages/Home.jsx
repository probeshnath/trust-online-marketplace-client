import Carusal from '../components/Carusal'
import BrowseJobsByCategory from '../components/BrowseJobsByCategory'
import { Helmet } from 'react-helmet-async'
import BottomHero from '../components/BottomHero'
import QuestionFrequently from '../components/QuestionFrequently'

const Home = () => {
 

  return (
    <div>
      <Helmet>
        <title>Trust || Home</title>
      </Helmet>
      <Carusal />
      <BrowseJobsByCategory />
      <BottomHero />
      <QuestionFrequently />
    </div>
  )
}

export default Home