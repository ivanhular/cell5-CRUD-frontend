import React, { useContext } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/Provider'
import {
  HOBBY_SELECTED,
  HOBBY_SHOW_DELETE_MODAL,
  HOBBY_SHOW_CONTENT_MODAL,
  HOBBY_SHOW_MODAL,
} from '../constants/actionTypes'

const HobbyListItem = ({ hobby: { _id, title, description } }) => {
  const { dispatch } = useContext(GlobalContext)

  const contentHandler = () => {
    dispatch({ type: HOBBY_SELECTED, payload: { _id, title, description } })
    dispatch({ type: HOBBY_SHOW_CONTENT_MODAL })
  }
  const updateHandler = () => {
    dispatch({ type: HOBBY_SELECTED, payload: { _id, title, description } })
    dispatch({ type: HOBBY_SHOW_MODAL })
  }
  const deleteHandler = () => {
    dispatch({ type: HOBBY_SELECTED, payload: { _id, title, description } })
    dispatch({ type: HOBBY_SHOW_DELETE_MODAL })
  }
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <OverlayTrigger
          placement='top'
          overlay={
            <Tooltip>
              Search <strong> {title} on WIKIPEDIA</strong>.
            </Tooltip>
          }
        >
          <Button size='sm' variant='success' onClick={contentHandler}>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </OverlayTrigger>{' '}
        <Button size='sm' onClick={updateHandler}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>{' '}
        <Button variant='danger' size='sm' onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  )
}

export default HobbyListItem
