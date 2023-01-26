import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2:0
        }
        console.log("Child constructor");
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer Start");
        },1000);
        console.log("Child componentDidMount");
        
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child componentWillUnmount");
    }

    render(){
        console.log("Child Render");
        return(
            <div>
                <h1>Profile Class based component</h1>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.state.count}, {this.state.count2}</p>
                <button onClick={(e)=>(
                    this.setState({
                        count:1,
                        count2: 2
                    })
                )}>Click Here</button>
            </div>
        )
    }
}


export default ProfileClass;