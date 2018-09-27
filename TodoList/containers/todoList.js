import { connect } from "react-redux";
import container from "../components/TodoList";
import { toggleTodo } from "../actions/todos";

const getVisibility = (list,filter)=>{
    switch (filter) {
        case 'SHOW_ALL':
            return list;
        case 'SHOW_COMPLETE':
            return list.filter(t=>t.done);
        case 'SHOW_ACTIVE':
            return list.filter(t=>!t.done);
        default:
            return list;
    }
}

const mapStateToProps = (state)=>{
    return {
        list: getVisibility(state.todos, state.visibility)
        // list :state.todos
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onToggleTodo:(id)=>{
            dispatch(toggleTodo(id));
        }
    };
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(container);

export default TodoList;