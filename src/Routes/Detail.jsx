import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistStates } from '../Components/utils/globalContext'

const Detail = () => {

  const {state, dispatch} = useDentistStates()

  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  

  useEffect(() => {
    axios(url)
    .then((response) =>{
      dispatch({ type: "GET_DENTIST", payload: response.data })
    })
  
  }, [])

  return (
    <>
      <h1>Detalle del dentista Nro: {state.dentistSelected.id}</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Sitio web</th>
        </tr>
        <tr>
          <th>{state.dentistSelected.name}</th>
          <th>{state.dentistSelected.email}</th>
          <th>{state.dentistSelected.phone}</th>
          <th>{state.dentistSelected.website}</th>
        </tr>
      </table>
    </>
  )
}

export default Detail