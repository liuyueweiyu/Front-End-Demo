import TodoItem from "./TodoItem";

const TodoList = ({list,onToggleTodo})=>{
    if (list)
        return (
            <ul>
                {list.map((todo) =>(
                        <TodoItem
                            key = {todo.id}
                            {...todo}
                            onToggleTodo = {()=>onToggleTodo(todo.id)}
                        />
                    ))
                }
            </ul>
        );
    else
        return (<h1>There is no item!</h1>)
}

export default TodoList;