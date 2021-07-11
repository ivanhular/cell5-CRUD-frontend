import React, { useContext, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import HobbyListItem from './HobbyListItem'
import { GlobalContext } from '../context/Provider'
import { listHobby } from '../context/actions/hobby'
import { HOBBY_SORT_BY } from '../constants/actionTypes'

const HobbyList = () => {
  const {
    data: { hobbies },
    dispatch,
  } = useContext(GlobalContext)
  useEffect(() => {
    listHobby()(dispatch)
  }, [dispatch])

  const sortByHeader = (e) => {
    console.log(e.target.innerHTML.toLowerCase())
    dispatch({ type: HOBBY_SORT_BY, payload: e.target.innerHTML.toLowerCase() })
  }
  return (
    <>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th style={{ cursor: 'pointer' }} onClick={sortByHeader}>
              Title
            </th>
            <th style={{ cursor: 'pointer' }} onClick={sortByHeader}>
              Description
            </th>
            <th style={{ width: '15%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hobbies.map((hobby) => (
            <HobbyListItem hobby={hobby} key={hobby._id} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default HobbyList
