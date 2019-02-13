import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/actions'
import mockAxios from 'jest-mock-axios';
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    mockAxios.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    mockAxios.getOnce('/', {
      body: { list: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.SHOW_POPULATION },
      { type: types.FETCH_TODOS_SUCCESS, body: { list: ['do something'] } }
    ]
    const store = mockStore({ list: [] })

    return store.dispatch(actions.showPopulation()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

