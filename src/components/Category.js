import React from 'react';
import '../index.css';
import GridWrapper from './GridWrapper.js';


export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thumb: true
        }
    }
    toggleThumb = ()=>{
        this.setState({ thumb: !this.state.thumb});
    }
    render(){
        return (
            <div className="category">
                <h2 >{this.props.name}</h2>
                <p className="textCenter">{this.props.desc}</p>
                <div className="categorychild" >
                    {
                        this.state.thumb ? 
                        <div className="container">
                            <img 
                            onClick={this.toggleThumb} 
                            loading="lazy"
                            className="image" 
                            alt="" 
                            src={this.props.thumb}  
                            /> 
                            <div onClick={this.toggleThumb}  className="imageText">Tıklayınız... </div>
                        </div>:
                        <GridWrapper
                            extraFunc={this.toggleThumb} 
                            data={this.props.data}
                            gridId={this.props.name[0] + this.props.name[1]}
                            thumbType="meme"
                        />
                    }
                </div>
            </div>
        );
    }

}