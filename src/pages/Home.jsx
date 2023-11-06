import React, { useContext } from 'react'
import Carusal from '../components/Carusal'
import BrowseJobsByCategory from '../components/BrowseJobsByCategory'

const Home = () => {
 
  console.log(name)
  return (
    <div>
      <Carusal />
      <BrowseJobsByCategory />
    </div>
  )
}

export default Home