let AppTodo = ({onAddtodos}) => {
    let input;
    return (
        <form onSubmit={e=>{
            e.preventDefault();
            if (input.value.trim() == "")
                return;
            onAddtodos(input.value);
            input.value="";
        }}>
            <input type='text' ref={node=>input=node}/>
            <button type='submit'>提交</button>
        </form>
    )
}

export default AppTodo;