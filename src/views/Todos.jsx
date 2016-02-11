import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodosHeader from '../components/TodosHeader'
import TodosMainSection from '../components/TodosMainSection'
import { actions as TodoActions } from '../redux/modules/todos'
import './Todos.scss'

export class Todos extends Component {
  render () {
    const { todos, actions } = this.props
    return (
      <div className='todos-view'>
        <div className='todoapp'>
          <TodosHeader addTodo={actions.addTodo} />
          <TodosMainSection todos={todos} actions={actions} />
        </div>
      </div>
    )
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
