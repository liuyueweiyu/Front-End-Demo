import AddTodo from "../containers/addTodo.js";
import TodoList from '../containers/todoList.js';
import Footer from "./Footer";

class App extends React.Component{
    render(){
        return(
            <div>
                <AddTodo />
                <TodoList />
                <Footer />
            </div>  
        )
    }
}

export default App;