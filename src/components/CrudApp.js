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
  const [db] = useState(initialDb)
  return (
    <div><h2>CRUD APP</h2>
    <CrudFrom />
    <CrudTable data={db} />
    </div>
  )
}
