import React from 'react'
import { shallow, mount, render } from '../../enzyme'
import HobbyList from '../../components/HobbyList'
import { GlobalContext, GlobalProvider } from '../../context/Provider'
import { act } from 'react-dom/test-utils' // ES6

let wrapper

beforeEach(() => {
  const hobbyInitialState = {
    loading: false,
    success: false,
    deleteLoading: false,
    deleteSuccess: false,
    error: '',
    hobbies: [
      { _id: '1', title: 'basketball', description: 'test' },
      { _id: '2', title: 'tennis', description: 'test' },
      { _id: '3', title: 'golf', description: 'test' },
    ],
    modal: false,
    deleteModal: false,
    contentModal: false,
    toast: false,
    toastMessage: '',
    selected: '',
    queryWikiLoading: false,
    queryWikiSuccess: false,
    queryContent: '',
    queryError: '',
  }

  wrapper = render(
    <GlobalContext.Provider value={{ data: hobbyInitialState }}>
      <HobbyList />
    </GlobalContext.Provider>
  )
})

afterEach(() => {})

test('should render HobbyList', async () => {
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('tbody tr')).toHaveLength(3)
})
