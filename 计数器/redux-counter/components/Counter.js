import Item from './Item';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ans : 0
        }
    }

    setSum(numlist) {
        if(numlist){
            let sum = 0;
            for (let i = 0; i < numlist.length; i++) {
                sum += numlist[i];
            }
            this.setState({
                ans:sum
            });
        }
    }
    componentWillMount(){
        this.setSum(this.props.numlist);
    }

    componentWillReceiveProps(nextprops){
        this.setSum(nextprops.numlist);
    }
    render(){
        const  {numlist,onAdd,onSub} = this.props;
        if(numlist)
        
            return (
                <div>
                    {numlist.map((n,i)=>
                        <Item key={i}
                            index={i}
                            onAdd={onAdd}
                            onSub={onSub}
                            num = {numlist[i]}/>
                    )}
                    <p>Sum : {this.state.ans}</p>
                </div>
            );
        else
            return (
                <h1>No Counter!</h1>
            )
        }
}


export default Counter;