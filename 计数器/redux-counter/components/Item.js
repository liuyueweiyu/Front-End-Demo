const Item = ({index,onAdd,onSub,num})=>{
    return (
        <div>
            <button onClick = {
                () => {
                    onAdd(index);
                }
            } > + </button>
            <span>{num}</span>
            <button onClick={
                ()=>{
                    onSub(index);
                }
            }>-</button>
        </div>
    )
}

export default Item;