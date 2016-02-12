import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { Intro } from 'views/Intro'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<Intro {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<Intro {...props} />)
}

describe('(View) StarterKitIntro', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      counter: 0,
      repos: [
        {id: 0, name: 'valjean'},
        {id: 1, name: 'charlie'}
      ],
      ...bindActionCreators({
        doubleAsync: (_spies.doubleAsync = sinon.spy()),
        increment: (_spies.increment = sinon.spy()),
        getRepos: (_spies.getRepos = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  describe('list of repos', function () {
    let _repos
    beforeEach(function () {
      _repos = TestUtils.scryRenderedDOMComponentsWithClass(_rendered, 'repo-container')
    })

    it('dispatch getRepos after rendering', function () {
      _spies.dispatch.should.have.been.called
      _spies.getRepos.should.have.been.called
    })
    it('render two repos', function () {
      expect(_repos[0]).to.exist
      expect(_repos[1]).to.exist
    })
    it('first repo is named \'valjean\'', function () {
      expect(_repos[0].textContent).to.match(/valjean/)
    })
  })

  it('render a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('render a <h1> with welcome text.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1')

    expect(h1).to.exist
    expect(h1.textContent).to.match(/Welcome to react-starter-kit/)
  })

  it('render first <h2> with correct text.', function () {
    const h2 = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'h2')[0]

    expect(h2).to.exist
    expect(h2.textContent).to.match(/Example redux action and thunk/)
  })

  it('render second <h2> with correct text.', function () {
    const h2 = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'h2')[1]

    expect(h2).to.exist
    expect(h2.textContent).to.match(/Example redux thunk fetching Code for America open source repos/)
  })

  it('render props.counter at the end of the sample counter <p>.', function () {
    const sampleCounter = TestUtils.scryRenderedDOMComponentsWithClass(
      renderWithProps({ ..._props, counter: 5 }), 'sample-counter'
    )[0]

    expect(sampleCounter).to.exist
    expect(sampleCounter.textContent).to.match(/5$/)
  })

  describe('An increment button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Increment/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.increment.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.increment.should.have.been.called
    })
  })

  describe('A Double (Async) button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Double/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.doubleAsync.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.doubleAsync.should.have.been.called
    })
  })
})
