import React from 'react'
import './App.css'
import { CrudApi } from './components/CrudApi'
import SongSearch from './components/SongSearch'
// import { CrudApp } from './components/CrudApp'

function App () {
  return (
    <>
      <h2>Ejercicios con React</h2>
      <SongSearch />
      <CrudApi />
      {/* <CrudApp /> */}
      <hr />
    </>
  )
}
export default App
