import React, { useState } from 'react'

const inicialForm = {
  name: '',
  constellatio: '',
  id: null
}

export const CrudFrom = () => {
  const [form] = useState(inicialForm)
  const handleChange = (e) => {

  }
  const handleSubmit = (e) => {

  }
  const handleReset = (e) => {

  }
  return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="text" name="constellation" placeholder="Constelación" onChange={handleChange} value={form.name}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
  )
}
