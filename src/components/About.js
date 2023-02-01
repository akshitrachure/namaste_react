import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = () => {
//     return(
//         <div>
//             <h1>This is About US Page.</h1>
//             <h2>H2 header</h2>
//             <Profile/>
//             <ProfileClass name="Akshit" age="21"/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    
    componentDidMount(){
        // this.timer = setInterval(()=>{
        //     console.log("Timer Start");
        // },1000);
        console.log("Parent componentDidMount");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("Parent componentWillUnmount");
    }

    render(){
        console.log("Parent Render");
        return(
            
            <div className="p-2">
             <h1 className="font-bold text-3xl p-2">This is About US Page.</h1>
             <h2 className="font-bold text-2xl p-2">H2 header</h2>
             <Profile/>
             <ProfileClass name="Akshit" age="21"/>
            </div>
        )
    }
}


export default About;