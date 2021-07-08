import React, { useState, useEffect, useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import HobbyList from './components/HobbyList'
import HobbyModal from './components/HobbyModal'
import HobbySearchBar from './components/HobbySearchBar'
import Alert from './components/Alert'
import HobbyDeleteModal from './components/HobbyDeleteModal'
import HobbyContentModal from './components/HobbyContentModal'
import { GlobalProvider } from './context/Provider'
import './App.css'

const styles = {
  app: {
    marginTop: '5em',
  },
  container: {
    maxWidth: '900px',
  },
}

const App = () => {
  return (
    <GlobalProvider>
      <div className='App' style={styles.app}>
        <Container style={styles.container}>
          <Row className='pb-3'>
            <HobbySearchBar />
          </Row>
          <Row>
            <HobbyList />
          </Row>
        </Container>
      </div>
      <Alert />
      <HobbyModal />
      <HobbyDeleteModal />
      <HobbyContentModal />
    </GlobalProvider>
  )
}

export default App
