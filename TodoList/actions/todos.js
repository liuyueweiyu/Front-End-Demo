let nowcount = 0;

export const addTodo =  function (text) {
    return {
        type : "ADD_TODO",
        id: nowcount++,
        text
    }
}

export const toggleTodo = function (id) {
    return{
        type : "TOGGLE_TODO",
        id
    }
}

export const setVisibility = function (filter) {
    return {
        type : "SET_VISIBILITY",
        filter
    }
}