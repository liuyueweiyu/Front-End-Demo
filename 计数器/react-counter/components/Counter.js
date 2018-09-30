class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease(){
        console.log(this.props.num+1);
        this.props.onCounter(this.props.num+1,this.props.index);
    }
    onDecrease(){
        this.props.onCounter(this.props.num-1,this.props.index);
    }
    render(){
        return (
            <div>
                <button onClick={this.onIncrease}>+</button>
                <span>{this.props.num}</span>
                <button onClick={this.onDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;