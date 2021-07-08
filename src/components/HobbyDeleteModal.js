import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button, Spinner, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/Provider'
import { listHobby, deleteHobby } from '../context/actions/hobby'
import {
  HOBBY_HIDE_DELETE_MODAL,
  HOBBY_SHOW_TOAST,
  HOBBY_TOAST_MESSAGE,
  HOBBY_SELECTED,
} from '../constants/actionTypes'

const HobbyDeleteModal = () => {
  const {
    data: { selected, deleteSuccess, deleteModal, deleteLoading, error },
    dispatch,
  } = useContext(GlobalContext)

  const deleteHandler = (e) => {
    e.preventDefault()
    deleteHobby(selected._id)(dispatch)
  }

  useEffect(() => {
    if (deleteSuccess) {
      dispatch({ type: HOBBY_HIDE_DELETE_MODAL })
      listHobby()(dispatch)
      dispatch({ type: HOBBY_TOAST_MESSAGE, payload: 'Successfully Deleted!' })
      dispatch({ type: HOBBY_SHOW_TOAST })
    }
  }, [deleteSuccess])
  return (
    <>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={deleteModal}
        onHide={() => {
          dispatch({ type: HOBBY_HIDE_DELETE_MODAL })
          dispatch({ type: HOBBY_SELECTED, payload: '' })
        }}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title id='contained-modal-title-vcenter'>
            Delete Hobby
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete hobby: <strong>{selected.title}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' type='submit' onClick={deleteHandler}>
            {deleteLoading && (
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
            )}{' '}
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HobbyDeleteModal
