import React, { Component } from 'react'; //imrc
class XiaojiejieItem extends Component { //cc
   constructor(props) {
       super(props);
	   this.handleClick = this.handleClick.bind(this);
   }
    render() { 
        return ( 
            <div onClick={this.handleClick}>{this.props.content}</div>
         ); 
    }
	handleClick(){ 
		debugger; 
		this.props.deleteItem(this.props.index);  
	}  
}
export default XiaojiejieItem; 