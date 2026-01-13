function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  )
}

export default TodoItem
