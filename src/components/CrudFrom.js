import React, { useState, useEffect } from 'react'

const inicialForm = {
  name: '',
  constellation: '',
  id: null
}

export const CrudFrom = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(inicialForm)
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(inicialForm)
    }
  }, [dataToEdit])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.constellation) {
      alert('Datos incompletos')
    }
    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }
  }
  const handleReset = (e) => {
    setForm(inicialForm)
    setDataToEdit(null)
  }
  return (
        <div>
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="text" name="constellation" placeholder="Constelación" onChange={handleChange} value={form.constellation}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
  )
}
