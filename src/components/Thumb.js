import React from 'react';
import '../index.css';
import Carousel from 'nuka-carousel';


export default class Thumb extends React.Component{
    
    constructor(props){
        super(props);
        this.isScaleUp = true;
        this.state = {
            size: 0
        }
        
        this.mixins= [Carousel.ControllerMixin]
    }
    setSize(ratio){
        

        this.setState({size: window.innerWidth * ratio })
    }
    componentDidMount(){
        this.setSize(0.8 / document.getElementById(this.props.id).parentElement.children.length );
    }
    getNeighbours(id){
        let elems =  document.getElementById(id).parentElement.children;
        let neighbours = [];
        for(let i = 0; i < elems.length; i++){
            if(elems[i].id !== id)
            neighbours.push(elems[i]);
        }
        return neighbours;
    }
    numOfRealNeighbours(arr){
        let count = 0;
        for(let i = 0; i < arr.length;i++){
            if(arr[i]) count++;
        }
        return count;
    }
    applyScaleLogic(div){
        let neighbours = this.getNeighbours(div.id);
        for(let i = 0; i < neighbours.length; i++)
            if(neighbours[i]) neighbours[i].classList.add('scale-down');
        div.classList.add('scale-up');
        this.setSize(0.8);

    }
    removeScaleLogic(div){
        let neighbours = this.getNeighbours(div.id);
        for(let i = 0; i < neighbours.length; i++)
            if(neighbours[i]) neighbours[i].classList.remove('scale-down');
        div.classList.remove('scale-up');
        this.setSize(0.8 / document.getElementById(this.props.id).parentElement.children.length );
    }
    Images(){
        let imgs = [];
        for(let i = 0; i < this.props.data.imgs.length;i++){
            imgs.push(
            <img 
                alt=""
                onClick={(event) =>{
                    event.stopPropagation();
                    let div = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                    if(this.isScaleUp){
                        this.applyScaleLogic(div);
                    } else {
                        this.removeScaleLogic(div);
                    }
                    this.isScaleUp = !this.isScaleUp;
                }}
                width={this.state.size}
                height={this.state.size} 
                key={this.props.data.imgs[i].url} 
                src={this.props.data.imgs[i].url}
            
            ></img>)
        }
        return imgs;
    }
    render(){
        
        return (
            <div
                className="thumb"
                id={this.props.id }>
                <Carousel
                    wrapAround={false}
                    cellSpacing={0}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <p></p>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <p></p>
                      )}
                    >
                   {this.Images()}
                </Carousel>
                
                <p className="textCenter">{(this.props.data.price ? (this.props.data.price + " ₺"): "")}</p>    
            </div>
        );
    }

}