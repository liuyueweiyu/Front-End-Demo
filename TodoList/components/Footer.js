import FilterLink from '../containers/filterLink';

const Footer = ()=>{
    return (
        <div>
            <FilterLink filter="SHOW_ALL" text='SHAOW_ALL'></FilterLink>,
            <FilterLink filter="SHOW_ACTIVE" text='SHOW_ACTIVE'></FilterLink>,
            <FilterLink filter="SHOW_COMPLETE" text='SHOW_COMPLETE'></FilterLink>
        </div>
    )
}

export default Footer;