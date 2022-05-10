import React, { useEffect, useState } from 'react'
import { CrudFrom } from './CrudFrom'
import { CrudTable } from './CrudTable'
import { helpHttp } from '../helpers/helpHttp'
import Loader from './Loader'
import Message from './Message'

export const CrudApi = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const api = helpHttp()
  const url = 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }
      setLoading(false)
    })
  }, [])

  const createData = (data) => {
    data.id = db.length + 1
    setDb([...db, data])
  }
  const updateData = (data) => {
    setDb(db.map((e) => (e.id === data.id ? data : e)))
  }
  const deleteData = (id) => {
    const isDelete = confirm('¿Desea eliminar')
    if (isDelete) {
      setDb(db.filter((el) => el.id !== id))
    }
  }
  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudFrom
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"/>}
        { db &&
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}

      </article>
    </div>
  )
}
