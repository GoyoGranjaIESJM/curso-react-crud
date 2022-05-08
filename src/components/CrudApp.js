import React, { useState } from 'react'
import { CrudFrom } from './CrudFrom'
import { CrudTable } from './CrudTable'

const initialDb = [
  { id: 1, name: 'Seiya', constellation: 'Pegaso' },
  { id: 2, name: 'Shiryu', constellation: 'Dragon' },
  { id: 3, name: 'Hyoga', constellation: 'Cisne' },
  { id: 4, name: 'Shun', constellation: 'Andromeda' },
  { id: 5, name: 'Ikki', constellation: 'Fenix' }
]
export const CrudApp = () => {
  const [db, setDb] = useState(initialDb)
  const [dataToEdit, setDataToEdit] = useState(null)
  const createData = (data) => {
    data.id = db.length + 1
    setDb([...db, data])
  }
  const updateData = (data) => {
    setDb(db.map(e => (e.id === data.id) ? data : e))
  }
  const deleteData = (id) => {
    const isDelete = confirm('¿Desea eliminar')
    if (isDelete) {
      setDb(db.filter(el => el.id !== id))
    }
  }
  return (
    <div><h2>CRUD APP</h2>
      <article className='grid-1-2'>
        <CrudFrom createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </article>
    </div>
  )
}
