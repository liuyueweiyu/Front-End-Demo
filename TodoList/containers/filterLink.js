import { connect } from "react-redux";
import FilterLink from "../components/FilterLink";
import { setVisibility } from "../actions/todos";

const mapStateToProps = (state,ownProps)=>{
    return {
        active: state.visibility === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onSetvisibility:()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

const filterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);

export default filterLink;