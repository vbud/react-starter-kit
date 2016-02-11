import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../redux/modules/counter'
import { getRepos } from '../redux/modules/repos'
import DuckImage from './../static/Duck.jpg'
import './Intro.scss'

export class Intro extends React.Component {
  componentDidMount () {
    this.props.getRepos()
  }

  render () {
    return (
      <div>
        <Link to='todomvc'><h1>Check out the built-in todo app!</h1></Link>
        <h1>Welcome to react-starter-kit!</h1>
        <img className='duck' src={DuckImage} alt='Redux duck' />
        <img className='duck' src={DuckImage} alt='Redux duck' />
        <img className='duck' src={DuckImage} alt='Redux duck' />
        <p>^^^ Redux ducks</p>
        <hr/>
        <h2>Example redux action and thunk</h2>
        <p className='sample-counter'>
          Sample Counter: <span className='counter--green'>{this.props.counter}</span>
        </p>
        <button onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr/>
        <h2>Example redux thunk fetching Code for America open source repos</h2>
        <p>
          {
            this.props.repos.map((repo) => {
              return <span key={repo.id} className='repo-container'><a href={repo.html_url}>{repo.name}</a> - </span>
            })
          }
        </p>
      </div>
    )
  }
}
Intro.propTypes = {
  counter: PropTypes.number.isRequired,
  repos: PropTypes.array.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  repos: state.repos
})
export default connect(mapStateToProps, {
  increment,
  doubleAsync,
  getRepos
})(Intro)
