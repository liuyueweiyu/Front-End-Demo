
const FilterLink = ({active,text,onSetvisibility})=>{
    if(active)
        return (<span>{text}</span>);
    else
        return (
            <a href='#' onClick={onSetvisibility}>{text}</a>
        );
}

export default FilterLink;