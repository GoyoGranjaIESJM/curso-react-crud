import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Loader from './Loader'
import Message from './Message'

function SelectList ({ title, url, handleChange }) {
  const { data, error, loading } = useFetch(url)
  if (!data) return null
  if (error) {
    return (
      <Message
        msg={`${error.status} : ${error.statusText}`}
        bgColor="#dc3545"
      />
    )
  }
  const id = `select-${title}`
  const label = title.charAt(0).toUpperCase() + title.slice(1)
  const options = data.response[title]
  // console.log(options)
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  )
}

export default SelectList
