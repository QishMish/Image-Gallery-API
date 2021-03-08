import React, { Component } from 'react';
import Header from "./Components/Header";
import axios from "axios";
import Input from "./Components/Input";
import Images from './Components/Images';


export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      images : []
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount(){
    this.onSearchSubmit('coding')
  }

  async onSearchSubmit(name){

    const key = process.env.REACT_APP_UNSPLASH_API_KEY

    const result = await axios.get('https://api.unsplash.com/search/photos', {
      params:{
        query:name
      },
      headers:{
        Authorization:`Client-ID ${key}`
      }
    })
    this.setState({
      images : result.data.results
    })
  }



  render() {

    return (
          <div className="App">
            <Header />
            <Input onsubmit={this.onSearchSubmit}/>
            <div className="ui container">
              <p> {this.state.images.length>0?  this.state.images.length + ' ' + 'Images Found'  :null}</p>
              <Images allImages = {this.state.images}/>
            </div>``
          </div>
      )
  }
}