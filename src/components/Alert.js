import React, { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { HOBBY_HIDE_TOAST } from '../constants/actionTypes'
import { GlobalContext } from '../context/Provider'

const Alert = () => {
  const {
    data: { toast, toastMessage },
    dispatch,
  } = useContext(GlobalContext)

  return (
    <Toast
      show={toast}
      onClose={() => dispatch({ type: HOBBY_HIDE_TOAST })}
      autohide={true}
    >
      <Toast.Header>
        {/* <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' /> */}
        <strong className='me-auto'>Notification</strong>
        <small>now</small>
      </Toast.Header>
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
  )
}

export default Alert
