import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectAnidados = () => {
  const [state, setState] = useState('')
  const [town, setTown] = useState('')
  const [suburb, setSuburb] = useState('')
  const TOKEN = '7e6dff76-92a4-4335-b61e-b06a2a5a436d'

  return (
    <div>
      <h2>SelectAnidados</h2>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value)
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value)
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value)
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  )
}

export default SelectAnidados
