import { connect } from "react-redux";
import Counter from '../components/Counter';
import {add,sub} from '../actions';

const mapStateToProps = (state)=>{
    return {
        numlist : state.numlist
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAdd : (id)=>{
            dispatch(add(id));
        },
        onSub : (id)=>{
            dispatch(sub(id));
        }
    }
}

const couter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default couter;