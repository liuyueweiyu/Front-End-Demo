const TodoItem = ({done,text,onToggleTodo})=>{
    return (
        <li style ={{ textDecoration: !done ? 'none' : 'line-through'}}
            onClick={onToggleTodo}>
            {text}
        </li>
    )
}

export default TodoItem;