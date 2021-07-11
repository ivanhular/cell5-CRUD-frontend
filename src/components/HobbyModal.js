import React, { useState, useContext, useEffect } from 'react'
import { Form, Modal, Button, Spinner, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/Provider'
import { createHobby, updateHobby, listHobby } from '../context/actions/hobby'
import {
  HOBBY_HIDE_MODAL,
  HOBBY_SHOW_TOAST,
  HOBBY_TOAST_MESSAGE,
  HOBBY_CREATE_ERROR,
  HOBBY_CREATE_RESET,
  HOBBY_SELECTED,
} from '../constants/actionTypes'

const HobbyModal = (props) => {
  const {
    data: { success, modal, loading, error, selected },
    dispatch,
  } = useContext(GlobalContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const saveHandler = (e) => {
    e.preventDefault()
    if (selected) {
      updateHobby({
        id: selected._id,
        title,
        description,
      })(dispatch)
    } else {
      createHobby({
        title,
        description,
      })(dispatch)
    }
  }
  const clearInput = () => {
    setTitle('')
    setDescription('')
  }
  useEffect(() => {
    if (selected && modal) {
      setTitle(selected.title)
      setDescription(selected.description)
    }
    if (success) {
      dispatch({ type: HOBBY_HIDE_MODAL })
      listHobby()(dispatch)
      if (selected) {
        dispatch({
          type: HOBBY_TOAST_MESSAGE,
          payload: 'Successfully Updated!',
        })
        dispatch({ type: HOBBY_SELECTED, payload: '' })
      } else {
        dispatch({ type: HOBBY_TOAST_MESSAGE, payload: 'Successfully Added!' })
      }
      dispatch({ type: HOBBY_SHOW_TOAST })
      dispatch({ type: HOBBY_CREATE_ERROR, payload: '' })
      clearInput()
    }
  }, [success, modal, selected, dispatch])
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={modal}
      onHide={() => {
        dispatch({ type: HOBBY_HIDE_MODAL })
        dispatch({ type: HOBBY_CREATE_RESET })
        clearInput()
      }}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='contained-modal-title-vcenter'>New Hobby</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='title' className='mb-3'>
            <Form.Label>Title(required)</Form.Label>
            <Form.Control
              type='title'
              placeholder='Enter title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          {/* <FloatingLabel controlId='description' label='Comments'> */}
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              value={description}
              placeholder='description'
              style={{ height: '100px' }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          {/* </FloatingLabel> */}
        </Form>
        {error && <Alert variant='danger'>{error}</Alert>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' type='submit' onClick={saveHandler}>
          {loading ? (
            <Spinner
              as='span'
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
            />
          ) : (
            <FontAwesomeIcon icon={faSave} />
          )}{' '}
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default HobbyModal
