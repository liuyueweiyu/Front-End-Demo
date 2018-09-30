export const add = (id)=>{
    return {
        type:'ADD',
        id
    }
}

export const sub = (id)=>{
    return {
        type:'SUB',
        id
    }
}

export const sum = (num)=>{
    return {
        type:'SUM',
        sum: num
    }
}