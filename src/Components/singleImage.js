import React, { Component } from 'react'

export default class singleImage extends Component {

    constructor(props){
        super(props)

        this.state={
            span:''
        }

        this.imageRef = React.createRef()
        this.settingImageHeight = this.settingImageHeight.bind(this)
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.settingImageHeight);
        
    }
    settingImageHeight(){
      const  imageHeight = this.imageRef.current.clientHeight;

      const span = Math.ceil(imageHeight/10);

      this.setState({
          span:span,
      })

    
    }


    render() {

        const {description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` , cursor:'pointer' }}>
                <img ref={this.imageRef}  src={urls.regular} alt={description}/>
            </div>
        )
    }
}
