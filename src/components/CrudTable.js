import React from 'react'

export const CrudTable = ({ data }) => {
  return (
    <div>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>a</th>
                    <th>d</th>
                    <th><button>Editar</button><button>Eliminar</button></th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
