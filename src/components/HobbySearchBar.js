import React, { useContext, useState } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/Provider'
import { HOBBY_SHOW_MODAL } from '../constants/actionTypes'
import { listHobby } from '../context/actions/hobby'

const HobbySearchBar = () => {
  const { dispatch } = useContext(GlobalContext)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  const searchHandler = () => {
    listHobby(search, sort)(dispatch)
  }
  return (
    <>
      <Col className='p-0' style={{ display: 'flex' }}>
        <Form.Control
          type='text'
          placeholder='Enter Search Keyword'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <select
          style={{
            borderRadius: ' .25rem',
            border: '1px solid #ced4da',
          }}
          onChange={(e) => setSort(e.target.value)}
        >
          <option>Sort By</option>
          <option value='title'>Title</option>
          <option value='description'>Description</option>
        </select>
        <Button variant='success' onClick={searchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Col>
      <Col
        className='p-0'
        style={{
          textAlign: 'right',
        }}
      >
        <Button
          onClick={() => {
            dispatch({ type: HOBBY_SHOW_MODAL })
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add New
        </Button>
      </Col>
    </>
  )
}

export default HobbySearchBar
