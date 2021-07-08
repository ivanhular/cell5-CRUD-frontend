import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button, Spinner, Alert } from 'react-bootstrap'
import parse from 'html-react-parser'
import { GlobalContext } from '../context/Provider'
import {
  HOBBY_HIDE_CONTENT_MODAL,
  HOBBY_SELECTED,
  HOBBY_QUERY_WIKI_ERROR,
} from '../constants/actionTypes'
import { queryWiki } from '../context/actions/hobby'

const HobbyContentModal = () => {
  const {
    data: {
      selected,
      contentModal,
      queryWikiLoading,
      queryWikiSuccess,
      queryContent,
      queryError,
    },
    dispatch,
  } = useContext(GlobalContext)

  useEffect(() => {
    if (selected) {
      console.log(selected)
      queryWiki(selected.title)(dispatch)
    }
  }, [selected])
  return (
    <>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={contentModal}
        onHide={() => {
          dispatch({ type: HOBBY_HIDE_CONTENT_MODAL })
          dispatch({ type: HOBBY_SELECTED, payload: '' })
          dispatch({ type: HOBBY_QUERY_WIKI_ERROR, payload: '' })
        }}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title id='contained-modal-title-vcenter'>
            Result from WIKIPEDIA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {queryError ? (
            <Alert variant='danger'>{queryError}</Alert>
          ) : queryWikiLoading ? (
            <Spinner
              as='span'
              animation='border'
              size='md'
              role='status'
              aria-hidden='true'
            />
          ) : (
            parse(queryContent)
          )}
        </Modal.Body>
        {/* <Modal.Footer>
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
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default HobbyContentModal
