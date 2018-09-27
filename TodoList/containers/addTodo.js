import { connect } from "react-redux";
import container from "../components/AddTodo";
import { addTodo } from "../actions/todos";


const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddtodos:(text)=>{
            dispatch(addTodo(text));
        }
    }
}

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(container);

export default AddTodo;