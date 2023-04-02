import { useState } from 'react'
import uuid from 'uuid/v4'

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const updateTaskText = (event) => {
    setTaskText(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }])
    setTaskText('')
  }

  const completeTask = (completedTask) => () => {
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter((task) => task.id !== completedTask.id))
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask()
      setTaskText('')
    }
  }

  const deleteTask = (task) => () => {
    setTasks(tasks.filter((t) => t.id !== task.id))
  }

  const deleteCompletedTask = (task) => () => {
    setCompletedTasks(completedTasks.filter((t) => t.id !== task.id))
  }

  return (
    <section>
      <h3>Tasks</h3>

      <article className="form">
        <input
          value={taskText}
          onChange={updateTaskText}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </article>

      <article>
        {tasks.map((task) => {
          const { id, taskText } = task

          return (
            <div key={id}>
              <div>
                {taskText}{' '}
                <span className="delete-task" onClick={deleteTask(task)}>
                  x
                </span>
              </div>
              <button onClick={completeTask(task)}>Mark Complete</button>
            </div>
          )
        })}
      </article>

      <h3>Completed Tasks</h3>
      <article>
        {completedTasks.map((task) => {
          const { id, taskText } = task

          return (
            <div key={id} className="completed-list">
              {taskText}{' '}
              <span className="delete-task" onClick={deleteCompletedTask(task)}>
                x
              </span>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Tasks
