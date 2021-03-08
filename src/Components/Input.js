import React, { Component } from 'react'

export default class Input extends Component {

    constructor(props){
        super(props);

        this.state ={
            name:''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e){
        this.setState({
            name:e.target.value
        })
        // console.log(this.state.name);
    }

    onSubmitHandler(event){
        event.preventDefault();
        this.props.onsubmit(this.state.name)
        
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmitHandler}>
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." value={this.state.name} onChange={this.onChangeHandler}/>
                    <i className="search icon"></i>
                </div>
                <input type='submit' className="ui submit button"/>
            </form>
        )
    }
}
