import Counter from './Counter';

class CounterPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            couters:[0,0,0],
            sum:0
        }
        this.onCounterChnage = this.onCounterChnage.bind(this);
    }
    onCounterChnage(newnum,index) {
        let arr = this.state.couters;
        let newsum = 0;
        arr[index] = newnum;
        for (let i = 0; i < arr.length; i++) {
            newsum += arr[i];
        }
        this.setState({
            couters:arr,
            sum: newsum
        });
    }
    render(){
        return (
            <div>
                {this.state.couters.map(
                    (v,i)=><Counter key={i} num={v} index={i} onCounter={this.onCounterChnage} />
                )}
                <p>Sum: {this.state.sum}</p>
            </div>
        )
    }
}

export default CounterPanel;