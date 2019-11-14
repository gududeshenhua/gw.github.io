import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component { //cc
   constructor(props) {
       super(props);
	   this.handleClick = this.handleClick.bind(this);
   }
   componentWillReceiveProps(){
	   
   }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
			 {this.props.avname}为你服务-{this.props.content}
			</li> 
         ); 
    }
	handleClick(){ 
		debugger; 
		this.props.deleteItem(this.props.index);  
	}  
}   
XiaojiejieItem.propTypes = { 
	avname:PropTypes.string.isRequired, 
	content:PropTypes.string,
	index:PropTypes.number,
	deleteItem:PropTypes.func
 }  
 XiaojiejieItem.defaultProps={
	 avname:'2222' 
 }
export default XiaojiejieItem; 