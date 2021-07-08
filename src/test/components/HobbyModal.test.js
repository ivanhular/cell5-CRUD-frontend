import React from 'react'
import { mount, shallow } from '../../enzyme'
import { GlobalContext, GlobalProvider } from '../../context/Provider'
import HobbyModal from '../../components/HobbyModal'

const getWrapper = (
  hobbyInitialState = {
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
) =>
  mount(
    <GlobalContext.Provider
      value={{ data: hobbyInitialState, dispatch: jest.fn() }}
    >
      <HobbyModal />
    </GlobalContext.Provider>
  )

test('should render Modal', () => {
  const wrapper = getWrapper({ modal: true })
  expect(wrapper).toMatchSnapshot()
})

test('should Modal Form Save', () => {
  //   const spy = jest.spyOn(util, 'saveHandler').mockImplementation(() => {})
  const wrapper = getWrapper({ modal: true })
  wrapper.find('.btn-success').simulate('click')
  expect(wrapper.find('.alert')).not.toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})

test('Can input change', () => {
  const useStateSpy = jest.spyOn(React, 'useState')
  const wrapper = getWrapper({ modal: true })
  wrapper.find('input').simulate('change')
  expect(useStateSpy).toHaveBeenCalled()
})
