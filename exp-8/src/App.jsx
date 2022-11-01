import React from "react";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            password:"",
            isGreet:false,
        }
    }

    handleChange = (e)=>{

        if(e.target.name === "name"){
            this.setState({
                ...this.state, 
                [e.target.name]: e.target.value
            })
        } else if(e.target.name === "password"){
            this.setState({
                ...this.state, 
                [e.target.name]: e.target.value
            })
        }
    }

    handleClick = (e)=>{
        if(this.state.name){
            this.setState({
                ...this.state,
                ["isGreet"]: true
            })
        }
    }
    

    render(){
        return (
            <>
                <h1>{this.props.msg}</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange}/><br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <br />
                    <input type="button" value="Submit" onClick={this.handleClick} />
                    <h1>{this.state.isGreet? `Hello ${this.state.name}`:``}</h1>
                </form>
            </>
        )
    }
}

export default App;