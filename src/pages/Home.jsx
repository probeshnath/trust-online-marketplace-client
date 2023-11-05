import React, { useContext } from 'react'
import Carusal from '../components/Carusal'
import { AuthContext } from '../provider/AuthProvider'

const Home = () => {
  // const {name} = useContext(AuthContext)
  console.log(name)
  return (
    <div>
      <Carusal />
    </div>
  )
}

export default Home