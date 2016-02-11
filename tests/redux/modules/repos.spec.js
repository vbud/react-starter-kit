import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Interceptor from 'xhr-interceptor'

import { SHOW_REPOS, showRepos, getRepos } from '../../../src/redux/modules/repos'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('redux', () => {
  describe('repos module', function () {
    let interceptor, repos
    beforeEach(() => {
      interceptor = new Interceptor()
      repos = [
        {id: 0, name: 'valjean'},
        {id: 1, name: 'charlie'},
      ]
    })
    afterEach(() => {
      interceptor.close()
    })

    it('dispatches SHOW_REPOS action after fetching repos', function (done) {
      interceptor.get('https://api.github.com/orgs/codeforamerica/repos', function (req, res) {
        res.json(repos)
      })

      const expectedActions = [
        { type: SHOW_REPOS, payload: repos }
      ]
      const store = mockStore({}, expectedActions, done)
      store.dispatch(getRepos())
    })

    it('creates SHOW_REPOS action', function () {
      expect(showRepos(repos)).to.deep.equal({ type: SHOW_REPOS, payload: repos })
    })
  })
})
