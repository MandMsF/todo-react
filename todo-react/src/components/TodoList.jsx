import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList

// function TodoList({ todos }) {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   )
// }

// export default TodoList
