import React from "react"
import ListItem from "./ListItem"

const Lists = ({ todos, delHandler, doneHandler }) => {
  if (todos.length <= 0) {
    return (
      <div className="text-center">
        <h3>Add your watch list...</h3>
      </div>
    )
  }

  return (
    <div className="listWrap">
      <ul className="list-group">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              delHandler={delHandler}
              doneHandler={doneHandler}
            />
          ))}
      </ul>
    </div>
  )
}

export default Lists