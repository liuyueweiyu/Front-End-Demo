
const calc=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            if(state.index != action.id)
                return state.t;
            return state.t + 1;
        case 'SUB':
            if (state.index != action.id)
                return state.t;
            return state.t - 1;
        default:
            break;
    }
}

const counter = (state=[],action)=>{    
    switch (action.type) {
        case 'ADD':
            return {
                numlist: state.numlist.map((t, index) => calc({
                    t,
                    index
                }, action))
            }
        case 'SUB':
            return {
                numlist: state.numlist.map((t, index) => calc({
                    t,
                    index
                }, action))
            }
        default:
            return state;
    }
}

export default counter;
